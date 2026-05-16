# P12 Genesis NFT Airdrop Interface

![P12 Airdrop Interface](./public/screenshots/Screenshot%202026-05-16%20171822.png)

Web3 airdrop dashboard for P12 Genesis Soul-Bound Tokens (SBTs) with multi-wallet support, NFT gallery, and onchain engine integration.

[![Next.js](https://img.shields.io/badge/Next.js-13.5-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1-blue)](https://www.typescriptlang.org/)
[![Wagmi](https://img.shields.io/badge/Wagmi-1.4-orange)](https://wagmi.sh/)
[![License](https://img.shields.io/badge/License-AGPL--3.0-green)](LICENSE)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Integration](#integration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### Core Functionality
- 🔐 **Multi-Wallet Authentication** - MetaMask, Arcana, TokenPocket, Bitget, Particle Network, WalletConnect
- 🎨 **NFT Gallery** - Display SBTs with 5 rarity tiers
- 📊 **Leaderboard System** - Steam ranking & claim time sorting
- ⚡ **Onchain Engine** - GUI for developers to deploy assets and manage open economies
- 🎮 **Power Level System** - Claim P12 SBTs to activate user power level

### Additional Features
- 📱 Responsive design (mobile, tablet, desktop)
- 🌓 Dark/Light mode support
- 🔄 Real-time transaction status
- 👤 User profile management
- 🏆 Verified Gamer system
- 📈 Steam PL integration

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | Next.js 13.5 (Pages Router) |
| **Language** | TypeScript 5.1 |
| **State Management** | Recoil 0.7.7 |
| **Web3 Libraries** | ethers.js 5.7, wagmi 1.4, viem 1.10 |
| **Wallet Integration** | Particle Network, Arcana, WalletConnect |
| **Styling** | Tailwind CSS 3.3, classnames |
| **Data Fetching** | TanStack React Query 4.32 |
| **API/GraphQL** | Axios, GraphQL Request |
| **Forms** | React Hook Form 7.46 |
| **Tables** | TanStack React Table 8.9 |
| **Carousel** | Swiper 10.1 |
| **QR Code** | qrcode 1.5 |
| **Notifications** | React Toastify 9.1 |

---

## 📸 Screenshots

| Landing Page | Connect Wallet |
|--------------|----------------|
| ![Landing Page](./public/screenshots/Screenshot%202026-05-16%20171822.png) | ![Connect Wallet](./public/screenshots/Screenshot%202026-05-16%20172408.png) |

| Assets Page | Editor Page |
|-------------|-------------|
| ![Assets](./public/screenshots/Screenshot%202026-05-16%20172313.png) | ![Editor](./public/screenshots/Screenshot%202026-05-16%20172328.png) |

| Partners | Community |
|----------|-----------|
| ![Partners](./public/screenshots/Screenshot%202026-05-16%20172018.png) | ![Community](./public/screenshots/Screenshot%202026-05-16%20171849.png) |

---

## 🚀 Installation

### Prerequisites
- Node.js 16+
- npm or yarn
- MetaMask or any Web3 wallet

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/falender0r/p12-nft-airdrop.git
cd p12-nft-airdrop

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env.local

# 4. Run development server
npm run dev

# 5. Open browser
# http://localhost:3000
