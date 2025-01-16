'use server'

import React from 'react'
import prisma from "@/app/prismadb"

import ImageGallery from './ImageGallery'
import Link from "next/link";


import {Github,ExternalLink , Menu } from "lucide-react";




export default async function Page({params}){
    
    const {slug}= await params
  
    const product = await prisma.product.findUnique({
        where: { id: parseInt(slug) }
    })
  
    const urlString = product?.images
    return(
        <div className='max-w-[1280px] mb-5 mr-5 mx-auto items-center grid'>
            
         
            {product && (
                <div className='grid grid-cols-2 items-center mx-auto  gap-10'>
             
                    {urlString && (
                        <ImageGallery imageUrls = {urlString} />
                    )}
            <div className='flex items-end gap-5 '> 
                       
            </div>
                </div>
            )}
           
               
                {product && (
                    <div className='grid grid-cols-1 text-center '>  
                           
                         <div>      <h3 className='font-medium'>Category</h3>
                      <p className='text-sm text-purple-500'>{product.category}</p></div>
               
                         <div className='grid grid-cols-1 items-center  m-10'>   
             
                  
              
                        <div className='flex flex-col items-center'>
                 <span className='text-sm pt-2 text-black font-medium'>Title:- {product.title}</span>
                   
                  
                 
                   <span className=' pt-5 font-medium text-xl'>{product.description}</span>
            </div>
          
                </div>
                    
               
                    </div>
                     
                )}
           
          
        </div>
    )
}