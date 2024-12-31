

const Product = async ()=>{
     await new Promise((resolve)=>setTimeout(resolve,2000))
    return (<div><p>Component2</p></div>)
}

export default Product