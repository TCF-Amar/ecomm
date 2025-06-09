import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import { useAuth } from '../store/useAuth';

function Auth() {
  const navigate = useNavigate();
  const { auth } = useParams();
  const { isLogin } = useAuth();
  useEffect(() => {
    if (isLogin == true) {
      navigate("/")
    }
  },[])
  
  return (
    <div className=''>

    <div className='fixed z-[1001] inset-0  flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500'>
      {auth === 'login' ? <Login /> : <Register />}
    </div>
    </div>
  );
}

export default Auth
