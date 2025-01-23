import img from "../../assets/pexels-pixabay-209230.jpg"
import Link from "next/link"

const ShopNow = () => {
  return (
    <div className=' w-[90%] mx-auto  py-36'>
<div className="flex sm:flex-col">
  <div className="flex-1 sm:py-20  gap-5 flex justify-center items-center flex-col sm:px-5 bg-[#F9F9F9]">
<h1 className="font-semibold text-3xl sm:text-xl text-[#3A3845]  text-center uppercase">Made in Nigeria since 2020</h1>
<p className="font-normal text-center text-[#595667] w-[80%] sm:w-[90%] mx-auto ">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices nullam neque ultri</p>
<Link href={"/signup"}>
<h2 className=" font-bold text-sm uppercase" style={{borderBottom: '1px solid #3A3845'}}>Register Now</h2>
</Link>
  </div>
  <div className="flex-1">
    <img src={img.src} className="h-[400px] sm:h-[350px] object-cover w-full" alt="img " />
  </div>
</div>
<div className="flex sm:flex-col">
  <div className="flex-1 sm:px-5 sm:order-1 sm:py-20  gap-5 flex order-2 justify-center items-center flex-col bg-[#F9F9F9]">
<h1 className="font-semibold text-3xl text-[#3A3845] uppercase sm:text-xl text-center">Made in Nigeria since 2020</h1>
<p className="font-normal text-center text-[#595667]  w-[80%] sm:w-[90%] mx-auto ">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices nullam neque ultri</p>
<Link href={"/product"}>
<h2 className=" font-bold text-sm uppercase" style={{borderBottom: '1px solid #3A3845'}}>Shop Now</h2>
</Link>
  </div>
  <div className="flex-1 sm:order-2 order-1">
    <img src={img.src} className="h-[400px] sm:h-[350px] object-cover w-full" alt="img " />
  </div>
</div>
    </div>
  )
}

export default ShopNow