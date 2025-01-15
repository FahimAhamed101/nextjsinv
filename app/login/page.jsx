"use client"

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import banner from "../../public/next.svg";
import logo from "../../public/next.svg";

function Loginpage() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
    });

  
    const handleOnChange = () => {
      
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
    
      
      
  
    
  
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
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
            <label className="text-black " htmlFor="name">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                className="bg-[#ffede1]"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleOnChange}
              />
            </div>
            <div className="space-y-1">
              <label className="text-black "  htmlFor="name">Password</label>
              <Input
                id="password"
                name="password"
                type="password"
                className="bg-[#ffede1]"
                placeholder="Enter your password"
                required
                value={formData.password}
                onChange={handleOnChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white hover:bg-black transition-colors"
            >
              LOGIN
            </button>
            <p className="text-center text-[#3f3d56] text-sm">
              New here{" "}
              <Link
                href={"/auth/register"}
                className="text-[#000] hover:underline font-bold"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    );
  }
  
  export default Loginpage;