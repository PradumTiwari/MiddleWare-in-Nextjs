import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

let requestcount=0;

export function middleware(request:NextRequest){
    if(request.nextUrl.pathname.startsWith('/api')){
       return NextResponse.redirect(new URL('/signin',request.url));

    }

    if(request.nextUrl.pathname.startsWith('/dashboard')){
        return NextResponse.next();
    }
    
}

export const config={
    matcher:'/:path*',
}