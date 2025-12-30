# [Backstage](https://backstage.io)

# Backstage IDP

This is your newly scaffolded Backstage App. Good Luck!

## 📋 Table of Contents

- [Prerequisites](#-prerequisites)
- [Scaffolding a New App](#-scaffolding-a-new-app)
- [Local Setup for Team Members](#-local-setup-for-team-members)
- [Configuration &amp; Security](#-configuration--security)

---

## 🛠 Prerequisites

Before you begin, ensure you have **Node.js (Active LTS)** installed. Backstage uses Yarn. Enable Corepack to ensure you have the correct version:

```bash
node --version — Install a latest version
corepack enable
```

## 👥 Scaffolding a New App

If you are initializing a brand new instance:

1. **Run:**

   ```
   npx @backstage/create-app@latest
   ```
2. **Follow the prompts:** Provide your app name .
3. **Navigate and start:** cd `<your-app-name>`

---

## 👥 Local Setup for Team Members

If you are joining the project and have just cloned this repository, follow these steps:

### 1. Clone the repo

**Bash**

```
git clone [https://github.com/ali509/backstage-idp.git](https://github.com/ali509/backstage-idp.git)
cd backstage-idp
```

### 2. Token & OAuth Creation

Every team member needs their own credentials for local development.

### A. Create a GitHub Personal Access Token (PAT)

1. Go to [GitHub Settings &gt; Tokens (Classic)](https://github.com/settings/tokens "null").
2. Click  **Generate new token (classic)** .
3. Select the **`repo`** and **`read:org`** scopes.
4. Copy the token immediately.

### B. Create a GitHub OAuth App

1. Go to [GitHub Settings &gt; OAuth Apps](https://github.com/settings/developers "null").
2. Click  **New OAuth App** .
3. **Application Name:** `Backstage Local - (Your Name)`
4. **Homepage URL:** `http://localhost:3000`
5. **Authorization callback URL:** `http://localhost:7007/api/auth/github/handler/frame`
6. Click  **Register application** .
7. Copy your **Client ID** and generate a  **Client Secret** .

### Export Secrets

Run this in your terminal before starting the app

```
export GITHUB_TOKEN=your_pat_token_here
export AUTH_GITHUB_CLIENT_ID=your_client_id_here
export AUTH_GITHUB_CLIENT_SECRET=your_client_secret_here
```

### 3. Install & Start

If you encounter permission issues with Yarn, enable Corepack:

```
# Install dependencies
yarn install

# Start the app
yarn start
```

> [!TIP]
> Once started, the site will launch at: **http://localhost:3000**

---

## ⚙️ Configuration & Security

To ensure everyone can use their own credentials, ensure your `app-config.yaml` (or `app-config.local.yaml`) uses environment variables. Ensure your `app-config.yaml` is configured to read these environment variables:

**YAML**

```
integrations:
  github:
    - host: github.com
      token: ${GITHUB_TOKEN}

auth:
  environment: development
  providers:
    github:
      development:
        clientId: ${AUTH_GITHUB_CLIENT_ID}
        clientSecret: ${AUTH_GITHUB_CLIENT_SECRET}integrations:
  github:
    - host: github.com
      token: ${GITHUB_TOKEN}
```
