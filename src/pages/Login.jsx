import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        const res = await fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password })
        });
        if (!res.ok) {
          alert("Login failed");
          return;
        }

        const data = await res.json();
        localStorage.setItem("token", data.token);
        navigate("/");
      };

    return (
        <div className='h-full w-full flex flex-col justify-center items-center space-y-5 py-10'>
            <h1 className="text-4xl font-extrabold">
                Welcome back!
            </h1>
            <input type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}
                className='w-100 px-3 py-3 border border-gray-300 rounded-lg
                shadow-sm hover:shadow-md focus:shadow-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-400 
                transition-all duration-200'>
            </input>
            <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}
                className='w-100 px-3 py-3 border border-gray-300 rounded-lg
                shadow-sm hover:shadow-md focus:shadow-lg 
                focus:outline-none focus:ring-2 focus:ring-blue-400 
                transition-all duration-200'>
            </input>
            <button onClick={handleLogin}
                className='w-100 h-10 rounded-lg text-white bg-primary'>
                Login
            </button>
            <button onClick={() => navigate("/register")}
                className='text-xs text-blue-400 hover:scale-101 active:scale-99  transition-all'
            >
                Don't have an account yet? Click here to register
            </button>
        </div>
    );
}