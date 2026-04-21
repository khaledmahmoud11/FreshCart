import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { PackageOpen } from 'lucide-react'
import { getAllCategories, } from '@/services/categoriesServices'
import {  CategoriesI, Category } from '@/types/categories'
import CategoryBox from '../Components/Commens/CategoryBox'
import Info from '../Components/Commens/Info'
import { getAllUser } from '@/services/users'
export default async function Categories() {
  try{
      const response = await getAllUser();
      console.log(response,"getAllUsergetAllUsergetAllUsergetAllUsergetAllUsergetAllUsergetAllUsergetAllUsergetAllUsergetAllUsergetAllUsergetAllUser")
  }catch{
    
  }

  const response :CategoriesI = await getAllCategories();
  const allCategories : Category[] = response.data;
  console.log(allCategories,"allCategories3333333333333333333333333333333333333333333333")

  return (
    <>
      <div className="main">
        <div className="bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
          <div className="container mx-auto px-4 py-10 sm:py-14">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className='text-gray-300 hover:text-white transition-all duration-200' >Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className='text-white hover:text-white' >Categories</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className='flex items-center gap-3 my-5'>
              <div className='w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30'>
                  <PackageOpen size={40} />   
              </div>
              <div>
                <h1 className='text-3xl sm:text-4xl font-bold tracking-tight '>All Categories  </h1>
                <p className='text-white/80 mt-1'>Browse our wide range of product categories</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <div className="my-4 px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-5">
            {
              allCategories.map((category)=><React.Fragment key={category._id}>
                <CategoryBox category={category} />

              </React.Fragment>
              )
            }
            </div>        
            <Info/>
          </div>
      </div>
    </>
  )
}
