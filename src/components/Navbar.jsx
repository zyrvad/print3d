import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar(){
  const navigate = useNavigate();

    return(
        <nav className="w-full h-16 bg-gray-900 shadow flex items-center px-6">
          {/* Logo */}
          <div className="w-30 text-white font-bold text-xl">
            print3d
          </div>

          {/* Center links */}
          <div className="text-white flex-1 flex justify-center space-x-8">
            <button onClick={() => navigate("/")}
              className='hover:scale-105 active:scale-95  transition-all'>
              Home
            </button>
            <button onClick={() => navigate("/shop")}
              className='hover:scale-105 active:scale-95  transition-all'>
              Shop
            </button>
          </div>

          {/* Right */}
          <div className="w-30 flex gap-4">
            <button onClick={() => navigate("/login")}
              className="text-white text-sm hover:scale-105 active:scale-95  transition-all" >
              Log in
            </button>
            <button onClick={() => navigate("/register")}
              className="text-white text-sm hover:scale-105 active:scale-95  transition-all">
              Sign up
            </button>
          </div>

        </nav>
    );
}