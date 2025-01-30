import React from 'react'

const Newsletter = () => {
  return (
    <div className='sm:w-[90%] mt-20 mx-auto'>
        <div className='sm:text-center mb-20'>
    <h2 className='text-[#595667] text-center font-semibold text-base mb-4'>Sign up for emails</h2>
    <h2 className='text-[#3A3845] font-medium text-center text-3xl uppercase'>For news, collections & more</h2>
    <div className='flex flex-col gap-4 w-[300px] mx-auto justify-center items-center'>
        <input type="email" className='bg-transparent text-center  h-[51px] focus:outline-none text-[#3A3845]  w-full pl-2' placeholder='Your email' style={{borderBottom: '1px solid #3A3845'}} name="" id="" />
        <button className='w-[130px] h-[51px] bg-[#39d8fc] mt-0 text-white rounded-md rounded-br-md'>Subscribe</button>
    </div>
</div>
    </div>
  )
}

export default Newsletter