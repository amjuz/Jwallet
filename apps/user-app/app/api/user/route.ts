import { getServerSession } from "next-auth"
import { useSession } from "next-auth/react"
import { NextResponse } from "next/server"
import { authOptions } from "../../lib/auth"


export async function GET() {
    const session = await getServerSession(authOptions)
    return NextResponse.json({
        session
    })
}