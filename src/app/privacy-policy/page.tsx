import Footer from '@/components/Footer'
import Nav from '@/components/Nav/Nav'
import React from 'react'

const page = () => {
  return (
    <div>
        <Nav />
        <div className='w-[70%] sm:mx-auto mx-auto mt-10 mb-24'>
            <h2 className='text-center text-xl text-[#2593AC] font-medium uppercase'>Welcome to Wesupplyitbranded</h2>
            <p className='font-normal my-1 text-base text-[#4D524F]'>Privacy Policy</p>
            <div>
            <h1 className='text-xl sm:text-lg font-medium mt-5'>1. Data Collection</h1>
            <p>We collect the following information:</p>
  <ul className='ml-10 gap-3 list-disc'>
    <li>Business details (name, registration number, address)..</li>
    <li>Contact information (email, phone number).</li>
    <li>Purchase history and preferences.</li>
  </ul>

  <h1 className='text-xl sm:text-lg font-medium mt-5'>2. How We Use Your Data</h1>
  <ul className='ml-10 gap-3 list-disc'>
    <li>To process orders and provide customer support.</li>
    <li>For marketing and promotional purposes (with your consent).</li>
    <li>To improve our website and services.</li>
  </ul>

  <h1 className='text-xl sm:text-lg font-medium mt-5'>3. Data Security</h1>
  <ul className='ml-10 gap-3 list-disc'>
    <li>We use industry-standard encryption to protect your personal data. However, no online system is 100% secure.</li>
    
  </ul>

  <h1 className='text-xl sm:text-lg font-medium mt-5'>4. Sharing Information</h1>
  <p>We use industry-standard encryption to protect your personal data. However, no online system is 100% secure.</p>
  <ul className='ml-10 gap-3 list-disc'>
    <li>Shipping and payment partners.</li>
    <li>Legal authorities (if required by law).</li>
    
  </ul>

  <h1 className='text-xl sm:text-lg font-medium mt-5'>5. Cookies</h1>
  <p>We use cookies to enhance user experience and analyze website traffic. By using our site, you agree to our cookie policy.</p>

  <h1 className='text-xl sm:text-lg font-medium mt-5'>6. Your Rights</h1>
  <p>You can:</p>
  <ul className='ml-10 gap-3 list-disc'>
    <li>Access, update, or delete your data.</li>
    <li>Opt out of marketing communications.</li>
  </ul>

  
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default page