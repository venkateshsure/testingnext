

const Doc = async  ({params} : {params:Promise<{slug: string[]}>}) => {
    
    const slugParams = (await params).slug
    console.log("---------------------------------",slugParams,"hhh")
    
  return (
    <div>
        <h1>Doc page for slug</h1>
        {
             slugParams.length==4?(<div><h1>viewing doc for  {slugParams[0]} in {slugParams[1]} and {slugParams[2]} in {slugParams[3]}</h1></div>):(
                <div>
                    <h1>viewing doc for blog {slugParams[0]} {slugParams[1]} {slugParams[2]}</h1>
                </div>
            )
        }
    </div>
  )
}

export default Doc