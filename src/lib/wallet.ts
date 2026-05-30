"use client"

import {
    getAddress,
    isConnected,
} from "@stellar/freighter-api"

export async function connectWallet() {

    const connected =
        await isConnected()

    if (!connected.isConnected) {

        throw new Error(
            "Freighter wallet not installed"
        )
    }

    const address =
        await getAddress()

    return address.address
}