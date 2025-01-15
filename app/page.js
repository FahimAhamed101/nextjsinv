import Image from "next/image";
import prisma from "@/app/prismadb"



export default async function Home() {

  const allmyuser = await prisma.user.findMany()
    if(allmyuser.length === 0) {
        return(
            <div className='relative flex items-center justify-center'>
                <img src="empty.png" alt="" />
                <h1 className='absolute top-[80%] text-2xl text-purple-600'>Empty Projects</h1>
            </div>
        )
    }

  return (
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {allmyuser.map((user) => (
                <div key={user.id} className='relative flex items-center justify-between w-8/12 px-6 mx-auto shadow-lg shadow-purple-100 p-5 rounded-lg mt-10'>
                    <div>
                        <h1 className='mb-3'>Name : {user.name}</h1>
                        <a className='mb-3' href={user.id}> Link: </a>
                        <h1 className='mb-3'> email: {user.email}</h1>
                    
                     
                    </div>
                  
               
                </div>
            ))}
    </div>
  );
}
