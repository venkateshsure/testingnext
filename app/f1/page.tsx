import Link from 'next/link'
import React from 'react'


const F1=()=>{
    return (
        <div>
            <h1>F1</h1>
            <button><Link href="/f1/f2">Go to F2</Link></button>
        </div>
    )
}

export default F1