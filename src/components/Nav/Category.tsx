"use client"
import React, { useEffect } from "react";
import img from "../../assets/pexels-pixabay-209230.jpg";
import img2 from "../../assets/shutterstock_714826708-min-scaled.jpg"
import img3 from "../../assets/1-test-znaete-li-da-uzhivate-vo-praznicite.jpg"
import img4 from "../../assets/non-woven-shopping-bag-manufacturers4-non-woven-shopping-bag-manufacturers-10-ilyv1.jpg"
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { title } from "process";

const Category = () => {

  const categories = [
    {
      title: "WSB Gift and Promotional Items",
      img: img4
    }, {
      title: "Chemicals and Lubricants",img: img
    }, {
      title: "Safety Tools",img: img2
    }, {
      title: "Christmas Decorations",img: img3
    }
  ]
  const { ref: h2Ref, inView: h2InView } = useInView({ triggerOnce: true });
  const { ref: pRef, inView: pInView } = useInView({ triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (h2InView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [h2InView, controls]);

  useEffect(() => {
    if (pInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [pInView, controls]);

  return (
    <div className="my-24 w-[90%] mx-auto">
      <motion.h2
        ref={h2Ref}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="text-center text-[#2593AC] font-medium"
      >
        CATEGORY
      </motion.h2>
      <motion.p
        ref={pRef}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-3xl text-[#373A38] font-semibold text-center mt-2 mb-8"
      >
        Discover premium products all designed to elevate your business
      </motion.p>

      <div className="w-full flex sm:flex-col justify-between gap-6 mx-auto mt-10">
        {categories.map((title, index) => (
          <motion.div
            key={index}
            className="relative flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            <img className="" src={title.img.src} alt="Banner" />
            <div
              className="absolute top-0 flex justify-center items-center bottom-0 right-0 left-0"
              style={{ backgroundColor: "#000000b3" }}
            >
              <h2 className="text-white text-xl font-medium w-[90%] mx-auto text-center">
                {title.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Category;
