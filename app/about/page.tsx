
"use client"
import { useRouter } from 'next/router'

import React from 'react'

export const metadata={
  title:"About page"
}

const About = () => {
  // const router = useRouter()
  // onClick={()=>router.push('../users')}
  return (
    <div>
      <button>Go to time</button>
      <h1>Abut</h1>
    </div>
  )
}

export default About
