import { comments} from '../data'
import { cookies } from 'next/headers'
import { type NextRequest } from 'next/server';
import { headers } from 'next/headers';

export async function GET(request:NextRequest){
  // const cookieStore = await cookies();
//    cookieStore.set("login","venkatesh")
    //const login = cookieStore.get("login")
    //(await cookies()).delete("login")
     //console.log("============",login,"===========");
    //  const login = request.cookies.get("login")
    //  const requestHeaders = new Headers(request.headers)
    //  return Response.json(requestHeaders)
        // const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    // const data = await response.json();
    // console.log("=====================================",data,"===============================")
    // return Response.json(data);

    const headersList = await headers()
    const referer = headersList.get('referer')
   
    return new Response('Hello, Next.js!', {
      status:200,
      headers:{
        
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
    })
}

export async function POST(request:Request){
    const cookieStore = await cookies();
   // cookieStore.set("auth","venky")
     (await cookies()).delete("auth")
   const req = await request.json();
    
    const newcomment= {
        id:comments.length + 1,
        name:req.name
    }
    comments.push(newcomment)
    return new Response(JSON.stringify(newcomment),{
        headers:{
            'content-type':'application/json',
             "Set-Cookie":'auth=venky'
        },
        status:201,
    });
}
