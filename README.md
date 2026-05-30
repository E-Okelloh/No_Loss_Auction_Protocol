# Stellar No-Loss Auction Protocol

A decentralized no-loss auction system built on Stellar Soroban using Rust smart contracts and a modern Next.js frontend.

## Features

- Create auction
- Place bids using SEP-41 token
- Track highest bidder
- Refund previous highest bidder
- Finalize auction after deadline
- Cancel auction if no bids exist
- Freighter wallet integration
- Soroban smart contract integration
- Responsive modern UI

---

## Smart Contract

Built with:

- Rust
- Soroban SDK
- Stellar Testnet

### Contract Deployment

Contract ID:

CC74GWYM63GSAWBD36TRIEJU62KVEST3TYZTN3MS35BEOYUYWEB7F7TV

Explorer:

https://lab.stellar.org/r/testnet/contract/CC74GWYM63GSAWBD36TRIEJU62KVEST3TYZTN3MS35BEOYUYWEB7F7TV

---

## Frontend

Built with:

- Next.js 16
- TailwindCSS
- TypeScript
- Freighter Wallet
- Stellar SDK

---

## Project Structure

\`\`\`
No_Loss_Auction_Protocol/
├── contract/
│   ├── src/
│   ├── Cargo.toml
│   └── ...
│
└── frontend/
    ├── src/
    ├── package.json
    └── ...
\`\`\`

---

## Local Setup

### Smart Contract

\`\`\`bash
cd contract

cargo build --target wasm32-unknown-unknown --release
\`\`\`

Deploy:

\`\`\`bash
stellar contract deploy \
--wasm target/wasm32-unknown-unknown/release/auction.wasm \
--source Juliet \
--network testnet
\`\`\`

---

### Frontend

\`\`\`bash
cd frontend

npm install

npm run dev
\`\`\`

---

## Environment Variables

Create:

\`\`\`
frontend/.env.local
\`\`\`

Add:

\`\`\`env
NEXT_PUBLIC_CONTRACT_ID=CC74GWYM63GSAWBD36TRIEJU62KVEST3TYZTN3MS35BEOYUYWEB7F7TV

NEXT_PUBLIC_RPC_URL=https://soroban-testnet.stellar.org
\`\`\`

---

## Deployment

Frontend deployed using Vercel.

---

## Author

Built by Okelloh
