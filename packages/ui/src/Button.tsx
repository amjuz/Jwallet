"use client"

import { ReactNode } from "react"

interface ButtonProps {
    onClick: ()=> void;
    children: ReactNode;
}

export function Button({ onClick, children }: ButtonProps) {
    return(
        <div className="">
            <button onClick={onClick} className='mr-16 py-2 px-10 bg-green-900 text-fuchsia-50 text-2xl font-bold rounded-3xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...'>
                {children}
            </button>
        </div>
    )
}