import React from 'react'
import { motion } from 'framer-motion'
import { Fa500Px, FaCrown, FaTag } from 'react-icons/fa'

function Item({ product }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
        >
            <div className="aspect-square overflow-hidden relative">
                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {
                    product.bestSeller &&

                    <p className='absolute  top-1 flex  item-center justify-center    right-1 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded'>
                        <FaCrown className='inline mr-1' />
                        BestSeller</p>
                }
            </div>
            <div className="p-4">
                <h3 className="text-gray-800 font-medium line-clamp-1">{product.title}</h3>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-900 font-bold">₹{product.finalPrice}</span>
                    {product.discount > 0 && (
                        <span className="text-green-600 text-sm">{product.discount}% OFF</span>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default Item
