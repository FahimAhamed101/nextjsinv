import prisma from "../../../app/prismadb"

import { NextResponse } from "next/server"

export async function GET(request){
    
    const body = await request.json()
   
  

    try{
         
        const users = await prisma.user.findMany();
      
    return NextResponse.json( users);
     
    }catch{
        return NextResponse.error()
    }
   
    
    
  } 
  

