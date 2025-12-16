import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate();

    return (
        <div className='h-full w-full flex flex-col justify-center items-center space-y-5 py-10'>
            <h1 className="text-4xl font-extrabold">
                Login
            </h1>
            <input type='text' placeholder='Email'
                className='w-100 px-3 py-3 border border-gray-300 rounded-lg
                shadow-sm hover:shadow-md focus:shadow-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-400 
                transition-all duration-200'>
            </input>
            <input type='text' placeholder='Password'
                className='w-100 px-3 py-3 border border-gray-300 rounded-lg
                shadow-sm hover:shadow-md focus:shadow-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-400 
                transition-all duration-200'>
            </input>
            <button onClick={() => navigate("/register")}
                className='text-xs text-blue-400 hover:scale-101 active:scale-99  transition-all'
            >
                Don't have an account yet? Click here to register
            </button>
        </div>
    );
}