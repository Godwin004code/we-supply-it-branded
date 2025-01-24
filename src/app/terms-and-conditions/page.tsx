import Footer from '@/components/Footer'
import Nav from '@/components/Nav/Nav'
import React from 'react'

const page = () => {
  return (
    <div>
        <Nav />
        <div className='w-[70%] sm:mx-auto mx-auto mt-10 mb-24'>
            <h2 className='text-center text-xl text-[#2593AC] font-medium uppercase'>Welcome to Wesupplyitbranded</h2>
            <p className='font-normal my-1 text-base text-[#4D524F]'>These terms and conditions outline the rules and regulations for the use of the Wesupplyitbranded website, located at wesupplyitbranded.com . By accessing this website, we assume you accept these terms and conditions in full.</p>
            <div>
            <h1 className='text-xl sm:text-lg font-medium mt-5'>1. Definitions</h1>
  <ul className='ml-10 gap-3 list-disc'>
    <li><strong>"We," "Us," "Our"</strong>: Refers to Wesupplyitbranded.</li>
    <li><strong>"You," "User"</strong>: Refers to businesses or trade professionals accessing the platform.</li>
  </ul>

  <h1 className='text-xl sm:text-lg font-medium mt-5'>2. General Terms</h1>
  <ul className='ml-10 gap-3 list-disc'>
    <li>This platform is for trade-only access. Individuals or unverified businesses cannot make purchases.</li>
    <li>By registering, you confirm that your business details are accurate and up to date.</li>
  </ul>

  <h1 className='text-xl sm:text-lg font-medium mt-5'>3. Product Information</h1>
  <ul className='ml-10 gap-3 list-disc'>
    <li>All products are subject to availability.</li>
    <li>Descriptions and prices are subject to change without notice.</li>
    <li>Bulk pricing discounts are applicable based on quantity tiers listed on the product page.</li>
  </ul>

  <h1 className='text-xl sm:text-lg font-medium mt-5'>4. Payments and Transactions</h1>
  <ul className='ml-10 gap-3 list-disc'>
    <li>We accept credit cards, bank transfers, and other secure payment methods.</li>
    <li>Full payment is required before order processing.</li>
    <li>All prices are exclusive of VAT, duties, or shipping costs unless specified.</li>
  </ul>

  <h1 className='text-xl sm:text-lg font-medium mt-5'>5. Shipping and Delivery</h1>
  <ul className='ml-10 gap-3 list-disc'>
    <li>Shipping timelines vary depending on the product and location. Estimated delivery dates are shared at checkout.</li>
    <li>Wesupplyitbranded is not responsible for delays caused by third-party carriers.</li>
  </ul>

  <h1 className='text-xl sm:text-lg font-medium mt-5'>6. Returns and Refunds</h1>
  <ul className='ml-10 gap-3 list-disc'>
    <li>Returns are accepted within 14 days of delivery for damaged or defective items.</li>
    <li>Refunds will be processed within 7–10 business days after return approval.</li>
  </ul>

  <h1 className='text-xl sm:text-lg font-medium mt-5'>7. Liability</h1>
  <ul className='ml-10 gap-3 list-disc'>
    <li>Wesupplyitbranded is not liable for indirect or consequential damages arising from the use of our products or website.</li>
  </ul>

  <h1 className='text-xl sm:text-lg font-medium mt-5'>8. Intellectual Property</h1>
  <ul className='ml-10 gap-3 list-disc' >
    <li>All content, images, and designs on this website are owned by Wesupplyitbranded. Unauthorized use is prohibited.</li>
  </ul>

  <h1 className='text-xl sm:text-lg font-medium mt-5'>9. Governing Law</h1>
  <ul className='ml-10 gap-3 list-disc'>
    <li>These terms are governed by the laws of Nigeria.</li>
  </ul>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default page