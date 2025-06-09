import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { HiXMark } from 'react-icons/hi2';
import { FaTimes } from 'react-icons/fa';
import { useAuth } from '../store/useAuth';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { register,isLogin } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin) {
            navigate("/")
        }
    }, [isLogin]);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        // confirm password
        if (password !== confirmPassword) {
            return;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            register(formData.name,formData.email, formData.password);
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center  ">
            <motion.div
                className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl px-10 py-12 w-full max-w-md border border-white/20 relative"
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
            >
                <Link to={'/'}>
                    <FaTimes className="absolute top-4 right-4 text-white cursor-pointer" />
                </Link>
                <h2 className="text-3xl font-bold text-center text-white mb-8 drop-shadow-lg">Create Account ✨</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />

                    <motion.button
                        type="submit"
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.03 }}
                        className="w-full bg-white text-indigo-600 font-semibold py-3 rounded-xl hover:bg-indigo-100 transition-all shadow-md"
                    >
                        📝 Register
                    </motion.button>
                </form>

                <p className="text-sm text-center text-white/70 mt-6">
                    Already have an account? <Link to={'/auth/login'} className="underline cursor-pointer hover:text-white">Login</Link>
                </p>
            </motion.div>
        </div>
    );
}

export default Register;
