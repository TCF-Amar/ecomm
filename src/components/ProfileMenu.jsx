import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../store/useAuth'
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { HiCreditCard, HiPower, HiUser } from 'react-icons/hi2';

function ProfileMenu({ user, setShowProfileMenu }) {
    const { logout } = useAuth();
    return (
        <div className='absolute top-12 right-0  bg-white text-gray-700 z-50   border border-gray-200 rounded-md shadow-lg'>

            <button className='w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md' onClick={() => setShowProfileMenu(false)}>
                <Link to={'/profile'} className='flex items-center gap-2 text-gray-700 hover:text-gray-900'>
                    <HiUser/>
                    <span>Profile</span>
                </Link>
            </button>
            <button className='w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md' onClick={() => setShowProfileMenu(false)}>
                <Link to={'/orders'} className='flex items-center gap-2 text-gray-700 hover:text-gray-900'>
                    <HiCreditCard />
                    <span>Orders</span>
                </Link>
            </button>
            <button className='w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md' onClick={() => setShowProfileMenu(false)}>
                <Link to={'/wishlist'} className='flex items-center gap-2 text-gray-700 hover:text-gray-900'>
                    <HiOutlineBadgeCheck />
                    <span>Wishlist</span>    
                </Link>
            </button>

            <button className='w-full text-left px-4 py-2 text-red-600 hover:text-red-400 rounded-md flex items-center gap-2 hover:bg-gray-100' onClick={logout}>
                <HiPower />
                <span>Logout</span>
            </button>

        </div>
    )
}

export default ProfileMenu