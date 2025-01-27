import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let requestcount=0;

export function middleware(request:NextRequest){
    requestcount++;
    console.log("Number of request is"+requestcount);
    ;
    return NextResponse.next();
    
}

export const config={
    matcher:'/:path*',
}