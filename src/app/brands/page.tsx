import { getUserToken } from '@/lib/authToken';
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Tag } from 'lucide-react';
import { getAllBrands } from '@/services/brandServices';
import {Brand, BrandsResponse } from '@/types/brand';
import BrandBox from '../Components/Commens/BrandBox';
import Info from '../Components/Commens/Info';
export default  async  function Brands() {

  const token = await getUserToken();


  const response :BrandsResponse = await getAllBrands();
  const brands : Brand[]=response.data;


  return (
    <>
        <div className="bg-linear-to-br from-violet-600 via-violet-500 to-purple-400 text-white">
          <div className="container mx-auto px-4 py-10 sm:py-14">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className='text-gray-300 hover:text-white transition-all duration-200' >Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className='text-white hover:text-white' >Brands</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className='flex items-center gap-3 my-5'>
              <div className='w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30'>
                <Tag size={40} />    
              </div>
              <div>
                <h1 className='text-3xl sm:text-4xl font-bold tracking-tight '>Top Brands</h1>
                <p className='text-white/80 mt-1'>Shop from your favorite brands</p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="container mx-auto px-4 py-10 sm:py-14">
            <div className=" px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-5">
              {brands.map((brand)=><React.Fragment key={brand._id}>
                <BrandBox brand={brand}/>
              </React.Fragment>)}
            </div>
            <Info/>
          </div>
    </>
  )
}
