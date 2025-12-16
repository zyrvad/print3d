import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx"
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col overflow-hidden">
        <Navbar />

        {/* This is the scrollable area */}
        <div className="flex-1 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/register" element={<Register/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;