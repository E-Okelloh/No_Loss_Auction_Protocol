"use client"

import {
    Contract,
    rpc,
    Networks,
    TransactionBuilder,
    BASE_FEE,
    nativeToScVal,
    scValToNative,
} from "@stellar/stellar-sdk"

import {
    signTransaction,
} from "@stellar/freighter-api"

const RPC_URL =
    process.env.NEXT_PUBLIC_RPC_URL!

const CONTRACT_ID =
    process.env.NEXT_PUBLIC_CONTRACT_ID!

export const server =
    new rpc.Server(RPC_URL)

export const contract =
    new Contract(CONTRACT_ID)

export async function invokeContract({
    publicKey,
    method,
    args = [],
}: {
    publicKey: string
    method: string
    args?: any[]
}) {

    const account =
        await server.getAccount(publicKey)

    let tx = new TransactionBuilder(account, {
        fee: BASE_FEE,
        networkPassphrase:
            Networks.TESTNET,
    })

        .addOperation(
            contract.call(
                method,
                ...args
            )
        )

        .setTimeout(300)
        .build()

    tx = await server.prepareTransaction(tx)

    const signed =
        await signTransaction(
            tx.toXDR(),
            {
                networkPassphrase:
                    Networks.TESTNET,
            }
        )

    const signedTx =
        TransactionBuilder
            .fromXDR(
                signed.signedTxXdr,
                Networks.TESTNET
            )

    return await server.sendTransaction(
        signedTx
    )
}

export async function getAuction() {

    const result =
        await server.simulateTransaction(

            new TransactionBuilder(
                await server.getAccount(
                    "GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWHF"
                ),
                {
                    fee: BASE_FEE,
                    networkPassphrase:
                        Networks.TESTNET,
                }
            )

                .addOperation(
                    contract.call("get_auction")
                )

                .setTimeout(300)
                .build()
        )

    // @ts-ignore
    return scValToNative(
        result.result?.retval
    )
}