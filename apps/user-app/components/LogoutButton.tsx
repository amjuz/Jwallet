"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export function LogoutButton() {
    const session = useSession();
    return (
        <div className="border w-max bg-red-400 px-5 rounded-xl ">
            <button onClick={() => {
                signIn();
            }}>Login</button><hr />
            <button onClick={() => {
                signOut();
            }}>logout</button><hr />
            client component: {JSON.stringify(session)}

        </div>
    )
}

