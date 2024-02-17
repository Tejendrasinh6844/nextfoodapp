import { pizzas } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
      {pizzas.map(item=>(
        <Link href={`/product/${item.id}`} key={item.id} className='w-full sm:w-1/2 lg:w-1/3  h-[60vh] border-r-2 border-b-2 border-red-500 '>
{/* image container */}
{item.img && 
<div className=' relative h-[80%]'>
  <Image src={item.img} alt='' fill />
  </div>}

{/* text  container */}




        </Link>
      ))}
    </div>
  )
}

export default CategoryPage;
