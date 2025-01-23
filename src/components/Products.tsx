import React from 'react'
import data from "./data"

const Products = () => {
  return (
    <div className='w-[90%] mx-auto'>
        <h2  className='text-center text-[#2593AC] font-medium'>PRODUCTS</h2>
        <p className='text-4xl sm:text-3xl text-[#373A38] font-semibold text-center mt-2 mb-8'>Discover The Range</p>
        <div className='flex lg:flex-wrap gap-5 sm:gap-7'>
            {data.map((data, idx) => {
                const {name, id, category, price, discount_price, image} = data
                return (
                    <div className='flex-1'>
                        <div className='bg-[#F5F5F5] w-full flex p-4 justify-center items-center '>
                            <img src={image.src} className='h-[280px] object-cover' alt={name} />
                        </div>
                        <h2 className='text-xl font-semibold mt-1 text-[#373A38]'>{name}</h2>
                        <p className='font-normal my-1 text-lg text-[#4D524F]'>{category}</p>
                        <div><span className='font-bold text-2xl text-[#2EA2BD]'>#{price}</span> <span className='font-medium text-xl text-[#ACB0B1] line-through'>#{discount_price}</span></div>
                        <button className='uppercase mt-3 w-full rounded-lg py-3 font-semibold text-sm' style={{border: '1px solid #2EA2BD'}}>Add to cart</button>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default Products