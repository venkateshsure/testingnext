import React from 'react'


type Product={
  id:"string",
  title:"string",
  views:number
}

const Products = async () => {
  const response = await fetch("http://localhost:3001/posts", {
    next:{
      revalidate: 10,
    }
  })
  const data = await response.json()

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {
        data.map((e:Product)=>(
          <li key={e.id}>
            <p>{e.views} : {e.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Products
