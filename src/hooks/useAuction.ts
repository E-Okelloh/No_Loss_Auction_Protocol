"use client"

import {
    useEffect,
    useState,
} from "react"

import {
    getAuction
} from "@/lib/contract"

export function useAuction() {

    const [auction, setAuction] =
        useState<any>(null)

    const [loading, setLoading] =
        useState(true)

    async function loadAuction() {

        try {

            const data =
                await getAuction()

            setAuction(data)

        } catch (err) {

            console.error(err)

        } finally {

            setLoading(false)
        }
    }

    useEffect(() => {

        loadAuction()

        const interval =
            setInterval(loadAuction, 5000)

        return () =>
            clearInterval(interval)

    }, [])

    return {
        auction,
        loading,
        refresh: loadAuction,
    }
}