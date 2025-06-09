import React, { useState } from 'react'
import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { FaSearch, FaShoppingBag, FaTimes } from 'react-icons/fa'
import { HiBars3BottomLeft, HiChevronDown, HiChevronRight, HiOutlineUser, HiOutlineXMark, HiShoppingBag } from "react-icons/hi2";
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo.png'
import useSidebar from '../store/useSidebar'
import useSearch from '../store/useSearch';
import useCart from '../store/useCart';
import { useAuth } from '../store/useAuth';
import ProfileMenu from './profileMenu';

function Header() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { toggle, isOpen } = useSidebar();
    const { query, setQuery, handleSearch, clearSearch } = useSearch();
    const { getTotalItems } = useCart();
    const { isLogin, user, logout } = useAuth();
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const handleSearchSubmit = (e) => {
        handleSearch(e, navigate);
    };
    const totalItems = getTotalItems();

    const handleSearchClear = () => {
        clearSearch();
        if (searchParams.get('search')) {
            navigate("/collections");
        }
    };

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };
    

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white shadow-md'>

            {/* Top Bar */}
            <motion.div
                className='flex justify-between items-center px-4 py-2 w-full'
                initial="hidden"
                animate="visible"
                variants={navVariants}
            >
                {/* Sidebar Toggle (Mobile) */}
                <div className='md:hidden'>
                    <motion.button
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{ scale: 1, rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ rotate: -90, scale: 0.9 }}
                        onClick={toggle}
                    >
                        {!isOpen
                            ? <HiBars3BottomLeft className='text-2xl' />
                            : <HiOutlineXMark className='text-2xl' />
                        }
                    </motion.button>
                </div>

                {/* Logo & Brand */}
                <div className='flex items-center space-x-2'>
                    <motion.img
                        src={logo}
                        alt="Logo"
                        className='h-12'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                    <Link to="/" className='text-2xl font-serif font-bold'>MyShop</Link>
                </div>

                {/* Search (Desktop only) */}
                <form onSubmit={handleSearchSubmit} className='hidden relative md:flex items-center space-x-2 flex-1 justify-end px-5'>
                    <div className="relative flex-1 max-w-md">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className='w-full bg-gray-700 text-gray-200 border border-gray-600 rounded-full px-4 py-2 text-sm outline-none focus:border-blue-500 transition-colors duration-200'
                        />
                        {query && (
                            <motion.button
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                type="button"
                                className='absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300'
                                onClick={handleSearchClear}
                            >
                                <HiOutlineXMark size={18} />
                            </motion.button>
                        )}
                        <button
                            type="submit"
                            className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200'
                        >
                            <FaSearch />
                        </button>
                    </div>
                </form>

                {/* Account Section */}
                <div className='hidden md:flex items-center space-x-4 w-fit'>
                    {isLogin ? <>
                        <div className='relative flex items-center space-x-2 '>
                            <Link to={'/profile'} className='flex items-center space-x-2'>
                            <div className=' bg-gray-300 h-10 w-10 rounded-full flex items-center justify-center'>
                                {
                                    user?.photoURL ? (
                                        <img src={user.photoURL} alt={user.name} className='h-full w-full rounded-full object-cover' />
                                    ) : (
                                        <HiOutlineUser className='text-gray-400' size={25}/>
                                    )
                                }
                            </div>
                            <p className='text-sm'>{user?.name}</p>
                                </Link>
                            <button onClick={() => setShowProfileMenu(!showProfileMenu)} className=' px-1 cursor-pointer'>
                                <HiChevronDown className=''/> 
                            </button>
                            {showProfileMenu &&

                                <ProfileMenu user={user} setShowProfileMenu={setShowProfileMenu} />
                            }
                        </div>
                    
                    </> :
                        <>
                            <p className='text-sm'>My Account</p>
                            <div className='flex space-x-2 bg-gray-700 px-4 py-2 rounded-full '>
                                <Link to="/auth/login" className='hover:text-gray-300'>Login</Link>
                                <span>/</span>
                                <Link to="/auth/register" className='hover:text-gray-300'>Register</Link>
                            </div>
                        </>
                    }
                </div>

                {/* Cart Icon (Mobile Only) */}
                <div className='relative md:hidden'>
                    <Link to="/cart" className='relative'>
                        <HiShoppingBag className='text-2xl text-yellow-500 hover:scale-110 duration-300 transition-transform' />

                        {totalItems > 0 &&

                            <span className='absolute -bottom-2 -right-1 bg-red-500 rounded-full text-xs w-5 h-5 flex items-center justify-center'>{totalItems}</span>
                        }
                    </Link>
                </div>
            </motion.div>
            <div className='md:hidden flex bg-gray-700 text-white py-2'>
                <form onSubmit={handleSearchSubmit} action="" className='flex items-center space-x-2 flex-1 justify-end px-5'>
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className='w-full bg-gray-600 text-gray-200 border-2 border-gray-600 rounded-full px-4 py-2 text-sm outline-none focus:border-blue-500 transition-colors duration-200'
                        />
                        {query && (
                            <motion.button
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                type="button"
                                className='absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300'
                                onClick={handleSearchClear}
                            >
                                <HiOutlineXMark size={18} />
                            </motion.button>
                        )}
                        <button
                            type="submit"
                            className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200'
                        >
                            <FaSearch />
                        </button>
                    </div>
                </form>
            </div>

            {/* Bottom Navigation */}
            <motion.div
                className='hidden md:flex bg-gray-700 text-white py-2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <nav className='w-full md:w-5xl mx-auto px-4 flex justify-between items-center'>
                    <ul className='flex space-x-6'>
                        {['/', '/collections', '/about', '/contact'].map((path, index) => (
                            <li key={index}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-white border-b-2 border-white pb-1'
                                            : 'text-gray-300 hover:text-white'
                                    }
                                >
                                    {path === '/'
                                        ? 'Home'
                                        : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className='flex space-x-4 items-center'>
                        <Link to="/cart" className='relative cursor-pointer flex items-center text-yellow-500'>
                            <HiShoppingBag className='text-2xl   hover:scale-110 transition-transform duration-300' />
                            {totalItems > 0 && (
                                <p className='absolute -bottom-2 right-6 bg-red-500 rounded-full text-xs w-5 h-5 flex items-center justify-center'>
                                    {totalItems}
                                </p>
                            )}
                            Cart
                        </Link>
                    </div>
                </nav>
            </motion.div>

        </header>
    )
}

export default Header;
