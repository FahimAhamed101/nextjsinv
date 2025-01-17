'use client'
import React from 'react'
import axios from 'axios'

import { useRouter } from 'next/navigation'



const DeleteProduct = ({productId}) => {
    const router = useRouter()

    const handleDelete = async () => {
        try{
            await axios.delete('/api/addproduct',{
                data:{
                    productId:productId,
                  
                }
            })
            router.refresh()
        }
        catch(error){
            console.log('Error in deleting product')
        }
    }
  return (
    <div onClick={handleDelete} className='border-2 hover:bg-red-500 hover:text-black border-red-500 px-4 pt-2 py-2 text-black cursor-pointer'>
        delete
    </div>
  )
}

export default DeleteProduct