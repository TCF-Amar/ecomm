import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useProduct from '../store/useProduct';
import useCart from '../store/useCart';
import { FaStar, FaCheck, FaMinus, FaPlus, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function Product() {
  const { id } = useParams();
  const products = useProduct((state) => state.products);
  const addItem = useCart((state) => state.addItem);
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    setProduct(foundProduct);

    if (foundProduct) {
      // Find related products based on category and gender
      const related = products.filter(p =>
        p.id !== id && (
          p.category.some(cat => foundProduct.category.includes(cat)) ||
          p.gender === foundProduct.gender
        )
      ).slice(0, 4);
      setRelatedProducts(related);
    }

    // Reset states when product changes
    setSelectedSize('');
    setQuantity(1);
    setAddedToCart(false);
    setCurrentImageIndex(0);
  }, [id, products]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [id]) // Adding id to dependencies to scroll top when related product is selected

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setAddedToCart(false);
  };

  const handleQuantityChange = (change) => {
    setQuantity(prev => {
      const newQuantity = prev + change;
      if (newQuantity < 1) return 1;
      if (selectedSize && newQuantity > product.stock[selectedSize]) {
        return product.stock[selectedSize];
      }
      return newQuantity;
    });
  };

  const handleAddToCart = () => {
    if (!selectedSize || !product) return;
    
    const item = {
      id: product.id,
      title: product.title,
      price: product.finalPrice,
      quantity,
      size: selectedSize,
      image: product.images[0],
      color: product.colors.name,
      maxQuantity: product.stock[selectedSize]
    };
    
    addItem(item);
    setAddedToCart(true);
  };

  const nextImage = () => {
    setCurrentImageIndex(prev =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 pb-12 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-6">
            {/* Product Image Gallery Section */}
            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              className="space-y-4"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={product.images[currentImageIndex]}
                    alt={`${product.title} - View ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                    >
                      <FaAngleLeft className="text-xl" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
                    >
                      <FaAngleRight className="text-xl" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => selectImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${currentImageIndex === index ? 'ring-2 ring-blue-500' : ''
                        }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Product Tags */}
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Product Details Section */}
            <motion.div
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                <p className="text-lg text-gray-600 mt-2">{product.description}</p>
              </div>

              {/* Price Section */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-gray-900">₹{product.finalPrice}</span>
                  {product.discount > 0 && (
                    <>
                      <span className="text-xl text-gray-500 line-through">₹{product.price}</span>
                      <span className="text-green-600 font-semibold">{product.discount}% OFF</span>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={index < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Select Size</span>
                  {selectedSize && (
                    <span className="text-gray-600">
                      Stock: {product.stock[selectedSize]}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={`
                        h-10 w-10 rounded-full flex items-center justify-center
                        ${selectedSize === size
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }
                        ${!product.stock[size] && 'opacity-50 cursor-not-allowed'}
                      `}
                      disabled={!product.stock[size]}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="flex items-center gap-4">
                <span className="text-gray-700 font-medium">Quantity:</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <FaMinus className="text-gray-600" />
                  </button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 rounded-full hover:bg-gray-100"
                    disabled={selectedSize && quantity >= product.stock[selectedSize]}
                  >
                    <FaPlus className="text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize}
                  className={`
                    w-full py-3 px-6 rounded-full font-medium
                    ${selectedSize
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }
                  `}
                >                  {addedToCart ? (
                    <span className="flex items-center justify-center gap-2">
                      <FaCheck /> Added to Cart
                    </span>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
                {!selectedSize && (
                  <p className="text-red-500 text-sm text-center">
                    Please select a size
                  </p>
                )}
              </div>

              {/* Additional Product Info */}
              <div className="border-t pt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-600">Brand:</span>
                    <p className="font-medium">{product.brand}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Material:</span>
                    <p className="font-medium">{product.material}</p>
                  </div>
                  <div>
                    <span className="text-gray-600">Color:</span>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded-full border"
                        style={{ backgroundColor: product.colors.hex }}
                      />
                      <span>{product.colors.name}</span>
                    </div>
                  </div>
                  {product.bestSeller && (
                    <div className="col-span-2">
                      <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                        Bestseller
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (<Link
              key={relatedProduct.id}
              to={`/product/${relatedProduct.id}`}
              className="group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-gray-800 font-medium line-clamp-1">{relatedProduct.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-900 font-bold">₹{relatedProduct.finalPrice}</span>
                    {relatedProduct.discount > 0 && (
                      <span className="text-green-600 text-sm">{relatedProduct.discount}% OFF</span>
                    )}
                  </div>
                </div>
              </motion.div>
            </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Product;