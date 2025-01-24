"use client"
import React, {useState, useRef} from 'react'
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

const ContactForm = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [num, setNum] = useState("");
    const [mes, setMes] = useState("");

    const form = useRef()

    const emailHandler = (e) => {
        setEmail(e.target.value);
      };
      const mesHandler = (e) => {
        setMes(e.target.value);
      };
      const fnameHandler = (e) => {
        setFname(e.target.value);
      };
      const lnameHandler = (e) => {
        setLname(e.target.value);
      };
      
      const numHandler = (e) => {
        setNum(e.target.value);
      };
      const submitHandler = (e) => {
        e.preventDefault();
      };

  return (
    <div className='bg-[#f4f4f4] w-[50%] md:w-[90%] md:mx-auto p-6 rounded-2xl'>
                <form ref={form} >
                <div className='w-[100%] flex justify-between'>
                    <input style={{borderBottom: '1px solid #3A3845'}} name="fname"
                value={fname}
                onChange={fnameHandler} className='w-[47%] focus:outline-none bg-transparent py-4 pl-4 inp' type="text" placeholder='First Name' />
                    <input style={{borderBottom: '1px solid #3A3845'}} name="lname"
                value={lname}
                onChange={lnameHandler} className='w-[47%] focus:outline-none bg-transparent py-4 pl-4 inp' type="text" placeholder='Last Name' />
                </div>
                <div className='w-[100%] flex justify-between'>
                    <input  style={{borderBottom: '1px solid #3A3845'}} name="email"
                value={email}
                onChange={emailHandler} className='w-[47%] focus:outline-none bg-transparent py-4 pl-4 inp' type="email" placeholder='Email' />
                    <input style={{borderBottom: '1px solid #3A3845'}} name="num"
                value={num}
                onChange={numHandler} className='w-[47%] focus:outline-none bg-transparent py-4 pl-4 inp' type="number" placeholder='Phone Number' />
                </div>
                <div className='w-[100%]'>
                    <textarea style={{borderBottom: '1px solid #3A3845'}} name="mes"
                value={mes}
                onChange={mesHandler} className='inp focus:outline-none w-[100%] bg-transparent pl-4 pt-4' placeholder='Message' cols="20" rows="6"></textarea>
                </div>
               <div className='w-full mt-10 flex justify-center items-center'>
               <button onClick={submitHandler} className='cursor-pointer transition-all duration-300 ease-in hover:bg-[#39d8fc] w-[30%] text-center py-3 rounded-md bg-white md:w-[70%] md:mt-5'>Send Message</button>
               </div>
                </form>
            </div>
  )
}

export default ContactForm