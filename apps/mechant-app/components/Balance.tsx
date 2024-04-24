"use client"

import { useBalance } from '@repo/store/useBalanace'

export function Balance(){

    const balance = useBalance();
    return(
        <div className="">
            balance: {balance}
        </div>
    )
}