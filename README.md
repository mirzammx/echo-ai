```text
  ______      _           
 |  ____|    | |          
 | |__   ___ | |__   ___  
 |  __| / __|| '_ \ / _ \ 
 | |___| (__ | | | | (_) |
 |______\___||_| |_|\___/ 
```
     

🎧 Echo

**Echo** is a self-hosted, multi-tenant AI-powered customer support platform that helps you automate, monitor, and scale customer interactions across chat and voice channels. It includes:

* A **Customer Interface** (embeddable chat widget and voice call handler) powered by a RAG-enabled AI Orchestration Service supporting top LLMs.
* An **Agent Dashboard** for support teams to monitor live sessions, manage tickets, review customer history, and seamlessly take over escalated conversations.
* A modular **Monorepo Architecture** powered by Turborepo and Convex for real-time backend synchronization, fast builds, and seamless deployments.

**Why this project:**
* Most AI support platforms are SaaS-only lock-ins, limiting your data privacy and control over which LLM providers you use.
* Support teams often lack immediate context when AI fails; Echo bridges this gap by triggering manual takeovers based on real-time emotional analysis. 
* Unlike platforms limited to text, Echo treats voice and text as first-class citizens with unified context and history.

### ✨ Key Features

* **Multi-LLM AI Orchestration:** Route queries through a RAG pipeline using your choice of model based on workspace configuration.
* **Omnichannel Chat & Voice:** Built-in integration processes inbound/outbound audio via speech-to-text, feeds it through the AI, and returns natural text-to-speech responses.
* **Smart Escalation & Sentiment Analysis:** Continuously evaluates user emotions in the background. High frustration scores automatically ping the Agent Dashboard for immediate human intervention.
* **Strict Multi-Tenancy:** Securely host multiple businesses or internal departments on a single instance. 
* **Real-Time Data Pipeline:** Built with Convex to ensure instant state synchronization across widgets, agent dashboards, and AI services.

### 📚 Documentation & Live Demo

🔗 **Live Deployment:** [https://echo-web-ten-gamma.vercel.app/](https://echo-web-ten-gamma.vercel.app/)

### 🗂️ Project Structure

This project uses a Turborepo monorepo structure managed by `pnpm`.

```text
.
├── apps/                       # Next.js applications (Agent Dashboard, Widget, etc.)
├── convex/                     # Real-time backend functions, mutations, and database schema
├── packages/                   # Shared UI components, config, and utility packages
├── .vscode/                    # Workspace editor configurations
├── .eslintrc.js                # ESLint configuration
├── commit_log.txt              # Project commit history
├── package.json                # Root package configurations
├── pnpm-lock.yaml              # PNPM dependency lockfile
├── pnpm-workspace.yaml         # PNPM workspace definition
├── tsconfig.json               # TypeScript base configuration
└── turbo.json                  # Turborepo build pipeline configuration
```

### 🔧 CLI Overview

The Echo administration CLI provides tools for server management, tenant provisioning, and system diagnostics:

**Instance Management:**
* `pnpm turbo run build` – Build all apps and packages in the monorepo.
* `pnpm turbo run dev` – Boot up the local development servers for all applications concurrently.
* `npx convex dev` – Start the Convex backend in development mode to sync real-time functions.

**Testing & Monitoring:**
* `pnpm turbo run lint` – Run linting checks across all workspaces.
* `pnpm test` – Run integration and unit tests.

### 📦 Installation

To run this project locally, ensure you have Node.js and `pnpm` installed.

```bash
# Clone the repository
git clone https://github.com/mirzammx/echo-ai.git
cd echo-ai

# Install dependencies across all workspaces
pnpm install

# Start the Convex development server
npx convex dev

# Start the frontend applications in a new terminal
pnpm dev
```

### 📄 License

This project is licensed under the MIT License.

### 👥 Authors

**Contributors:**
* Mohammed Hasan Ahmed ([@Haxee24](https://github.com/Haxee24))
* Gagan Handral ([@GaganHnd](https://github.com/GaganHnd))
* Mohammed Mirza ([@mirzammx](https://github.com/mirzammx))
* Danamma M H ([@DanammaHatti](https://github.com/DanammaHatti))

**Acknowledgments:**
* The open-source AI community
* Vercel & Convex for infrastructure and deployment capabilities
