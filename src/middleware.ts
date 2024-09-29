import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import AuthService from './services/authService'
 
export const config = {
    matcher: '/((?!_next/static|_next/image|sitemap.xml|favicon.ico|volleyace-ball.svg|volleyace-full.svg).*)',
} 

const publicRoutes = ['/login']

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    if(publicRoutes.includes(pathname)){
        return NextResponse.next()
    }

    const session = await AuthService.isSessionValid()
    if(!session){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}
 