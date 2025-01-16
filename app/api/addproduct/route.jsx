import prisma from "@/app/prismadb"
import { NextResponse } from "next/server"

export async function POST(request){
    const body = await request.json()
    const {
        title,
        description,
        category, 
        images,

    
    } = body

    try{
        const product = await prisma.product.create({
            data:{
                title,
                description,
                category,
         
                images,
               
            
            }
        })
        return NextResponse.json(product)
    }
    catch(error){
        console.log('Error creating the project', error)
        return NextResponse.error()
    }
}

export async function DELETE(req){
    const body = await req.json()
    const {productId} = body

    try{
        const deletedProduct=await prisma.product.delete({
            where:{
                id:productId,
          
            }
        })
        return NextResponse.json(deletedProduct)
    }catch(error){
        console.error("Error deleting project", error)
        return NextResponse.error()
    }
}