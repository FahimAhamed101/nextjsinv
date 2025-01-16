import prisma from "../../prismadb"

import { NextResponse } from "next/server"

export async function GET(request){

    try{
         
        const products = await prisma.product.findMany();
      
    return NextResponse.json(products );
     
    }catch{
        return NextResponse.error()
    }


}
