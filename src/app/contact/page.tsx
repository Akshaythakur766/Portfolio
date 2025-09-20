
import ContactForm from '@/sections/ContactForm/page'
import { Footer } from '@/sections/Footer/Footer'
import { Header } from '@/sections/Header/Header'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default page