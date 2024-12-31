
import {type NextRequest ,NextResponse} from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("==============================request=======",request,request.cookies,"===============================")
  
//   if(request.nextUrl.pathname==="/about"){
  return NextResponse.redirect(new URL('/comments/api', request.url)) //chnages the path to the request.url
  // return NextResponse.rewrite(new URL('/time', request.url)) // not chnages to the requested url
//   }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/about'],
}