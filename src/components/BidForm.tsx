"use client"

import { useState } from "react"

import { Gavel } from "lucide-react"

import {
    Address,
    nativeToScVal,
} from "@stellar/stellar-sdk"

import {
    invokeContract,
} from "@/lib/contract"

import { toast } from "sonner"

export default function BidForm({
    publicKey,
    refresh,
}: {
    publicKey: string
    refresh: () => void
}) {

    const [amount, setAmount] =
        useState("")

    const [loading, setLoading] =
        useState(false)

    async function placeBid(): Promise<void> {

        try {

            if (!amount || amount === "0") {

                toast.error(
                    "Enter valid amount"
                )

                return
            }

            setLoading(true)

            const addressObj =
                new Address(publicKey)

            const amountScVal =
                nativeToScVal(
                    BigInt(amount),
                    {
                        type: "i128",
                    },
                )

            await invokeContract({
                publicKey,
                method: "place_bid",
                args: [
                    addressObj.toScVal(),
                    amountScVal,
                ],
            })

            toast.success(
                "Bid placed!"
            )

            setAmount("")

            refresh()

        } catch (error) {

            console.error(error)

            toast.error(
                "Bid failed"
            )

        } finally {

            setLoading(false)

        }

    }

    return (

        <form
            onSubmit={(e) => {
                e.preventDefault()
                placeBid()
            }}
            className="space-y-4"
        >

            <div>

                <label
                    htmlFor="amount"
                    className="
            block text-sm
            font-medium
            text-zinc-300
          "
                >
                    Bid Amount
                </label>

                <input
                    id="amount"
                    type="number"
                    step="1"
                    min="1"
                    placeholder="Enter bid"
                    value={amount}
                    onChange={(e) =>
                        setAmount(
                            e.target.value
                        )
                    }
                    className="
            mt-2
            w-full
            rounded-xl
            border border-zinc-700
            bg-zinc-900
            px-4 py-3
            text-white
            outline-none
            focus:ring-2
            focus:ring-indigo-500
          "
                />

            </div>

            <button
                type="submit"
                disabled={loading}
                className="
          w-full
          bg-indigo-600
          hover:bg-indigo-500
          disabled:opacity-50
          text-white
          py-3
          rounded-xl
          font-semibold
          flex items-center
          justify-center
          gap-2
        "
            >

                <Gavel size={18} />

                {
                    loading
                        ? "Placing Bid..."
                        : "Place Bid"
                }

            </button>

        </form>
    )
}