import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import useSidebar from '../store/useSidebar';
import { useAuth } from '../store/useAuth';

const navItems = [
  { item: 'Home', link: '/' },
  { item: 'Collections', link: '/collections' },
  { item: 'About', link: '/about' },
  { item: 'Contact', link: '/contact' },
  { item: 'Cart', link: '/cart' },
  { item: 'Wishlist', link: '/wishlist' },
  { item: 'Orders', link: '/orders' }
];

const sidebarVariants = {
  hidden: { x: '-100%' },
  visible: {
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.4,
      when: 'beforeChildren',
      staggerChildren: 0.05
    }
  },
  exit: {
    x: '-100%',
    transition: {
      type: 'tween',
      duration: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

function Sidebar() {
  const { isOpen, toggle } = useSidebar();
  const { isLogin,user,logout } = useAuth();

  const logoutHandle = () => {
    logout();
    toggle(); 
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          className='fixed top-16 left-0 right-0 bottom-0 z-50 w-full bg-gray-900 bg-opacity-95 px-6 py-8 text-white md:hidden flex flex-col justify-between'
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Navigation Links */}
          <motion.ul className='space-y-3'>
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
              >
                <NavLink
                  to={item.link}
                  onClick={toggle}
                  className={({ isActive }) =>
                    `block w-full px-4 py-2 rounded-md font-medium transition-all duration-300 
                 ${isActive
                      ? 'bg-gray-800 text-white shadow border-l-4 border-blue-400'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`
                  }
                >
                  {item.item}
                </NavLink>
              </motion.li>

            ))}
          </motion.ul>

          {/* Login / Register */}
          <motion.div
            className='pt-6 border-t border-gray-700'
            variants={itemVariants}
          >
            <h2 className='text-lg font-semibold mb-2'>Account</h2>
            {
              isLogin ?
                <div>
                  <div className='flex items-start  flex-col'>
                    <div className='py-2'>

                      <Link to='/profile' className='hover:text-blue-500' onClick={toggle}>
                      
                        <div className='flex items-center space-x-3'>
                          <img src={user?.photoURL} alt={user?.name} className='h-10 w-10 rounded-full object-cover' />
                          <div>

                          <p>{user?.name}</p>
                          <p className='text-sm text-gray-400'>{user?.email}</p>
                          </div>
                        </div>
                      </Link>
                    </div>


                  <hr className='border-gray-700 w-full' />
                    <button className='text-red-500 hover:text-red-400 py-2' onClick={logoutHandle}>Logout</button>

                  </div>
                </div>
                : (
                  <div className='flex items-center space-x-3'>
                    <Link to='/login' className='hover:text-blue-500' onClick={toggle}>Login</Link>
                    <span>/</span>
                    <Link to='/register' className='hover:text-blue-500' onClick={toggle}>Register</Link>
                  </div>
                )
            }

          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
