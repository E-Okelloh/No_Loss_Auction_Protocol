"use client"

import { Wallet } from "lucide-react"

import {
    connectWallet,
} from "@/lib/wallet"

export default function ConnectWallet({
    setPublicKey,
}: {
    setPublicKey:
    (key: string) => void
}) {

    async function handleConnect() {

        try {

            const publicKey =
                await connectWallet()

            setPublicKey(publicKey)

        } catch (error) {

            console.error(error)

            alert(
                "Freighter wallet not found"
            )
        }
    }

    return (

        <button
            onClick={handleConnect}
            className="
                bg-indigo-600
                hover:bg-indigo-500
                px-5 py-3
                rounded-2xl
                font-semibold
                flex items-center
                gap-2
                transition-all
            "
        >

            <Wallet size={18} />

            Connect Wallet

        </button>
    )
}