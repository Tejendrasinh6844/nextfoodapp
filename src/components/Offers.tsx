import Image from 'next/image'
import React from 'react'

const Offers = () => {
  return (
    <div className=' bg-black h-screen flex flex-col md:flex-row'>

      {/* text container */}
      <div className="flex-1 flex flex-col justify-center items-center text-center">
      <h1 className="text-white text-5xl font-bold xl:text-6xl">Delicious Burger & French Fry</h1>
      <p className="text-white"> Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.</p>
      <button className='' >Order Now</button>
      </div>

      {/* image cointainer  */}
      <div className=" relative flex-1 w-full   ">
      <Image src="/offerProduct.png" alt='' fill  className=' object-contain'/>
      </div>

    </div>
  )
}

export default Offers
