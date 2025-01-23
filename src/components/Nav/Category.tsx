import img from "../../assets/pexels-pixabay-209230.jpg"
import Image from "next/image"

const Category = () => {
  return (
    <div className="my-24 w-[90%] mx-auto">
     
      <h2  className='text-center text-[#2593AC] font-medium'>CATEGORY</h2>
        <p className='text-4xl sm:text-3xl text-[#373A38] font-semibold text-center mt-2 mb-8'>Discover premium products all designed to elevate your business</p>

      <div className="w-full flex sm:flex-col justify-between gap-6 mx-auto mt-10">
      <div className="relative flex-1">
          <img className="" src={img.src} alt="Banner"   />
          <div className="absolute top-0 flex justify-center items-center bottom-0 right-0 left-0" style={{backgroundColor: '#000000b3'}}>
<h2 className="text-white text-xl font-medium w-[90%] mx-auto text-center">WSB Gift and Promotional Items</h2>
          </div>
      </div>
      <div className="relative flex-1">
          <img className="" src={img.src} alt="Banner"   />
          <div className="absolute top-0 flex justify-center items-center bottom-0 right-0 left-0" style={{backgroundColor: '#000000b3'}}>
<h2 className="text-white text-xl font-medium w-[90%] mx-auto text-center">WSB Gift and Promotional Items</h2>
          </div>
      </div>
      <div className="relative flex-1">
          <img className="" src={img.src} alt="Banner"   />
          <div className="absolute top-0 flex justify-center items-center bottom-0 right-0 left-0" style={{backgroundColor: '#000000b3'}}>
<h2 className="text-white text-xl font-medium w-[90%] mx-auto text-center">WSB Gift and Promotional Items</h2>
          </div>
      </div>
      <div className="relative flex-1">
          <img className="" src={img.src} alt="Banner"   />
          <div className="absolute top-0 flex justify-center items-center bottom-0 right-0 left-0" style={{backgroundColor: '#000000b3'}}>
<h2 className="text-white text-xl font-medium w-[90%] mx-auto text-center">WSB Gift and Promotional Items</h2>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Category