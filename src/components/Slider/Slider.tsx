"use client"
// components/Slider.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import "./slide.css"
import img1 from "../../assets/cb4d76ea7d2da39da8ab8303680e3bfb.png"
import img2 from "../../assets/pexels-pixabay-264787.jpg"
import img3 from "../../assets/pexels-shvetsa-5964980.jpg"
import img4 from "../../assets/pexels-thepaintedsquare-2381847.jpg"
import Image, {StaticImageData} from "next/image"
import { FaMagnifyingGlass } from "react-icons/fa6";


type Slide = {
  title: string;
  description: string;
  image: string | StaticImageData;
};

const slides: Slide[] = [
  {
    title: "Explore Chemicals",
    description: "Elevate your brand with our diverse range of corporate gifts, customizable items, and event giveaways.",
    image: img1,
  },
  {
    title: "Safety Tools",
    description: "Discover a comprehensive selection of cleaning agents, industrial chemicals, and lab supplies, designed to meet the demands of commercial and industrial applications. Each product is accompanied by detailed Safety Data Sheets (SDS) to ensure safe handling and compliance. Usage instructions and industry certifications are provided to guarantee effective and reliable results, giving you peace of mind while maintaining high safety standards in your operations.",
    image: img2,
  },
  {
    title: "Christmas Decorations",
    description: "Prioritize workplace safety with our extensive range of personal protective equipment (PPE), safety signs, and first aid kits. From helmets and gloves to goggles and complete first aid solutions, our products are designed to meet compliance requirements and keep your team protected. Each item comes with clear usage instructions, informative videos, and user ratings to help you make informed decisions. Ensure a safer environment with products that are both reliable and effective.",
    image: img3,
  },
  {
    title: "Gifts & More",
    description: "Transform your holiday season with our stunning collection of outdoor lighting, ornaments, and artificial trees. Create magical spaces with seasonal discounts and a curated inspiration gallery to spark your creativity. Whether you’re looking for a simple festive touch or a grand holiday display, our products are designed to suit every style and need. Take advantage of our installation services to make decorating effortless and enjoy a memorable holiday season filled with festive cheer.",
    image: img4,
  }
  //
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
 // setTimeout(handleNextSlide, 3000)

  return (
    <div className="slider-container bg-[#F9F9F9] h-[70vh]">
     
      <div className="slide">
        <div className="text-content ">
          <motion.h1
            key={slides[currentSlide].title}
            initial={{ y: "200%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }} className="text-[#373A38]"
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            key={slides[currentSlide].description}
            initial={{ y: "200%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: .5 }}
          >
            {slides[currentSlide].description}
          </motion.p>
          <div className="flex mt-10 gap-1 w-full">
        <input className="h-[50px] flex-1 pl-3 rounded-lg bg-transparent text-[#373A38] focus:outline-none brd" type="text" placeholder="Search for products" name="company-name" id="company-name" />  <button className="font-bold bg-[#39d8fc] p-3 px-5 text-white rounded-md ">
        <FaMagnifyingGlass />
      </button>
      </div>
        </div>
        <motion.div
          className="image-banner"
          key={slides[currentSlide].title}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image src={slides[currentSlide].image} alt={slides[currentSlide].title} />
        </motion.div>
      </div>
      
    </div>
  );
};

export default Slider;
