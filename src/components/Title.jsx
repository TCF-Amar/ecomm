import React from 'react'
import { motion } from 'framer-motion'

function Title({ test1, test2 }) {
  return (
    <motion.div
      className='flex gap-2 items-baseline'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h1
        className="text-2xl font-semibold text-gray-700"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {test1}
      </motion.h1>

      <motion.h2
        className="text-2xl font-semibold text-gray-600"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {test2}
      </motion.h2>

      <motion.span
        className='h-[1px] w-10 border border-gray-600'
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.div>
  )
}

export default Title
