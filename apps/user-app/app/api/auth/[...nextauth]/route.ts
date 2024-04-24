import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";
import NextAuth from "next-auth";


const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;


// DIFFERENT WAYS OF CATCHING ALL ROUTES

/** export function GET (req: NextRequest, { params }: any)
 /** export function GET (req: NextRequest, { params: {nextauth} }: any)
  /** export function GET (req: NextRequest, { params: {nextauth} }: { params : { nextauth: string[] || number[] }
   * })
   * 
    */


// export function GET (req: NextRequest, args: any){
//     console.log(args.params.nextauth);
//     return NextResponse.json({
//         msg: "hey there"
//     })
// }

// export function POST(){
//     return NextResponse.json({
//         msg: "hey there"
//     })
// }