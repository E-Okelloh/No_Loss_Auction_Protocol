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

- [Features](#-features)
- [Smart Contract](#-smart-contract)
- [Frontend](#-frontend)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Smart Contract Setup](#smart-contract-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#-environment-variables)
- [How It Works](#-how-it-works)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Troubleshooting](#-troubleshooting)
- [Resources](#-resources)
- [License](#-license)

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

**Key Functions:**
- `create_auction(deadline, min_bid, asset)` - Initialize a new auction
- `place_bid(auction_id, amount)` - Submit a bid with automatic refunds
- `finalize_auction(auction_id)` - Close auction and transfer to winner
- `cancel_auction(auction_id)` - Cancel if no bids placed

---

## 🎨 Frontend

**Built with:**
- Next.js 16
- TailwindCSS
- TypeScript
- Freighter Wallet SDK
- Stellar JS SDK

**Key Pages:**
- Dashboard - View active and past auctions
- Create Auction - Set up new auctions
- Auction Details - Bid on specific auctions
- My Bids - Track your bidding history

---

## 📁 Project Structure

```
No_Loss_Auction_Protocol/
├── contract/                          # Smart contract directory
│   ├── src/                          # Rust source files
│   │   ├── lib.rs                    # Main contract logic
│   │   └── storage.rs                # State management
│   ├── Cargo.toml                    # Rust dependencies
│   └── target/wasm32-unknown-unknown/ # Compiled WASM binaries
│
├── frontend/                          # Next.js frontend
│   ├── src/
│   │   ├── components/               # React components
│   │   │   ├── AuctionCard.tsx       # Auction display component
│   │   │   ├── BidForm.tsx           # Bidding interface
│   │   │   └── WalletConnect.tsx     # Freighter integration
│   │   ├── pages/                    # Next.js pages
│   │   ├── utils/                    # Utility functions
│   │   │   ├── stellar.ts            # Stellar/Soroban utilities
│   │   │   └── contract.ts           # Contract interaction helpers
│   │   └── styles/                   # Global styles
│   ├── public/                       # Static assets
│   ├── package.json                  # Node dependencies
│   ├── tailwind.config.ts            # TailwindCSS config
│   └── next.config.js                # Next.js configuration
│
├── LICENSE
├── README.md
└── .gitignore
```

---

## 🛠️ Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Rust** 1.70+ & **Cargo** - [Install Rust](https://rustup.rs/)
- **Node.js** 18+ - [Download Node.js](https://nodejs.org/)
- **Freighter Wallet** - [Browser Extension](https://www.freighter.app/)
- **Stellar CLI** - [Installation Guide](https://developers.stellar.org/docs/tools/stellar-cli)

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

4. Save your contract ID from the deployment output

> **Note:** Replace `<your-account-name>` with your Stellar account alias configured in Freighter.

**First time deploying?**
- Create a Stellar testnet account at [Stellar Lab](https://lab.stellar.org/)
- Get testnet XLM from the [Friendbot faucet](https://developers.stellar.org/docs/basics/testnet-details#friendbot)

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file (see [Environment Variables](#-environment-variables))

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 🔐 Environment Variables

Create a `.env.local` file in the `frontend/` directory:

```env
# Smart contract deployed on Stellar Testnet
NEXT_PUBLIC_CONTRACT_ID=CC74GWYM63GSAWBD36TRIEJU62KVEST3TYZTN3MS35BEOYUYWEB7F7TV

# Soroban RPC endpoint
NEXT_PUBLIC_RPC_URL=https://soroban-testnet.stellar.org

# Optional: For Vercel deployment
NEXT_PUBLIC_NETWORK=testnet
```

> ⚠️ **Important:** Never commit `.env.local` to version control. Add it to `.gitignore`.

---

## 📝 How It Works

```
User Journey:
1. Connect Freighter Wallet → 2. View Active Auctions → 3. Place Bid
   ↓
4. Tokens Locked (Secure) → 5. Get Outbid? → 6. Automatic Refund
   ↓
7. Win Auction → 8. Claim Prize
```

### Detailed Flow

1. **Create Auction**
   - Auction creator sets deadline, minimum bid, and accepted token
   - Contract stores auction state on Stellar blockchain

2. **Place Bid**
   - Users submit bids through Freighter wallet
   - Previous highest bidder's tokens automatically refunded
   - New bid becomes highest bid

3. **Track Status**
   - Real-time UI updates show current highest bidder
   - Countdown timer shows time remaining
   - All bid history is transparent on-chain

4. **Automatic Refunds**
   - When outbid, your tokens are instantly returned
   - No manual claiming required
   - Safe and secure

5. **Finalize**
   - After deadline passes, creator finalizes auction
   - Highest bidder receives auction item
   - Auction creator receives winning bid amount

6. **Cancel**
   - Auctions with zero bids can be cancelled
   - No tokens are locked if not bid on

---

## 🚢 Deployment

### Frontend on Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and create a new project
3. Select the GitHub repository
4. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_CONTRACT_ID`
   - `NEXT_PUBLIC_RPC_URL`
5. Deploy automatically on each main branch push

**Live URL:** *(Add your actual Vercel deployment URL)*

### Smart Contract Updates

To deploy a new version:

1. Update your Rust code in `contract/src/`
2. Test locally:
   ```bash
   cd contract
   cargo test
   ```
3. Build the WASM binary:
   ```bash
   cargo build --target wasm32-unknown-unknown --release
   ```
4. Deploy to testnet:
   ```bash
   stellar contract deploy \
     --wasm target/wasm32-unknown-unknown/release/auction.wasm \
     --source <your-account-name> \
     --network testnet
   ```
5. Update `NEXT_PUBLIC_CONTRACT_ID` in `.env.local`
6. Redeploy the frontend

---

## 🐛 Troubleshooting

### Common Issues

**Q: "Contract not found" error**
- Verify `NEXT_PUBLIC_CONTRACT_ID` matches your deployed contract
- Check that you're using the correct network (testnet)

**Q: Freighter wallet not connecting**
- Ensure Freighter browser extension is installed
- Check that you're on Stellar Testnet in Freighter settings
- Try refreshing the page

**Q: Transaction fails with "Insufficient balance"**
- You need XLM to pay transaction fees
- Get free testnet XLM from [Friendbot](https://developers.stellar.org/docs/basics/testnet-details#friendbot)

**Q: Bid transaction hangs**
- Check your internet connection
- Verify the Soroban RPC endpoint is accessible
- Try again in a few moments (network may be congested)

**Q: npm install fails**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Try `npm cache clean --force` if it still fails

### Getting Help

- Check [Stellar Developers Docs](https://developers.stellar.org/)
- Review [Soroban examples](https://developers.stellar.org/docs/learn/examples)
- Open an [issue on GitHub](https://github.com/E-Okelloh/No_Loss_Auction_Protocol/issues)

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes:
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push** to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

### Development Guidelines

- Write clear commit messages
- Include tests for new features
- Update README for significant changes
- Follow Rust and TypeScript best practices
- Test on testnet before submitting PR

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Built by [Okelloh](https://github.com/E-Okelloh)**

For questions or support, please:
- 📧 Open an [issue on GitHub](https://github.com/E-Okelloh/No_Loss_Auction_Protocol/issues)
- 💬 Start a [discussion](https://github.com/E-Okelloh/No_Loss_Auction_Protocol/discussions)

---

## 🔗 Resources

- [Stellar Documentation](https://developers.stellar.org/)
- [Soroban Smart Contracts](https://developers.stellar.org/docs/learn/stellar-smart-contracts)
- [SEP-41 Token Standard](https://github.com/stellar/stellar-protocol/blob/master/core/cap-0041.md)
- [Freighter Wallet Docs](https://www.freighter.app/docs/)
- [Stellar Testnet Info](https://developers.stellar.org/docs/basics/testnet-details)
- [Soroban Examples](https://developers.stellar.org/docs/learn/examples)

---

**Last Updated:** June 2026 | **Status:** Active Development
