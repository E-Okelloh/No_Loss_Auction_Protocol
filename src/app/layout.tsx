import type { Metadata } from "next"

import {
  Geist,
  Geist_Mono,
} from "next/font/google"

import "./globals.css"

import { Toaster } from "sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Stellar No-Loss Auction",
  description:
    "Decentralized no-loss auction protocol built on Stellar Soroban",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (

    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        dark
      `}
    >

      <body
        className="
          min-h-screen
          bg-[#020617]
          text-white
          antialiased
          overflow-x-hidden
        "
      >

        {/* Background Glow Effects */}

        <div className="
          fixed
          top-0
          left-0
          w-full
          h-full
          -z-10
          overflow-hidden
        ">

          <div className="
            absolute
            top-[-200px]
            left-[-100px]
            w-[500px]
            h-[500px]
            bg-indigo-500/20
            blur-3xl
            rounded-full
          " />

          <div className="
            absolute
            bottom-[-200px]
            right-[-100px]
            w-[500px]
            h-[500px]
            bg-cyan-500/20
            blur-3xl
            rounded-full
          " />

        </div>

        {/* Main App */}

        <main className="flex-1">
          {children}
        </main>

        {/* Toast Notifications */}

        <Toaster
          position="top-right"
          richColors
          closeButton
        />

      </body>

    </html>
  )
}