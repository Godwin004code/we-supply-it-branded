import Blog from '@/components/Blog'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav/Nav'
import React from 'react'

const page = () => {
  return (
    <div>
        <Nav />
        <Blog />
        <Footer />
    </div>
  )
}

export default page