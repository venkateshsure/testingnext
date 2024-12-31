import { comments } from "../data";
import { redirect } from 'next/navigation'

// export async function GET(_request:Request,context:{params:{id:string}}){
//     const {params} = context
//     const curComment = comments.find(e => e.id === parseInt(params.id))
//     // if (comments.length<Number(params.id)){
//     //     redirect("/comments")
//     // }   
//     return Response.json(curComment)
// }


export async function PATCH(request:Request,context:{params:{id:string}}){
    const body = await request.json();
    const commentId = comments.findIndex(e=>e.id===parseInt(context.params.id))
    if(commentId===-1){
        return new Response("comment not found");
    }
    comments[commentId].name = body.name
    return Response.json(comments[commentId]);
}

export async function DELETE(_request:Request,{params}:{params:{id:string}}){
    const {id} = params;
    const deletedItemIndex = comments.findIndex(each=>each.id===parseInt(id));
    const deletedItem = comments[deletedItemIndex];
    if (deletedItemIndex===-1){
        return Response.json({error:"Comment not found"});
        //return new Response.text("comment not found");
    }
    comments.splice(deletedItemIndex,1);
    return Response.json(deletedItem);
}