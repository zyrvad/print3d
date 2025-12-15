import React from 'react'
import CartIcon from "../assets/cart.svg"

export default function Navbar(){
    return(
        <nav className="w-full h-16 bg-gray-900 shadow flex items-center px-6">
          {/* Logo */}
          <div className="text-white font-bold text-xl">
            Printed
          </div>

          {/* Center links */}
          <div className="text-white flex-1 flex justify-center space-x-8">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Custom Orders</a>
          </div>

          {/* Right */}
          <div>
            <img src={CartIcon} alt="Cart" className="w-6 h-6" />
          </div>

        </nav>
    );
}