import Accordion from "@/components/Accordion";
import Category from "@/components/Nav/Category";
import Hero from "@/components/Nav/Hero";
import Nav from "@/components/Nav/Nav";
import ShopNow from "@/components/Nav/ShopNow";
import Testimonial from "@/components/Nav/Testimonial";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer"
import Why from "@/components/Why";
import Announcement from "@/components/Nav/Announcement";
import Products from "@/components/Products";
import Blog from "@/components/Blog";
import Newsletter from "@/components/Newsletter";

export default function Home() {

  return (
  <div className="w-[100%]  mx-auto">
   <div className="">
    <Announcement />
   <Nav />
   <Hero />

   <Category />
   <Products />


   <Testimonial />
   
   <Newsletter />
   <Footer />
   </div>
  </div>
  );
}
