# Hikaru Project

**Hikaru** is a web-based exam platform built to support modern learning and assessment for university students.  
It is developed using **React** for the frontend and **NestJS** for the backend, structured as a **monorepo** with **pnpm workspaces**.

## ✨ Key Features

- **Computer-Based Testing (CBT)** via web
- **AI-Powered Monitoring** during exams
- **Class, Question, and Schedule Management**
- **Modern UI** using React, Vite, and TailwindCSS
- **Robust API Backend** with NestJS and PostgreSQL

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Anifyuli/hikaru_project.git
   cd hikaru_project
   ```

2. Install all dependencies:

   ```bash
   pnpm install
   ```

## 🚀 Running the Project

To run both frontend and backend together:

```bash
pnpm dev
```

Or run them individually:

```bash
pnpm dev:web   # Start frontend
pnpm dev:api   # Start backend
```

## 🏗️ Building for Production

Build all apps:

```bash
pnpm build
```

Or build them separately:

```bash
pnpm build:web
pnpm build:api
```

## 🔥 Production Mode

### Frontend (Web)

Preview the frontend production build:

```bash
pnpm preview:web
```

### Backend (API)

Make sure the API is built:

```bash
pnpm build:api
```

Then start the server:

```bash
pnpm start:api
```

## 📂 Project Structure

```
hikaru/
├── apps/
│   ├── api/   # Backend (NestJS)
│   └── web/   # Frontend (React + Vite)
├── packages/  # (Optional) Shared packages
├── pnpm-workspace.yaml
├── package.json
└── README.md
```

## ✍️ Author

Created by [**Anifyuli**](https://github.com/Anifyuli)  
License: **MPL-2.0**

# 🚀 Project Insight

> "Hikaru" means **"to shine"** in Japanese.  
> This project aims to **shine a light** on the future of digital education.
