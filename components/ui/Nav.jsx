import React, { useState } from 'react'
import Link from 'next/link';
import {Menu,Apple  } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore"
const Nav = () => {
    let Links =[
      {name:"HOME",link:"/"},
    
    ];
    let [open,setOpen]=useState(false);

    const { user, isAuthenticated, logout } = useAuthStore();
    const handleLogout = () => {
      localStorage.removeItem('authToken');
      logout();
  
      router.push('/pages');
    };

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600  p-2'>
        <Apple />
        </span>
        Inventory
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <div name={open ? 'close':'menu'}><Menu /></div>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
     {isAuthenticated ? (
          <>
            <span>Welcome, {user?.name}</span>
            <button onClick={handleLogout} style={{ marginLeft: '1rem' }}>Logout</button>
          </>
        ) : (
          <>
          <li  className='md:ml-8 text-xl md:my-0 my-7'>
            <Link className='text-gray-800 hover:text-gray-400 duration-500' href="/addproduct">Add Products</Link>
         
            </li>
            <li  className='md:ml-8 text-xl md:my-0 my-7'>
            <Link className='text-gray-800 hover:text-gray-400 duration-500' href="/login">Login</Link>
         
            </li>
            <li  className='md:ml-8 text-xl md:my-0 my-7'>
           <Link className='text-gray-800 hover:text-gray-400 duration-500' href="/register">Register</Link>
           </li>
          </>
        )}
      </ul>
      </div>
    </div>
  )
}

export default Nav