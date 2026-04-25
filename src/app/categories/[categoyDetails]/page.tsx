import { getSubCategoryOnCategory } from '@/services/subCategories'
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  
} from "@/components/ui/breadcrumb"
import { SubCategoriesResponse, SubCategory } from '@/types/subCategories'
import { getCategory } from '@/services/categoriesServices'
import { CategoryResponse } from '@/types/categories'
import Image from 'next/image'
import Link from 'next/link'
import { FolderOpen, MoveLeft} from 'lucide-react'
import SubCategoryBox from '@/app/Components/Commens/SubCategoryBox'
export default async function CategoryDetails({
    params,
}: {
  params: Promise<{ categoyDetails: string }>
}) 
{
    
  
  const {categoyDetails} = await params
  const categoryResponse :CategoryResponse = await getCategory(categoyDetails);
  const reponse : SubCategoriesResponse = await getSubCategoryOnCategory(categoyDetails);
  const subCategories :SubCategory[] = reponse.data

  return (
    <>  
    

          <div className="main">
            <div className="bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
              <div className="container mx-auto px-4 py-10 sm:py-14">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/" className='text-white/70 hover:text-white transition-all duration-200'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/categories" className='text-white/70 hover:text-white transition-all duration-200'>Categories</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className='text-white' >{categoryResponse.data.name}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
                <div className='flex items-center gap-3 my-5'>
                <div className='w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30'>
                      
                    <Image
                      src={categoryResponse.data.image}
                      alt="category"
                      width={1000}
                      height={1000}
                      className='w-full h-full rounded-lg'

                    />
                  
                  
                </div>
                <div>
                  <h1 className='text-3xl sm:text-4xl font-bold tracking-tight '>{categoryResponse.data.name}  </h1>
                  <p className='text-white/80 mt-1'>Choose a subcategory to browse products</p>
                </div>
              </div>
              </div>
              
          </div>
          <div className="container mx-auto px-4 py-10 sm:py-15">
            <Link href="/categories" className='inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors mb-6'> <MoveLeft /> Back To Categories</Link>
            <p className='text-lg font-bold text-gray-900'>{reponse.data.length} Subcategories in {categoryResponse.data.name}</p>
          </div>
          {subCategories.length>0   ?        
            <>
              <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {subCategories.map((subCat)=><React.Fragment key={subCat._id}>
                    <SubCategoryBox subCat={subCat}/>
                  </React.Fragment> )}
                </div>
            </>
            :
            <>
              <div className='flex items-center justify-center w-full h-80'>
                <div className='flex flex-col items-center' >
                  <span className='mb-5'> <FolderOpen size={40} className='text-gray-400' /></span>
                    <h3 className='text-lg font-bold text-gray-900 mb-2'>No Subcategories Found</h3>
                    <p className='text-gray-500 mb-6'>This category doesn&apos;t have any subcategories yet.</p>
                    <Link href="/products"> <button className='rounded-xl bg-green-600 text-white py-3 px-5 cursor-pointer font-bold '>View All Products</button> </Link>
                </div>
              </div> 
            </>    
          }
          
        </div>
    </>
  )
}
