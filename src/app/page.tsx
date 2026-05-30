"use client"

import {
  useState,
} from "react"

import AuctionCard
  from "@/components/AuctionCard"

import ConnectWallet
  from "@/components/ConnectWallet"

export default function Home() {

  const [
    publicKey,
    setPublicKey,
  ] = useState("")

  return (

    <main className="
      min-h-screen
      max-w-7xl
      mx-auto
      px-6 py-12
    ">

      <div className="
        flex flex-col
        md:flex-row
        justify-between
        items-start
        md:items-center
        gap-6
      ">

        <div>

          <h1 className="
            text-6xl
            font-black
            bg-gradient-to-r
            from-indigo-400
            to-cyan-400
            text-transparent
            bg-clip-text
          ">
            Stellar Auction
          </h1>

          <p className="
            text-zinc-400
            mt-4
          ">
            No-loss decentralized auction protocol
          </p>

        </div>

        <ConnectWallet
          setPublicKey={setPublicKey}
        />

      </div>

      <div className="mt-16">

        {
          publicKey ? (

            <AuctionCard
              publicKey={publicKey}
            />

          ) : (

            <div className="
              text-zinc-400
              mt-10
            ">
              Connect wallet to continue
            </div>
          )
        }

      </div>

    </main>
  )
}