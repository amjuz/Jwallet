

// interface AppbarProps {
//     label: string,
//     onSignIn: string,
//     onSignOut: string
// }

import { Button } from "./Button"

export function Appbar({ label, onSignIn, onSignOut, user }: {
    label: string,
    onSignIn: any,
    onSignOut: any,
    user?: {
        name?: string | null
    }
}){
    return(
        <div className="bg-slate-50 flex flex-col justify-center h-20 w-screen">
            <div className="bg-stone-50 flex flex-col justify-center h-20 w-screen">
                <div className="flex justify-between items-center">
                    <div className="text-4xl font-bold  ml-10 hover:">
                        {label}
                    </div>
                    <div className="">
                        <Button onClick={ user ? onSignOut : onSignIn }>{ user ? "Logout" : "Login" }</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}