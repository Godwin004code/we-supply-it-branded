import React from 'react'
import img from "../assets/pexels-pixabay-209230.jpg"

const Blog = () => {
  return (
    <div className='w-[90%] mx-auto my-16'>
        <h2  className='text-center text-[#2593AC] font-medium'>BLOG</h2>
        <p className='text-4xl text-[#373A38] font-semibold text-center mt-2 mb-8'>Our Blog</p>
        <div>
        <div className="flex sm:flex-col">
  <div className="flex-1 sm:py-20 sm:px-5  gap-5 flex justify-center items-center flex-col bg-[#F9F9F9]">
<h1 className="font-semibold text-3xl sm:text-xl text-center text-[#3A3845]  uppercase">The secret to creating a unique soap</h1>
<p className="font-normal text-center text-[#595667] w-[80%] sm:w-[90%] mx-auto ">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices nullam neque ultri</p>
<h2 className=" font-bold text-sm uppercase" style={{borderBottom: '1px solid #3A3845'}}>Read Now</h2>
  </div>
  <div className="flex-1">
    <img src={img.src} className="h-[400px] sm:h-[350px] object-cover w-full" alt="img " />
  </div>
</div>
        </div>
    </div>
  )
}

export default Blog