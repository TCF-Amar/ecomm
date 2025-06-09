import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import aboutImg from '../assets/about.jpg' // अपनी image का path सही रखना
import useScroll from '../utils/useScr'

function About() {
  useEffect(() => {
    useScroll()
  }, [])
  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <motion.img
          src={aboutImg}
          alt="About Us"
          className="w-full h-auto rounded-lg shadow-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 text-lg mb-4">
            Welcome to <strong>MyStore</strong> — your destination for quality, affordability, and uniqueness. We offer a wide range of fashion, gadgets, and home essentials designed with care.
          </p>
          <p className="text-gray-600 text-base">
            Our journey began with a simple vision: to make premium products accessible to everyone. We believe in customer satisfaction, fast delivery, and secure shopping experiences.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About
