import  { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useProduct from '../store/useProduct';
import useSearch from '../store/useSearch';
import { Link, useSearchParams } from 'react-router-dom';
import Item from '../components/Item.jsx';
import { HiOutlineFunnel, HiOutlineXMark } from 'react-icons/hi2';
import useScroll from '../utils/useScr.js';

function Collections() {
  const products = useProduct((state) => state.products);
  const {  setSearchResults, setIsSearching } = useSearch();
  const [searchParams] = useSearchParams();
  const [filterShow, setFilterShow] = useState(false);
  const [genders, setGenders] = useState([]);
  const [category, setCategory] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [allGenders, setAllGenders] = useState([]);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    useScroll();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const searchQuery = searchParams.get('search');
    
    // Initialize categories and genders with null checks
    setAllCategory([...new Set(products.flatMap((product) => [
      ...(product.category || []), 
      ...(product.tags || [])
    ].filter(Boolean)))]);
    
    setAllGenders([...new Set(products.map((product) => product.gender).filter(Boolean))]);
    
    // Apply search filter if search query exists
    if (searchQuery) {
      const searchResults = products.filter((product) => {
        const searchTerm = searchQuery.toLowerCase();
        return (
          product.name?.toLowerCase().includes(searchTerm) ||
          product.description?.toLowerCase().includes(searchTerm) ||
          (product.category || []).some(cat => cat?.toLowerCase().includes(searchTerm)) ||
          (product.tags || []).some(tag => tag?.toLowerCase().includes(searchTerm))
        );
      });
      setFilteredProducts(searchResults);
      setSearchResults(searchResults);
    } else {
      setFilteredProducts(products);
    }
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSearching(false);
    }, 500);
  }, [products, searchParams, setSearchResults, setIsSearching]);

  const handleSetGenders = (e) => {
    const value = e.target.value;
    setGenders((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleSetCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const clearAllFilters = () => {
    setGenders([]);
    setCategory([]);
    setFilterShow(false);
    setShowAllCategories(false);
    setFilteredProducts(products);
  };

  const applyFilter = () => {
    let filtered = [...products];
    const searchQuery = searchParams.get('search');

    // Apply search filter first if exists
    if (searchQuery) {
      const searchTerm = searchQuery.toLowerCase();
      filtered = filtered.filter((product) => {
        return (
          product.name?.toLowerCase().includes(searchTerm) ||
          product.description?.toLowerCase().includes(searchTerm) ||
          (product.category || []).some(cat => cat?.toLowerCase().includes(searchTerm)) ||
          (product.tags || []).some(tag => tag?.toLowerCase().includes(searchTerm))
        );
      });
    }

    // Apply gender filter with null check
    if (genders.length > 0) {
      filtered = filtered.filter((product) =>
        product.gender && genders.some((element) => 
          product.gender.toLowerCase() === element.toLowerCase()
        )
      );
    }

    // Apply category filter with null checks
    if (category.length > 0) {
      filtered = filtered.filter((product) =>
        category.some((cat) => 
          (product.category || []).includes(cat) || 
          (product.tags || []).includes(cat)
        )
      );
    }

    setFilteredProducts(filtered);
  };

  useEffect(() => {
    applyFilter();
  }, [genders, category, searchParams]);

  return (
    <motion.div
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header with search results info */}
      <div className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              {searchParams.get('search') 
                ? `Search Results for "${searchParams.get('search')}"`
                : 'Collections'}
            </h1>
            <button
              onClick={() => setFilterShow(!filterShow)}
              className="md:hidden flex items-center gap-2 text-gray-600"
            >
              {filterShow ? <HiOutlineXMark size={20} /> : <HiOutlineFunnel size={20} />}
            </button>
          </div>
          {searchParams.get('search') && (
            <p className="text-gray-600">
              Found {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8 ">
          {/* Filter Sidebar */}
          <AnimatePresence>
            <motion.div
              className={`md:w-64 bg-gray-100 h-fit rounded-lg shadow-sm p-4 ${filterShow ? 'absolute inset-0 top-[170px] z-50 md:relative' : 'hidden md:block'
                }`}
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center  text-xl uppercase font-semibold text-gray-600 py-2" onClick={() => setFilterShow(!filterShow)}>
                <p>Filters</p>

              </div>

              <div className={`space-y-4 ${filterShow ? "block" : "hidden"} md:block z-10 bg-gray-100 left-0 right-0 p-2 md:p-0`}>

                {/* Gender Filter */}
                <div className="border border-gray-400  p-4 bg-white">
                  <label className="uppercase text-sm font-semibold">Gender</label>
                  <div className="mt-2 space-y-2 px-2">
                    {allGenders.map((item) => (
                      <div key={item} className="flex items-center gap-2 capitalize">
                        <input
                          type="checkbox"
                          id={item}
                          value={item}
                          className="accent-blue-600"
                          onChange={handleSetGenders}
                          checked={genders.includes(item)}  // ✅ controlled
                        />
                        <label htmlFor={item} className="text-gray-700">{item}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div className="border border-gray-400 p-4 bg-white">
                  <label className="uppercase text-sm font-semibold">Category</label>

                  <div className="mt-2 space-y-2 px-2">
                    {(showAllCategories ? allCategory : allCategory.slice(0, 5)).map((item) => (
                      <div key={item} className="flex items-center gap-2 capitalize">
                        <input
                          type="checkbox"
                          id={item}
                          value={item}
                          className="accent-blue-600"
                          onChange={handleSetCategory}
                          checked={category.includes(item)}  // ✅ controlled
                        />

                        <label htmlFor={item} className="text-gray-700">{item}</label>
                      </div>
                    ))}
                  </div>

                  {allCategory.length > 5 && (
                    <button
                      onClick={() => setShowAllCategories((prev) => !prev)}
                      className="mt-2 text-sm text-blue-600 hover:underline"
                    >
                      {showAllCategories ? "Show Less" : "Show More"}
                    </button>
                  )}
                </div>
                <div className='flex  items-center justify-between mt-4'>

                  <button className='border border-gray-400 py-1 px-2 bg-white capitalize rounded-2xl' onClick={clearAllFilters}>clear filters</button>

                  <button className='border md:hidden border-gray-400 py-1 px-2 bg-white capitalize rounded-2xl' onClick={() => setFilterShow(false)}>Apply Filter</button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
                  
          {/* Product Grid */}
          <motion.div
            className="flex-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {isLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gray-200 h-64 rounded-lg mb-2"></div>
                    <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={itemVariants}
                  >
                    <Link to={`/product/${product.id}`}>
                      <Item product={product} />
                    </Link>
                  </motion.div>
                ))}
                  {
                    filteredProducts.length == 0 &&
                    <div className="col-span-4 text-center  text-gray-500">No products found</div>
                  }
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Collections;
