'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function AuthLayout({children}: { children: React.ReactNode }) {
  const [input,setInput] = useState("")
  return (
      <div>
        <div>
          <input onChange={(e)=>setInput(e.target.value)} type="text" />
          <p><Link href="/login" >Login</Link></p>
          <p><Link href="/register" >Register</Link></p>
        </div>
        <main>
          {children}
        </main>
      </div>
  )
}