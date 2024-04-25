"use client"

import { Appbar } from '@repo/ui/appbar'
import { signIn, signOut, useSession, } from 'next-auth/react'
import { useRouter } from 'next/navigation';

export default function AppbarClient(){
    const router = useRouter();
    const session = useSession() 
    // const session = useSession();
    return (
        <div className="">
            <Appbar onSignIn={signIn} onSignOut={async ()=>{ 
                await signOut();
                router.push('api/auth/signin')
            }} label={"Jwallet"} user={session.data?.user}/>
            {/* {JSON.stringify(session)} */}
        </div>
    )
} 