"use client"

import { motion } from "framer-motion"

import Countdown from "react-countdown"

import {
    Clock3,
    Trophy,
    Coins,
    RefreshCcw,
    Gavel,
    Ban,
} from "lucide-react"

import {
    useAuction,
} from "@/hooks/useAuction"

import {
    invokeContract,
} from "@/lib/contract"

import {
    Address,
    nativeToScVal,
} from "@stellar/stellar-sdk"

import { toast } from "sonner"

export default function AuctionCard({
    publicKey,
}: {
    publicKey: string
}) {

    const {
        auction,
        loading,
        refresh,
    } = useAuction()

    if (loading) {

        return (
            <div className="
        text-center
        py-20
        text-zinc-400
      ">
                Loading auction...
            </div>
        )
    }

    if (!auction) {

        return (
            <div className="
        text-center
        py-20
        text-red-400
      ">
                No auction found
            </div>
        )
    }

    // PLACE BID

    async function placeBid() {

        try {

            const amount =
                prompt("Enter bid amount")

            if (!amount) return

            toast.loading("Submitting bid...")

            await invokeContract({

                publicKey,

                method: "bid",

                args: [

                    new Address(publicKey)
                        .toScVal(),

                    nativeToScVal(
                        Number(amount),
                        { type: "i128" }
                    ),
                ],
            })

            toast.dismiss()

            toast.success(
                "Bid placed successfully"
            )

            refresh()

        } catch (err) {

            console.error(err)

            toast.dismiss()

            toast.error("Bid failed")
        }
    }

    // CLAIM REFUND

    async function claimRefund() {

        try {

            toast.loading(
                "Claiming refund..."
            )

            await invokeContract({

                publicKey,

                method: "claim_refund",

                args: [

                    new Address(publicKey)
                        .toScVal(),
                ],
            })

            toast.dismiss()

            toast.success(
                "Refund claimed"
            )

        } catch (err) {

            console.error(err)

            toast.dismiss()

            toast.error(
                "Refund failed"
            )
        }
    }

    // FINALIZE

    async function finalizeAuction() {

        try {

            toast.loading(
                "Finalizing auction..."
            )

            await invokeContract({

                publicKey,

                method: "finalize",
            })

            toast.dismiss()

            toast.success(
                "Auction finalized"
            )

            refresh()

        } catch (err) {

            console.error(err)

            toast.dismiss()

            toast.error(
                "Finalize failed"
            )
        }
    }

    // CANCEL

    async function cancelAuction() {

        try {

            toast.loading(
                "Cancelling auction..."
            )

            await invokeContract({

                publicKey,

                method: "cancel",

                args: [

                    new Address(publicKey)
                        .toScVal(),
                ],
            })

            toast.dismiss()

            toast.success(
                "Auction cancelled"
            )

            refresh()

        } catch (err) {

            console.error(err)

            toast.dismiss()

            toast.error(
                "Cancel failed"
            )
        }
    }

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 30,
            }}

            animate={{
                opacity: 1,
                y: 0,
            }}

            className="
        bg-white/5
        border border-white/10
        backdrop-blur-xl
        rounded-3xl
        p-8
        shadow-2xl
      "
        >

            {/* HEADER */}

            <div className="
        flex justify-between
        items-start
      ">

                <div>

                    <h2 className="
            text-4xl
            font-black
          ">
                        {auction.item}
                    </h2>

                    <p className="
            text-zinc-400
            mt-2
          ">
                        Stellar Soroban Auction
                    </p>

                </div>

                <div className="
          px-4 py-2
          rounded-full
          bg-indigo-500/20
          text-indigo-300
        ">
                    {auction.active
                        ? "Active"
                        : "Ended"}
                </div>

            </div>

            {/* STATS */}

            <div className="
        grid md:grid-cols-3
        gap-6 mt-10
      ">

                {/* BID */}

                <div className="
          bg-black/30
          rounded-2xl
          p-5
        ">

                    <div className="
            flex items-center
            gap-2
            text-zinc-400
          ">
                        <Coins size={18} />
                        Highest Bid
                    </div>

                    <div className="
            text-4xl
            font-black
            mt-3
          ">
                        {auction.highest_bid}
                    </div>

                </div>

                {/* BIDDER */}

                <div className="
          bg-black/30
          rounded-2xl
          p-5
        ">

                    <div className="
            flex items-center
            gap-2
            text-zinc-400
          ">
                        <Trophy size={18} />
                        Highest Bidder
                    </div>

                    <div className="
            text-sm
            mt-3
            break-all
          ">
                        {
                            auction.highest_bidder
                            || "No bids"
                        }
                    </div>

                </div>

                {/* COUNTDOWN */}

                <div className="
          bg-black/30
          rounded-2xl
          p-5
        ">

                    <div className="
            flex items-center
            gap-2
            text-zinc-400
          ">
                        <Clock3 size={18} />
                        Time Remaining
                    </div>

                    <div className="
            text-3xl
            font-black
            mt-3
          ">

                        <Countdown
                            date={
                                Number(
                                    auction.end_time
                                ) * 1000
                            }
                        />

                    </div>

                </div>

            </div>

            {/* ACTIONS */}

            <div className="
        grid md:grid-cols-4
        gap-4
        mt-10
      ">

                {/* BID */}

                <button

                    onClick={placeBid}

                    className="
            bg-indigo-600
            hover:bg-indigo-500
            transition-all
            px-5 py-4
            rounded-2xl
            font-semibold
            flex items-center
            justify-center
            gap-2
          "
                >

                    <Gavel size={18} />

                    Place Bid

                </button>

                {/* REFUND */}

                <button

                    onClick={claimRefund}

                    className="
            bg-emerald-600
            hover:bg-emerald-500
            transition-all
            px-5 py-4
            rounded-2xl
            font-semibold
            flex items-center
            justify-center
            gap-2
          "
                >

                    <RefreshCcw size={18} />

                    Claim Refund

                </button>

                {/* FINALIZE */}

                <button

                    onClick={finalizeAuction}

                    className="
            bg-red-600
            hover:bg-red-500
            transition-all
            px-5 py-4
            rounded-2xl
            font-semibold
          "
                >

                    Finalize

                </button>

                {/* CANCEL */}

                <button

                    onClick={cancelAuction}

                    className="
            bg-zinc-700
            hover:bg-zinc-600
            transition-all
            px-5 py-4
            rounded-2xl
            font-semibold
            flex items-center
            justify-center
            gap-2
          "
                >

                    <Ban size={18} />

                    Cancel

                </button>

            </div>

        </motion.div>
    )
}