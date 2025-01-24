"use client"
import React, { useEffect, useRef, useState } from "react";

import quote from "../../assets/quote.svg"
import gsap from "gsap";
import img from "../../assets/z.jpeg"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

export default function Testimonials() {
  const count = useRef(0);
  
  const [control, setControl] = useState(0);

  const testimonials = [
    {
      title: "Achieving Growth with Moshav Capital",
      para: `Wesupplyitbranded has been a game-changer for our business. The range of promotional items and the customization options are excellent. Highly recommended!`,
      name: "Jane Doe",
      profession: "Marketing Manager, XYZ Ltd",
      image: img,
    },
    {
      title: " Empowering my businesswith Moshav Capital",
      para: `Their chemicals category is unmatched in quality and compliance. We’ve streamlined our procurement process thanks to their reliable service.`,
      name: "John Smith",
      profession: "Operations",
      image: img,
    },
    {
      title: "Transforming Agribusiness with Moshav Capital",
      para: `The Christmas decorations were perfect for our mall’s holiday theme. The installation service was seamless!`,
      name: "Amaka Johnson",
      profession: "Event Manager, BigCity Malls",
      image: img,
    },
    
  ];

  function moveCard(direction) {
    setControl(control + 1);

    const testiCards = gsap.utils.toArray(".testimonial-cards");

    if (direction == "left") {
      if (count.current == 0) return;
      count.current = count.current - 1;

      testiCards.forEach((card, idx) => {
        gsap.to(card, {
          x: `${count.current * -100}%`,
          scale: idx == count.current ? 1 : 0.8,
          opacity: idx < count.current ? 0 : 1,
          filter: idx == count.current ? "brightness(100%)" : "brightness(50%)",
        });
      });
    }

    if (direction == "right") {
      if (count.current == 3) return;

      count.current = count.current + 1;

      testiCards.forEach((card, idx) => {
        gsap.to(card, {
          x: `${count.current * -100}%`,
          scale: idx == count.current ? 1 : 0.8,
          opacity: idx < count.current ? 0 : 1,
          filter: idx == count.current ? "brightness(100%)" : "brightness(50%)",
        });
      });
    }
  }

  useEffect(() => {
    const testiCards = gsap.utils.toArray(".testimonial-cards");

    testiCards.forEach((card, idx) => {
      gsap.to(card, {
        scale: idx == count.current ? 1 : 0.8,
        opacity: idx < count.current ? 0 : 1,
        filter: idx == count.current ? "brightness(100%)" : "brightness(50%)",
      });
    });
  }, []);

  return (
    <section className="flex flex-col gap-4 py-[100px] bg-[#EBFBFF] overflow-hidden">
      {/* Title */}
      <h2 className="text-4xl sm:text-3xl font-semibold text-center">Testimonials</h2>

      {/* div for icon on the left and arrow buttons */}
      <div className="justify-between w-[90%] mx-auto flex items-center lg:hidden">
        <img className="w-[100px]" src={quote.src} alt="" />

        <span key={"1"} className="flex items-center gap-3 ">
          <FaArrowLeft
            onClick={() => {
              moveCard("left");
            }}
            className="w-[40px] cursor-pointer"
            
          />
          

          {testimonials.map((dot, idx) => {
            return (
              <span
                className={`h-[5px] w-[5px] ${
                  idx == count.current ? "bg-[#39D8FC]" : "bg-[#D9D9D9]"
                } rounded-[50%] duration-300`}
              ></span>
            );
          })}
          <FaArrowRight
            onClick={() => {
              moveCard("right");
            }}
            className="w-[40px] cursor-pointer"
            
          />
        </span>
      </div>

      {/* div for testimonial content and cards */}
      <div className="w-[80%] mx-auto flex justify-between lg:flex-col lg:mt-[60px]">
        {/* testimonial content */}
        {testimonials.map((testi, idx) => {
          return (
            <div
              className={`${
                idx == count.current ? "block" : "hidden"
              } flex flex-col gap-3 max-w-[600px] testimonial-content`}
            >
              <h3 className="text-3xl sm:text-xl font-semibold mb-3">{testi.title}</h3>

              <p className="mb-4 leading-8 sm:text-base">{testi.para}</p>

              <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
                <div className="overflow-hidden rounded-md">
                  <img
                    src={testi.image.src}
                    className="hidden lg:block w-[100px] h-[100px] object-cover"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-2xl sm:text-lg font-medium">{testi.name}</p>
                  <p>{testi.profession}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* testimonial cards. */}
        <div className="flex relative mr-[300px] lg:hidden">
          <div className="rounded-xl opacity-0">
            <img src={img} className="" alt="" />
          </div>
          <div className="absolute flex h-full">
            {testimonials.map((testimonial,idx) => {
              console.log(testimonial.image.src);
              
              return (
                <div key={idx} className="rounded-xl w-[300px] testimonial-cards">
                  
                  <img className="w-[300px] h-full max-w-[300px] object-cover overflow-hidden rounded-xl" src={testimonial.image.src} alt="sss" />
                </div>
              );
            })}
          </div>
        </div>

        <span className="items-center gap-3 hidden lg:flex mx-auto mt-10">
          <FaArrowLeft
            onClick={() => {
              moveCard("left");
            }}
            className="w-[40px] cursor-pointer"
           
          />

          {testimonials.map((dot, idx) => {
            return (
              <span
                className={`h-[5px] w-[5px] ${
                  idx == count.current ? "bg-[#39d8fc]" : "bg-[#D9D9D9]"
                } rounded-[50%] duration-300`}
              ></span>
            );
          })}
          <FaArrowRight
            onClick={() => {
              moveCard("right");
            }}
            className="w-[40px] cursor-pointer"
            
          />
        </span>
      </div>
    </section>
  );
}
