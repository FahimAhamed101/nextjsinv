'use server'

import React from 'react'
import prisma from "@/app/prismadb"
import Edit from '../Edit.jsx'


const EditProduct = async ({params}) => {
    const { slug } = params; // Slug might be a string
    const id = parseInt(slug); // Convert it to an integer
  console.log(slug)
    if (isNaN(id)) {
      throw new Error("Invalid ID provided.");
    }
  

   

    try{
        const product = await prisma.product.findUnique({
            where: { id },
        })

        if(!product){
            return <div>Product id not fount</div>
        }

        return(
            <div>
                <Edit {...product}/>
            </div>
        )
    }catch(error){
        console.log("Error", error);
        return <div>Error fetching product</div>
    }
}

export default EditProduct