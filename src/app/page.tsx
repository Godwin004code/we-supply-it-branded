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
  const accordionItems = [
    {
      id: 1,
      title: 'What is Next.js?',
      content: 'Next.js is a React framework that enables server-side rendering and static site generation.',
    },
    {
      id: 2,
      title: 'What is Tailwind CSS?',
      content: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.',
    },
    {
      id: 3,
      title: 'Why use TypeScript?',
      content: 'TypeScript provides static typing for JavaScript, improving developer productivity and code quality.',
    },
  ];
  return (
  <div className="w-[100%]  mx-auto">
   <div className="">
    <Announcement />
   <Nav />
   <Hero />
   <Why />
   <Category />
   <Products />

   <ShopNow />
   <Testimonial />
   <Blog />
   <Newsletter />
   <Footer />
   </div>
  </div>
  );
}
