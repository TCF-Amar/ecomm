import { create } from "zustand";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { firebaseAuth, firestore } from "../utils/firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { update } from "firebase/database";

export const useAuth = create((set, get) => ({
    isLogin: false,
    user: null,
    loading: false,
    error: null,

    // 🔧 Manually set user
    setUser: (user) => set({ user, isLogin: !!user }),

    // 🔐 Login Function
    login: async (email, password) => {
        set({ loading: true, error: null });
        try {
            const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);

            // Firestore से additional user data fetch
            const userData = await get().getUser(userCredential.user.uid);

            set({
                isLogin: true,
                user: userData ? {  ...userData } : userCredential.user,
                loading: false,
                error: null,
            });

        } catch (error) {
            console.error("Login failed:", error.message, error.code, error);
            set({ loading: false, error: error.message });
        }
    },

    // 📝 Register Function
    register: async (name, email, password) => {
        set({ loading: true, error: null });
        try {
            const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);

            // Firestore में user का data save करें
            await setDoc(doc(firestore, "users", userCredential.user.uid), {
                uid: userCredential.user.uid,
                name: name,
                email: userCredential.user.email,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                photoURL: userCredential.user.photoURL || null,
            });

            // Firestore से user data fetch करें
            const userData = await get().getUser(userCredential.user.uid);

            set({
                isLogin: true,
                user: userData ? { ...userData } : userCredential.user,
                loading: false,
                error: null,
            });

        } catch (error) {
            console.error("Registration failed:", error.message, error.code, error);
            set({ loading: false, error: error.message });
        }
    },

    // 👤 Firestore से user fetch करना
    getUser: async (uid) => {
        try {
            const userDoc = await getDoc(doc(firestore, "users", uid));
            if (userDoc.exists()) {
                return userDoc.data();
            } else {
                console.warn("No such user found in Firestore!");
                return null;
            }
        } catch (error) {
            console.error("Error fetching user from Firestore:", error);
            return null;
        }
    },

    // 🔍 Auth Check Function
    authCheck: () => {
        onAuthStateChanged(firebaseAuth, async (user) => {
            if (user) {
                const userData = await get().getUser(user.uid);
                set({
                    isLogin: true,
                    user: userData ? { ...userData } : user,
                });
            } else {
                set({ isLogin: false, user: null });
            }
        });
    },

    // 🚪 Logout Function
    logout: async () => {
        try {
            await signOut(firebaseAuth);
            set({ user: null, isLogin: false });
        } catch (error) {
            console.error("Logout failed:", error);
        }
    },
}));
