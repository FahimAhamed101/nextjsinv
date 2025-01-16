"use client"

import Image from "next/image";
import prisma from "@/app/prismadb"


import InventoryList from "../components/ui/inventory/InventoryList.jsx";
import Nav from "../components/ui/Nav.jsx";
export default function Home() {


 

   /*  
     const allmyuser = await prisma.user.findMany()
   if(allmyuser.length === 0) {
        return(
            <div className='relative flex items-center justify-center'>
                <img src="empty.png" alt="" />
                <h1 className='absolute top-[80%] text-2xl text-purple-600'>Empty Projects</h1>
            </div>
        )
    } */

  return (
<div>

      
<Nav/>
    <div className="text-center">
    <h2 className="text-3xl mt-4">Item List</h2>
    
    <InventoryList/>
      
      
      { /*  {allmyuser.map((user) => (
                <div key={user.id} className='relative flex items-center justify-between w-8/12 px-6 mx-auto shadow-lg shadow-purple-100 p-5 rounded-lg mt-10'>
                    <div>
                        <h1 className='mb-3'>Name : {user.name}</h1>
                   <a className='mb-3' href={user.id}> Link: </a>
                        <h1 className='mb-3'> email: {user.email}</h1>
                    
                     
                    </div>
                  
               
                </div>
            ))} */}
    </div>
    
    </div>
  );
}
