

const Doc = async  ({params}:{params:Promise<{slug:string}>}) => {
    const slug = (await params).slug
    console.log("hi","======")
  return (
    <div>
        <h1>Doc page for slug</h1>
        <p>{slug}</p>
    </div>
  )
}

export default Doc