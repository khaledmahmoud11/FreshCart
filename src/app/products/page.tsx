import { Product } from '@/types/productInterface';
import React from 'react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Image from 'next/image';
import {  FolderOpen, Funnel,  PackageOpen, Tag, X } from 'lucide-react';
import Link from 'next/link';
import Info from '../Components/Commens/Info';
import { getAllProducts } from '@/services/products';
import { getCategory } from '@/services/categoriesServices';
import { Category } from '@/types/category';
import { spesicficBrand } from '@/types/brand';
import { getBrand } from '@/services/brandServices';
import ProductItem from '../Components/Commens/ProductItem';
import { getSpecificSubCategory } from '@/services/subCategories';
import { SubCategoryResponse } from '@/types/subCategories';
import { getUserData } from '@/actions/userInfo';




export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ category?: string ; brand?:string ;subcategory?:string }>;
}) {
  const params = await searchParams;
  const categoryId = params.category;
  const brandId = params.brand;
  const subcategoryId = params.subcategory 

  const response = await getAllProducts(categoryId, brandId,subcategoryId);
  const products :Product[] = response.data

  let categoryName: string | undefined;
  let category: Category | undefined;
  if(categoryId){
    const response: Category = await getCategory(categoryId);
    category = response
    categoryName = response?.data?.name;
  }

    let brandName: string | undefined;
    let brand: spesicficBrand | undefined;
  if(brandId){
    const response: spesicficBrand = await getBrand(brandId);
    brand = response
    brandName = response?.data.name;
  }

    let subcategoryName: string | undefined;
    let subcategory: SubCategoryResponse | undefined;
  if(subcategoryId){
    const response :SubCategoryResponse = await getSpecificSubCategory(subcategoryId);
    subcategory = response
    subcategoryName = response.data.name;
  }

  const filterData = {
  name: categoryName || brandName || subcategoryName || "All Products",
  image: category?.data?.image || brand?.data?.image || "",
  isFiltered: (categoryId || brandId || subcategoryId ) && products.length > 0
};


  return (
    <>
    <div className="main">
      <div className="bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <Breadcrumb>
            <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className='text-sm text-white/80 hover:text-white transition-all'>Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          {  categoryId ?
            <> <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/categories" className='text-sm text-white/70'>Categories</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className='text-white hover:text-white' >Brands</BreadcrumbLink>
                </BreadcrumbItem>
              </>    
            : brandId? 
              <>
                <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/brands" className='text-sm text-white/80 hover:text-white transition-all'>Brands</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className='text-white hover:text-white' >{filterData.name} </BreadcrumbLink>
                </BreadcrumbItem>
              </> 
              :  
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className='text-sm text-white/70'>All Products</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            }
          </BreadcrumbList>
          </Breadcrumb>
          
          
          <div className='flex items-center gap-3 my-5'>
            <div className='w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30'>
              {(categoryId ||brandId )  && products.length>0?    
                <Image
                  src={filterData.image}
                  alt="category"
                  width={1000}
                  height={1000}
                  className='w-full h-full rounded-lg'

                />
              
              : subcategoryId  ? <FolderOpen size={40} />   
              :<PackageOpen size={40} />    
              }
            </div>
            <div>
              <h1 className='text-3xl sm:text-4xl font-bold tracking-tight '>{ filterData.isFiltered ? filterData.name  : "All Products"}  </h1>
              <p className='text-white/80 mt-1'>Explore our complete product collection</p>
            </div>
          </div>
        </div>
      </div>

      {/* display items by category */}
      <div className="container px-4 mx-auto my-5">
        
        {filterData.isFiltered && <>
          <div className="flex items-center gap-3">
            <span className='flex items-center gap-2 text-sm text-gray-600'>
              <Funnel className='fill-gray-600' /> Active Filters: 
            </span>

            <Link href="/products" >
              <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${brandId ? "bg-violet-100 text-violet-700 hover:bg-violet-200" : "bg-green-100 text-green-700 hover:bg-green-200"} text-sm font-medium  transition-colors duration-200 cursor-pointer`}>
                <Tag size={16} />
                {filterData.name}
                <X size={16} />
              </span>
            </Link>
          
            <Link href="/products" > <span className='text-sm text-gray-500 hover:text-gray-700 underline' >Clear All</span> </Link>
          </div>
        </>
        }

        <p className='px-4 my-6 text-sm text-gray-500'>Showsssing {products.length} products</p>
        {products.length===0  ?
        
          <>
            <div className='flex items-center justify-center w-full h-80'>
              <div className='flex flex-col items-center' >
                <span className='mb-5'><PackageOpen size={40} className='text-gray-400' /></span>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>No Products Found</h3>
                <p className='text-gray-500 mb-6'>No products match your current filters.</p>
                <Link href="/products"> <button className='rounded-xl bg-green-600 text-white py-3 px-5 cursor-pointer font-bold '>View All Products</button> </Link>
              </div>
            </div> 
          </>
        : 
          <>
            
          
        <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {products.map((product)=>
                      <React.Fragment key={product._id} >
                        <ProductItem product={product} />
                      </React.Fragment>
                    )
                    }
                    
        </div>
          </>
        }
        

        
        <Info/>

      </div>
    </div>
    </>
  )
}
