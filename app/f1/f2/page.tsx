import React from 'react'
import Link from 'next/link'

const F2 = () => {
  return (
    <div>
      <h1>This is F2</h1>
      <button><Link href="/f1">Back to F1</Link></button>
    </div>
  )
}

export default F2
