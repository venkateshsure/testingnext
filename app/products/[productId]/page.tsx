import React from 'react'

const EachProduct = ({params,}:{params:{productId : string}}) => {
  return (
    <div>
      <h1>The product with {params.productId}</h1>
    </div>
  )
}

export default EachProduct
