"use client"

import {
    connect,
    isConnected,
} from "@stellar/freighter-api"

export async function connectWallet() {

    const installed =
        await isConnected()

    if (!installed.isConnected) {
        throw new Error(
            "Freighter not installed"
        )
    }

    const result = await connect()

    return result.publicKey
}