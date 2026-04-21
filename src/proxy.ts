import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    const {pathname} = request.nextUrl
    // console.log(pathname,"myRequesttttttttttttttttttttttttttstttt")
    const token = await getToken({req:request})
    const isAuth=["/login","/register"].includes(pathname);
    if(token && isAuth ){
        return NextResponse.redirect(new URL('/products', request.url))
    }
    if(!token && !isAuth ){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next();
    
//   
}
 

 
export const config = {
  matcher: ["/login","/register","/","/products","/brands","/categories","/wish-list","/cart","/profile","/allorders"],
} 