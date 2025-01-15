

import prisma from "../../../app/prismadb.js"
import bcrypt from "bcrypt"

import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server"
export async function POST(request){
    const body = await request.json()
   
    const { email, password } = body;

    try{

        const user = await prisma.user.findUnique({ where: { email} });

         if (!user) return res.status(401).json({ message: 'Invalid email or password' });

    const isPasswordValid = await bcrypt.compare(password, user.password )
   
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ id: user.id }, 'secret-key', { expiresIn: '1h' }); // Replace 'secret-key' with a secure key
    return NextResponse.json({ token, user: { id: user.id, name: user.name, email: user.email } });
     
    }catch{
        return NextResponse.json({message:"invalid email or password"})
    }
   
    
    
  } 
  

