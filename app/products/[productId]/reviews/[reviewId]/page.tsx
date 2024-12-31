import React from 'react'

const EachReview = ({params}:{params:{productId:string,reviewId:string}}) => {
  return (
    <div>
      <h1>The review of {params.reviewId} of product {params.productId}</h1>
    </div>
  )
}

export default EachReview
