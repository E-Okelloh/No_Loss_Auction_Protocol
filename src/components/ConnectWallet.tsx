"use client"

import { Wallet } from "lucide-react"

import {
    requestAccess,
} from "@stellar/freighter-api"

export default function ConnectWallet({
    setPublicKey,
}: {
    setPublicKey:
    (key: string) => void
}) {

    async function connectWallet() {

        console.log("CONNECT CLICKED")

        try {

            const result =
                await requestAccess()

            console.log(result)

            if ("error" in result) {

                alert(result.error)

                return
            }

            if (!result.address) {

                alert(
                    "No address returned"
                )

                return
            }

            setPublicKey(
                result.address
            )

            alert(
                "Wallet connected!"
            )

        } catch (err) {

            console.error(err)

            alert(
                "Connection failed"
            )
        }
    }

    return (

        <button

            type="button"

            onClick={() => {
                console.log("BUTTON FIRED")
                connectWallet()
            }}

            className="
        bg-indigo-600
        hover:bg-indigo-500
        transition-all
        px-5 py-3
        rounded-2xl
        font-semibold
        flex items-center
        gap-2
        relative z-50
      "
        >

            <Wallet size={18} />

            Connect Wallet

        </button>
    )
}