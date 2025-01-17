"use client"

import { useReducer, useEffect } from "react";
import { inventoryReducer, initialState } from "./inventoryReducer.js";
import { FETCH_ACTIONS } from "./index1.js"
import Link from 'next/link'
import axios from "axios";
import DeleteProduct from './DeleteProduct.jsx';

const InventoryList = () => {

  const [state, dispatch] = useReducer(inventoryReducer, initialState);

  const { items, loading, error} = state;
,
  console.log(items, loading, error);

  useEffect(() => {
    dispatch({type: FETCH_ACTIONS.PROGRESS});

    const getItems = async () => {
      try{
        let response = await axios.get("api/products");
        if (response.status === 200) {
          dispatch({type: FETCH_ACTIONS.SUCCESS, data: response.data});
        }
      } catch(err){
        console.error(err);
        dispatch({type: FETCH_ACTIONS.ERROR, error: err.message})
      }
    }

    getItems();

  }, []);


  return (
    <div >
      {
        loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="grid  sm:grid-cols-1 md:grid-cols-3  p-10 justify-center  items-center gap-5 lg:grid-cols-4 tl:grid-cols-1  ">
       
            
    
            
            
            {
              items.map((item) => (
                <>
    
                <div className="" key={item.id}>
                  <div>

             
                <img src={item.images.split(',')[0]} alt="" className=' rounded-l-sm' />
                        <div className="p h-full w-full  text-center bg-[#b004b0b7] p-4 pt-5">
                          <h1 className="font-bold text-3xl"><Link href={`/projects/${item.id}`}>{item.title}</Link></h1>
                         
          
           <Link className="border-2 block hover:bg-blue-500 hover:text-black border-blue-500  px-4 py-2 text-black cursor-pointer" href={`/projects/${item.id}`}>  View Project  </Link>
          
          
                        </div>
                        <Link className='border-2 block hover:bg-indigo-500 hover:text-black border-green-500  px-4 py-2 text-black cursor-pointer' href={`/edit/${item.id}`}>
                                <span className=''>
                                    edit
                                </span>
                            </Link> <DeleteProduct productId={item.id} />
                      </div>     </div>
                
              </>
              ))
            }
            
          </div>
        )
      }

    </div>
  )
}

export default InventoryList