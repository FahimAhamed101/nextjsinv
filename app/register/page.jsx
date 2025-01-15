"use client"

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import banner from "../../public/next.svg";
import logo from "../../public/next.svg";
import { useRouter } from 'next/navigation';
import { useAuthStore } from "@/store/useAuthStore"

function Registerpage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
        return;
      }

      // Navigate to the login page upon successful registration
      router.push('/login');
    } catch (err) {
      setError('Something went wrong');
    }
  };
    return (
      <div className="min-h-screen bg-[#fff6f4] flex">
        <div className="hidden lg:block w-1/2 bg-[#ffede1] relative overflow-hidden">
          <Image
            src={banner}
            alt="Register"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col p-8 lg:p-16 justify-center">
          <div className="max-w-md w-full mx-auto">
            <div className="flex justify-center">
              <Image src={logo} width={200} height={50} alt="Logo" />
            </div>
      
              <div className="space-y-1">
                <label className="text-black font-medium leading-none peer-disabled:cursor-not-allowed " htmlFor="name">Full Name</label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="bg-[#ffede1]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="text-black " htmlFor="name">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className="bg-[#ffede1]"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="text-black " htmlFor="name">Password</label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  className="bg-[#ffede1]"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
               onClick={handleRegister}
            
                className="w-full inline-flex items-center justify-center bg-black text-white text-center hover:bg-black transition-colors "
              >
               
                    CREATE ACCOUNT
                    <ArrowRight className="w-4 h-4 ml-2 " />
                
              </button>
              <p className="text-center text-[#3f3d56] text-sm">
                Already have an account{" "}
                <Link
                  href={"/login"}
                  className="text-[#000] hover:underline font-bold"
                >
                  Sign In
                </Link>
              </p>
      
          </div>
        </div>
      </div>
    );
  }
  
  export default Registerpage;