// import { openai } from '@ai-sdk/openai'
// import { StreamingTextResponse, streamText } from 'ai'
 
// export async function POST(req: Request) {
//   const { messages } = await req.json()
//   const result = await streamText({
//     model: openai('gpt-4-turbo'),
//     messages,
//   })
 
//   return new StreamingTextResponse(result.toAIStream())
// }

import { type NextRequest } from 'next/server'
import { comments } from './data'


export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    console.log("=====================================",searchParams,"===============================")
    const query =  searchParams.get('query')
    console.log("=====================================",query,"===============================")
    const filterComment = query  ? comments.filter(e=>e.id===Number(query)) :comments;
    return Response.json(filterComment);}