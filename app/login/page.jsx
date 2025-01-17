"use client"

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import banner from "../../public/next.svg";
import logo from "../../public/next.svg";
import { useAuthStore } from "@/store/useAuthStore"
import { useRouter } from 'next/navigation';


function Loginpage() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ email: "", password: "" });

  
  const login = useAuthStore((state) => state.login);
  const router = useRouter();
  const validate = () => {
    const errors = {};
    if (!formData.email.includes("@")) errors.email = "Invalid email format.";
    if (formData.password.length < 6)
      errors.password = "Password must be at least 6 characters.";
    return errors;
  };
  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrors(errorData.message);
        return;
      }

      const { token, user } = await response.json();
      localStorage.setItem('authToken', token);
      login(user);
      router.push('/');
    } catch (err) {
      setErrors('Something went wrong');
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
            <label className="text-black " htmlFor="name">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                className="bg-[#ffede1]"
                placeholder="Enter your email"
                required
                value={formData.email}
          onChange={handleChange}
              />
                 {errors.email && <p className="text-center text-[red] text-sm">{errors.email}</p>}
            </div>
            <div className="space-y-1 pb-2">
              <label className="text-black "  htmlFor="name">Password</label>
              <Input
                id="password"
                name="password"
                type="password"
                className="bg-[#ffede1]"
                placeholder="Enter your password"
                required
             
                value={formData.password}
                onChange={handleChange}
              />
                 {errors.password && <p className="text-center text-[red] text-sm">{errors.password}</p>}
            </div>
            <button
              onClick={handleLogin}
              className="w-full bg-black text-white hover:bg-black transition-colors"
            >
              LOGIN
            </button>
         
            <p className="text-center text-[#3f3d56] text-sm">
              New here{" "}
              <Link
                href={"/register"}
                className="text-[#000] hover:underline font-bold"
              >
                Sign up
              </Link>
            </p>
    
        </div>
      </div>
    </div>
    );
  }
  
  export default Loginpage;