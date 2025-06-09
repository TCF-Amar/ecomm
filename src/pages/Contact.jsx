import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import useScroll from '../utils/useScr'

function Contact() {
  useEffect(() => {
    useScroll()
  }, [])
  return (
    <div className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you! Whether you have a question about features, pricing, or anything else — our team is ready to answer all your questions.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li><strong>📧 Email:</strong> support@example.com</li>
            <li><strong>📞 Phone:</strong> +91 9876543210</li>
            <li><strong>📍 Address:</strong> Satna, Madhya Pradesh, India</li>
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-gray-100 rounded-lg p-6 shadow-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
