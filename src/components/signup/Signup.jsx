"use client"

import React, { useState } from "react";
import Link from "next/link"
import individual from "../../assets/z.jpeg";
import organisation from "../../assets/z2.jpeg";
import bg from "../../assets/pexels-thepaintedsquare-2381847.jpg";
import bg2 from "../../assets/pexels-thepaintedsquare-2381847.jpg";
import logo from "../../assets/wsb-logo.png";
//import RegisterArrow from "./RegisterArrow";

import Login from "./Login"
import Form from "./Form";

const Signup = () => {
  const [formType, setFormType] = useState("individual");
  const [active, setActive] = useState(false);
  

  const nextSlide = () => {
    setActive(() => {
      let newIndex = active + 1;

      if (newIndex > Data.length - 1) {
        return 0;
      } else if (newIndex < 0) {
        return Data.length - 1;
      }

      return newIndex;
    });
  };

  const prevSlide = () => {
    setActive(() => {
      let newIndex = active - 1;

      if (newIndex < 0) {
        return Data.length - 1;
      } else if (newIndex > Data.length - 1) {
        return 0;
      }

      return newIndex;
    });
  };

  return (
    <div className="flex">
      {/* Container for image with slider */}
      <div
        className=" h-[100vh] w-[50%] md-2:hidden"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        
        <section className="bg-[#00000080] w-full px-12 py-10 flex flex-col justify-between h-full">
          <div>
            <Link href="/">
              {" "}
              <img className="hidden" src={logo.src} alt="logo" />
            </Link>
          </div>
          <div className="mb-10">
            <h2 className="text-white font-semibold text-4xl mb-8">Your Reliable Partner for Business Supplies</h2>
            <div className="flex justify-between">
              <p className="text-white text-[20px] w-[60%]">Register and let's do business.</p>
              {/* <div className="flex w-fit">
                <RegisterArrow
                  next={nextSlide}
                  prev={prevSlide}
                  active={active}
                  setActive={setActive}
                />
              </div> */}
            </div>
          </div>
        </section>
      </div>

      {/* right side with form and title*/}
      <div className="flex max-h-[100vh] my-auto overflow-y-scroll flex-col px-20 pt-16 gap-8 font-medium w-[50%] md-2:w-[100%] md-2:p-4 py-[50px]">
       
        <h1 className="text-4xl font-bold text-center"> {active === true ? 'Login' : "Register" }</h1>

        {/* Container to choose type of form */}
       


   {active === true ? <Login setActive={setActive} /> : <Form setActive={setActive} />}
      </div>
    </div>
  );
};

export default Signup;
