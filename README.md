# Stellar No-Loss Auction Protocol

A decentralized no-loss auction system built on Stellar Soroban using Rust smart contracts and a modern Next.js frontend. Bid with confidence knowing your funds are secure until you're outbid.

## 🚀 Features

- ✅ Create auctions with custom parameters
- ✅ Place bids using SEP-41 tokens
- ✅ Track highest bidder in real-time
- ✅ Automatic refunds for previous bidders
- ✅ Finalize auctions after deadline
- ✅ Cancel auctions with no bids
- ✅ Freighter wallet integration
- ✅ Full Soroban smart contract integration
- ✅ Responsive modern UI with TailwindCSS

## 📋 Table of Contents

- [Smart Contract](#smart-contract)
- [Frontend](#frontend)
- [Project Structure](#project-structure)
- [Local Setup](#local-setup)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

---

## 🔗 Smart Contract

**Built with:**
- Rust
- Soroban SDK
- Stellar Testnet

**Contract Details:**

| Property | Value |
|----------|-------|
| **Contract ID** | `CC74GWYM63GSAWBD36TRIEJU62KVEST3TYZTN3MS35BEOYUYWEB7F7TV` |
| **Network** | Stellar Testnet |
| **Explorer** | [View on Stellar Lab](https://lab.stellar.org/r/testnet/contract/CC74GWYM63GSAWBD36TRIEJU62KVEST3TYZTN3MS35BEOYUYWEB7F7TV) |

---

## 🎨 Frontend

**Built with:**
- Next.js 16
- TailwindCSS
- TypeScript
- Freighter Wallet SDK
- Stellar JS SDK

---

## 📁 Project Structure

```
No_Loss_Auction_Protocol/
├── contract/                          # Smart contract directory
│   ├── src/                          # Rust source files
│   ├── Cargo.toml                    # Rust dependencies
│   └── target/wasm32-unknown-unknown/ # Compiled WASM binaries
│
└── frontend/                          # Next.js frontend
    ├── src/
    │   ├── components/               # React components
    │   ├── pages/                    # Next.js pages
    │   └── utils/                    # Utility functions
    ├── public/                       # Static assets
    ├── package.json                  # Node dependencies
    └── tailwind.config.ts            # TailwindCSS config
```

---

## 🛠️ Local Setup

### Prerequisites

- **Rust** & **Cargo** (for smart contract)
- **Node.js** 18+ (for frontend)
- **Freighter Wallet** browser extension

### Smart Contract Setup

1. Navigate to the contract directory:
```bash
cd contract
```

2. Build the WASM binary:
```bash
cargo build --target wasm32-unknown-unknown --release
```

3. Deploy to Stellar Testnet:
```bash
stellar contract deploy \
  --wasm target/wasm32-unknown-unknown/release/auction.wasm \
  --source <your-account-name> \
  --network testnet
```

> **Note:** Replace `<your-account-name>` with your Stellar account alias configured in Freighter.

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

---

## 🔐 Environment Variables

Create a `.env.local` file in the `frontend/` directory:

```env
# Smart contract deployed on Stellar Testnet
NEXT_PUBLIC_CONTRACT_ID=CC74GWYM63GSAWBD36TRIEJU62KVEST3TYZTN3MS35BEOYUYWEB7F7TV

# Soroban RPC endpoint
NEXT_PUBLIC_RPC_URL=https://soroban-testnet.stellar.org
```

---

## 🚢 Deployment

### Frontend

The frontend is deployed and hosted on **Vercel** with automatic deployments from the main branch.

**Deployment URL:** [View Live](https://vercel.com) *(Add your actual Vercel URL)*

### Smart Contract

To deploy a new version of the smart contract:

1. Update and test your Rust code
2. Build the WASM binary
3. Deploy using the `stellar contract deploy` command
4. Update the `NEXT_PUBLIC_CONTRACT_ID` in frontend `.env.local`
5. Redeploy the frontend

---

## 📝 How It Works

1. **Create Auction:** An auction creator sets a deadline and initial parameters
2. **Place Bid:** Users bid using SEP-41 tokens through their Freighter wallet
3. **Track Status:** The contract tracks the highest bidder in real-time
4. **Automatic Refunds:** When outbid, your tokens are automatically refunded
5. **Finalize:** After the deadline, the highest bidder wins the auction
6. **Cancel:** Auctions with no bids can be cancelled by the creator

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👤 Author

**Built by [Okelloh](https://github.com/E-Okelloh)**

For questions or support, please open an issue on GitHub.

---

## 🔗 Resources

- [Stellar Documentation](https://developers.stellar.org/)
- [Soroban Smart Contracts](https://developers.stellar.org/soroban)
- [SEP-41 Token Standard](https://github.com/stellar/stellar-protocol/blob/master/core/cap-0041.md)
- [Freighter Wallet](https://www.freighter.app/)
