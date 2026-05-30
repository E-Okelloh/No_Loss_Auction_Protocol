"use client"

import {
    useState,
} from "react"

import {
    Gavel,
} from "lucide-react"

import {
    Address,
    nativeToScVal,
} from "@stellar/stellar-sdk"

import {
    invokeContract,
} from "@/lib/contract"

import {
    toast,
} from "sonner"

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

    async function placeBid() {

        try {

            if (!amount