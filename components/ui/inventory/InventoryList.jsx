"use client"

import { useReducer, useEffect } from "react";
import { inventoryReducer, initialState } from "./inventoryReducer.js";
import { FETCH_ACTIONS } from "./index1.js"
import Link from 'next/link'
import axios from "axios";

const InventoryList = () => {

  const [state, dispatch] = useReducer(inventoryReducer, initialState);

  const { items, loading, error} = state;

  console.log(items, loading, error);

  useEffect(() => {
    dispatch({type: FETCH_ACTIONS.PROGRESS});

    const getItems = async () => {
      try{
        let response = await axios.get("http://localhost:3000/api/products");
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
          <div className="grid grid-cols-3 p-10 justify-center items-center gap-5 lg:grid-cols-3 tl:grid-cols-1  ">
       
            
            
            
            
            {
              items.map((item) => (
                <>
    
                <div className="">
                <img src={item.images.split(',')[0]} alt="" className='object-scale-down max-h-fit max-width: 20%;' />
                        <div className="p h-full w-full  text-center bg-[#b004b0b7] p-4 pt-5">
                          <h1 className="font-bold text-3xl"><Link href={`/projects/${item.id}`}>{item.title}</Link></h1>
                         
          
           <Link className="font-bold text-black" href={`/projects/${item.id}`}>  View Project  </Link>
          
          
                        </div>
                 
                      </div>
                
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