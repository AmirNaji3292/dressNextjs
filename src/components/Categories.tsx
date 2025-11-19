"use client"


import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";






const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];


function Categories() {
    
    const searchParams=useSearchParams()
    
    const router=useRouter()
    const pathName=usePathname()



    const selectCategory=searchParams.get('category')

    const handleClick=(value:string|null)=>{
        const params=new URLSearchParams(searchParams)
        params.set('category',value || 'all')
          router.push(`${pathName}?${params.toString()}`, {scroll:false})

          
    }

  return (
    <div className="grid grid-cols-2 mb-3 bg-gray-200 rounded-2xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-2 ">
        {categories.map((categorie)=>(
            <div key={categorie.name} onClick={()=>handleClick(categorie.slug)}
            className={`flex items-center justify-center gap-2 rounded-md py-1 px-2 cursor-pointer ${categorie.slug === selectCategory?'bg-white border-b-1':'text-gray-500'}`}>
                {categorie.icon}
                {categorie.slug}
                 
            </div>
        ))}
    </div>
  )
}

export default Categories