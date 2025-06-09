import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function NotFound() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
            <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-7xl font-bold text-blue-600 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
                <p className="text-gray-600 mb-6">
                    Sorry! The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                    Go to Home
                </Link>
            </motion.div>
        </div>
    )
}

export default NotFound
