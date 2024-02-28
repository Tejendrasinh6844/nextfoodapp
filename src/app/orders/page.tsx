import React from 'react'

const OrderPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
     <table className=' w-full border-separate border-spacing-3'>
      <thead className=' text-left'>
        <tr>
<th className=' hidden md:block'>Order Id</th>
<th>Date</th>
<th>Price</th>
<th className=' hidden md:block'>Products</th>
<th>Status</th>
        </tr>
      </thead>
      
      <tbody>
<tr className=' text-sm md:text-base bg-red-50'>
  <td className=' hidden md:block py-6 px-1'>7226866844</td>
  <td className='py-6 px-1'>29-2-2024</td>
  <td className='py-6 px-1'>89.90</td>
  <td className=' hidden md:block py-6 px-1'>Big Burger, Veggie Pizza</td>
  <td className='py-6 px-1'>Status</td>
</tr>
<tr className=' text-sm md:text-base odd:bg-gray-100'>
  <td className=' hidden md:block py-6 px-1'>7226866844</td>
  <td className='py-6 px-1'>29-2-2024</td>
  <td className='py-6 px-1'>89.90</td>
  <td className=' hidden md:block py-6 px-1'>Big Burger, Veggie Pizza</td>
  <td className='py-6 px-1'>Status</td>
</tr>
      </tbody>
     </table>



    </div>
  )
}

export default OrderPage
