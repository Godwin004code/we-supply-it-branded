import React from 'react'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav/Nav'
import Whoweare from '@/components/About/Whoweare'
import Whywestandout from '@/components/About/Whywestandout'
import Accordion from '@/components/Accordion'

const page = () => {
  const accordionItems = [
    {
      id: 1,
      title: 'How do I register for trade-only access?',
      content: 'Complete our quick registration process with your business details for verification.',
    },
    {
      id: 2,
      title: 'Do you offer bulk discounts?',
      content: 'Yes! Discounts vary by category and order size. Contact us for personalized quotes.',
    },
    {
      id: 3,
      title: 'Can I customize products in the Gift and Promotional Items category?',
      content: 'Absolutely! Provide your design or work with our team to create unique items.',
    },
    {
      id: 4,
      title: 'What are your shipping timelines?',
      content: 'Shipping timelines depend on the product and location. Expect 5–7 business days for standard orders.',
    },
    {
      id: 5,
      title: 'Is customer support available?',
      content: 'Yes, our team is here to assist via email or live chat during business hours.',
    },
  ];
  return (
    <div>
         <Nav />
         <Whoweare />
         <Whywestandout />
         <Accordion items={accordionItems} />
         <Footer />
    </div>
  )
}

export default page