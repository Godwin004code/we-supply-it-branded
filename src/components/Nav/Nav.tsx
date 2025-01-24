"use client"
import React, { useState } from "react";
import Link from "next/link"
import Image from "next/image"
import logo from "../../assets/Brand Guide (2).png"
import cross from "../../assets/cross.svg";
import menu from "../../assets/hamburger-black.svg";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { useRouter } from "next/router";


const Nav = () => {
 
 

  const isActive = window.location.pathname;
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [mobileShown, setMobileShown] = useState(false);
    const handleMouseEnter = () => {
        setDropdownVisible(true);
      };
    
      const handleMouseLeave = () => {
        setDropdownVisible(false);
      };
    
      function toggleNav() {
        setMobileShown(!mobileShown);
      }
  return (
    <header className=" py-4">
        <div className="w-[90%] flex justify-between mx-auto">
          <Link href={"/"}>
          <Image src={logo} className="w-[100px]" alt="WeSupplyIt Branded" />
          </Link>
            <nav className="my-auto sm:hidden">
                <ul className="flex gap-10 ">
                    <li>
                        <Link  className={isActive === "/" ? "text-[#0BA4C7] hover:text-[#0BA4C7]" : "text-[#676262] hover:text-[#0BA4C7]"} href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className={isActive === "/about" ? "text-[#0BA4C7] hover:text-[#0BA4C7]" : "text-[#676262] hover:text-[#0BA4C7]"} href={"/about"}>About Us</Link>
                    </li>
                    <li>
                        <Link className={isActive === "/product" ? "text-[#0BA4C7] hover:text-[#0BA4C7]" : "text-[#676262] hover:text-[#0BA4C7]"} href={"/product"}>Shop</Link>
                    </li>
                    
                    <li>
                        <Link className={isActive === "/blog" ? "text-[#0BA4C7] hover:text-[#0BA4C7]" : "text-[#676262] hover:text-[#0BA4C7]"} href={"/blog"}>Blog</Link>
                    </li>
                    <li>
                        <Link className={isActive === "/contact" ? "text-[#0BA4C7] hover:text-[#0BA4C7]" : "text-[#676262] hover:text-[#0BA4C7]"} href={"/contact"}>Contact</Link>
                    </li>
                    
                </ul>
            </nav>
            <div className="my-auto flex gap-3 sm:hidden">
               <PiMagnifyingGlassThin className="w-[34px] h-[34px]" />
               <CiHeart className="w-[34px] h-[34px]"  />
               <CiShoppingCart className="w-[34px] h-[34px]"  />
               <CiUser className="w-[34px] h-[34px]"  />
               
                {/* <button className="text-[#39d8fc] h-[50px] w-[100px] font-medium text-base rounded-md">Login</button>
                <Link href={"/signup"}>
                <button className="bg-[#39d8fc] h-[50px] w-[160px] font-medium text-base rounded-md">Signup</button>
                </Link> */}
            </div>
            <button className="hidden menu lg:block w-[50px]" onClick={toggleNav}>
          <img src={menu.src} className="hidden lg:block w-[50px] sm:w-[30px]" alt="mdmdmd" />
        </button>
        </div>
     
        {/* mobile nav */}
        <div
          className={`${
            mobileShown
              ? "left-[0%] pointer-events-auto"
              : "left-[100%] pointer-events-none"
          } fixed bg-white h-full w-full z-[100] overflow-auto left-0 top-0 text-black duration-500 ease-in-out`}
        >
          {/* Container for logo and cross button */}
          <div className="w-[90%] mx-auto py-10 mb-[40px] flex justify-between">
            <Link href={"/"}>
              {" "}
              <img src={logo.src} className="w-[150px] ml-5" alt="logo" />
            </Link>
            <button onClick={toggleNav}>
              <img className="w-[50px]" src={cross.src} alt="" />
            </button>
          </div>

          <ul className="flex my-auto gap-16 w-[90%] mx-auto flex-col text-3xl sm:text-xl sm:gap-8">
            <li>
              <Link href="/" className="font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-medium">
                About Us
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/product" className="font-medium flex">
                <span className="my-auto">Shop</span>{" "}

              </Link>
              {/* {isDropdownVisible && <div className='w-[76px] h-[5px] bg-[#71FF87] absolute'></div>} */}
             
            </li>
            <li>
              <Link href="/partners" className="font-medium">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-medium">
                Contact Us
              </Link>
            </li>

            <Link href="/register">
              <button className="bg-[#39D8FC] text-white w-full mt-[80px] rounded-md py-4 px-10">
                Register
              </button>
            </Link>
          </ul>
        </div>
    </header>
  )
}

export default Nav