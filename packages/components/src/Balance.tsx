"use client"

import { useBalance } from '@repo/store/useBalanace'

export function BalanceCommon(){

    const balance = useBalance();
    return (
        <div className="">
            balance : {balance}
        </div>
    )
}