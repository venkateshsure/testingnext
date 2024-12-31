import Link from 'next/link'
import React from 'react'


const F2=()=>{
    return (
        <div>
            <h1>(.) Intercepted link from F2</h1>
            <button><Link href="/f1">Back to F1</Link></button>
            <button><Link href="/about">Go to About</Link></button>
        </div>
    )
}

export default F2