import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useCart from '../store/useCart';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import useScroll from '../utils/useScr';

function Cart() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();

  useEffect(() => {
    useScroll()
  },[])

  const handleQuantityChange = (item, change) => {
    const newQuantity = item.quantity + change;
    if (newQuantity < 1 || newQuantity > item.maxQuantity) return;
    updateQuantity(item.id, item.size, newQuantity);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Your Cart is Empty</h1>
          <Link
            to="/collections"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 px-4 mt-5 "
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {items.map((item) => (
              <motion.div
                key={`${item.id}-${item.size}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-lg shadow-sm p-4 flex gap-4"
              >
                {/* Product Image */}
                <Link to={`/product/${item.id}`} className="w-24 h-24 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </Link>

                {/* Product Details */}
                <div className="flex-grow">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="font-medium text-gray-900 hover:text-blue-600">{item.title}</h3>
                  </Link>
                  <div className="mt-1 text-sm text-gray-500">
                    <p>Size: {item.size}</p>
                    <p>Color: {item.color}</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleQuantityChange(item, -1)}
                        className="p-1 rounded-full hover:bg-gray-100"
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus className="text-gray-600" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item, 1)}
                        className="p-1 rounded-full hover:bg-gray-100"
                        disabled={item.quantity >= item.maxQuantity}
                      >
                        <FaPlus className="text-gray-600" />
                      </button>
                    </div>

                  </div>
                 <br />
                    <div className="flex justify-between items-center gap-4">
                      <span className="font-medium bg-gray-200 p-2 rounded ">₹{(item?.price * item.quantity).toFixed(2)}</span>
                      <button
                        onClick={() => removeItem(item.id, item.size)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <FaTrash />
                      </button>
                    </div>
                </div>
              </motion.div>
            ))}

            <button
              onClick={clearCart}
              className="text-red-500 hover:text-red-600 text-sm mt-4"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex justify-between">
                  <span>Items ({items.length}):</span>
                  <span>₹{getTotalPrice()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span className="text-green-600">Free</span>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold text-gray-900 mb-6">
                  <span>Total:</span>
                  <span>₹{getTotalPrice()}</span>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors">
                  Proceed to Checkout
                </button>
                
                <Link
                  to="/collections"
                  className="block text-center text-blue-600 hover:text-blue-700 mt-4"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Cart;