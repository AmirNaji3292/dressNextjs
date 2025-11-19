"use client"

import {  ProductType } from "@/types"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

function ProductCart({product}:{product:ProductType}) {

   const [producttype,setProducttype]=useState({
    size:product.sizes[0],
    color:product.colors[0],
   })


   const handleProductType=({type,value}:{type:"size"|"color",value:string})=>{
      setProducttype((prev)=>({
        ...prev,
        [type]:value,
      }))
   }




  return (
    <div className="shadow-xl rounded-xl overflow-hidden">
        <Link href={`/products/${product.id}`}>
           <div className="relative aspect-2/3">
              <Image 
              className="object-cover hover:scale-105 transition-all duration-300"
              src={product.images[producttype.color]} fill alt={product.name} />
           </div>
        </Link>


        <div className="flex flex-col items-center py-2">
            <h1 className="font-medium">{product.name}</h1>
            <p className="text-sm text-gray-500 px-4 py-2" >{product.shortDescription}</p>
          </div>

            <div className="flex gap-3 justify-around items-center mb-2">
               <div>
                   <p className=" text-gray-500 text-[13px]">Size</p>
                  <select 
                   value={producttype.size}
                   onChange={(e)=>handleProductType({type:"size",value:e.target.value})}
                  name="size" className="ring ring-gray-300 px-2 roundex-2xl">
                    {product.sizes.map((s)=>(
                        <option value={s} key={s}>{s.toUpperCase()}</option>
                    ))}
                </select>
                    </div>
                 

                 <div className="flex flex-col">
                    <span className="text-sm text-gray-500 mb-1">Color</span>
                     <div 
                    
                     className="flex justify-center">
                        {product.colors.map((c)=>(
                            <div 
                            
                            key={c}
                             onClick={()=>handleProductType({type:"color",value:c})}
                               className={`flex mx-1 justify-center items-center border-1 rounded-full p-[1.2px] cursor-pointer ${producttype.color === c ?'border-gray-500':'border-white-200'}`}>
                                <div className="w-[14px] h-[14px] rounded-full bg-amber-700 gap-5 cursor-pointer" style={{backgroundColor:c}}/>
                                
                            </div>
                        ))}
                     
               </div>

               </div>
                    
              

              
            </div>

            <div className="flex justify-around mt-4 mb-3 items-center ">
                 <p>${product.price.toFixed(2)}</p>
                  <div className="flex justify-center">
                     
                   <button  className="ring-1 flex justify-center gap-2 items-center shadow-lg text-sm ring-gray-300 rounded-md px-3 py-1 hover:bg-black hover:text-white transition-all duration-300"> <ShoppingCart/>Add to Cart</button>
                 </div>
              </div>
        
    </div>
  )
}

export default ProductCart