

import React from 'react'
import {AppHome} from "@/sections/Home"
import { AboutSection } from '@/sections/About/About'
import { TapeSection } from '@/sections/Tape/Tape'
import { Footer } from '@/sections/Footer/Footer'
const ProtfolioHome = () => {
  console.log("Portfolio Home")
  return (
    <div>

    <AppHome/>
    <TapeSection/>
    <AboutSection/>
    
    </div>
  )
}

export default ProtfolioHome