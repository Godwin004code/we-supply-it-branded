import React from 'react'
import img from "../../assets/pexels-pixabay-209230.jpg"
import Link from 'next/link'

const Whoweare = () => {
  return (
 
         <div className='w-[90%] mx-auto mb-20 mt-10'>
        <h2  className='text-center text-[#2593AC] font-medium'>ABOUT US</h2>
        <p className='text-4xl text-[#373A38] font-semibold text-center mt-2 mb-8'>Who We Are</p>
        <div>
        <div className="flex sm:flex-col">
  <div className="flex-1 sm:py-20 sm:px-5  gap-5 flex justify-center items-center flex-col bg-[#F9F9F9]">
<h1 className="font-semibold text-3xl sm:text-xl text-center text-[#3A3845]  uppercase">Wesupplyitbranded</h1>
<p className="font-normal text-center text-[#595667] w-[80%] sm:w-[90%] mx-auto ">is a premier online e-commerce platform catering exclusively to trade professionals. Our mission is to simplify procurement by offering a curated range of quality products across four key categories: Gift and Promotional Items, Chemicals, Safety Tools, and Christmas Decorations.
</p>
<Link href={"/products"}><h2 className=" font-bold text-sm uppercase" style={{borderBottom: '1px solid #3A3845'}}>SHOP Now</h2></Link>
  </div>
  <div className="flex-1">
    <img src={img.src} className="h-[400px] sm:h-[350px] object-cover w-full" alt="img " />
  </div>
</div>

        </div>
    </div>
  
  )
}

export default Whoweare