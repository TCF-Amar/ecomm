import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { useAuth } from '../store/useAuth';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLogin } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogin) {
            navigate("/")
        }
    }, [isLogin]);

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <motion.div
                className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl px-10 py-12 w-full max-w-md border border-white/20 relative"
                initial={{ opacity: 0, scale: 0.8, y: 60 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, type: 'spring' }}
            >
                <Link to={'/'}>
                    <FaTimes className="absolute top-4 right-4 text-white cursor-pointer" />
                   
                </Link>
                <h2 className="text-3xl font-bold text-center text-white mb-8 drop-shadow-lg">Welcome Back 👋</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-300"
                        />
                    </div>

                    <motion.button
                        type="submit"
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.03 }}
                        className="w-full bg-white text-pink-600 font-semibold py-3 rounded-xl transition-all hover:bg-pink-100 shadow-md"
                    >
                        🚀 Login
                    </motion.button>
                </form>

                <p className="text-sm text-center text-white/70 mt-6">
                    Don’t have an account? <Link to={'/auth/register'} className="underline cursor-pointer hover:text-white">Register</Link>
                </p>
            </motion.div>
        </div>
    );
}

export default Login;
