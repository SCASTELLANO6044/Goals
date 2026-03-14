# 🎯 Goals

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-blue?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Auth_%26_DB-green?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

![Goals App Banner](file:///C:/Users/scast/.gemini/antigravity/brain/b1f9a6d6-d26b-4807-9bfb-f82bab6ee167/goals_app_banner_1773495348719.png)

## 🚀 Overview

**Goals** is a modern, full-stack goal-tracking application built with productivity and user experience at its core. Leveraging the power of **Next.js 15**, **Supabase**, and **Tailwind CSS 4**, it provides a seamless and high-performance platform for users to define, track, and achieve their personal and professional milestones.

## ✨ Key Features

-   🔐 **Robust Authentication**: Secure login, signup, and password reset flows powered by Supabase Auth (OAuth & Email/Password).
-   👤 **User Profiles**: Personalized user namespaces with dynamic profile routing (`/@username`).
-   🎨 **Premium UI/UX**: Built with **Shadcn UI** and **Tailwind CSS 4**, featuring a sleek, responsive design with dark mode support.
-   ⚡ **Server Actions**: High-performance data mutations and authentication handled via Next.js Server Actions.
-   🛠️ **Modern Tech Stack**: Utilizes the latest industry standards including React 19 and TypeScript.

## 🛠️ Technology Stack

| Category         | Technology                                                                                                                                                                                                                           |
| :--------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**    | [Next.js 15+](https://nextjs.org/) (App Router)                                                                                                                                                                                     |
| **Frontend**     | [React 19](https://react.dev/), [Tailwind CSS 4](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/)                                                                                                                     |
| **Backend/BaaS** | [Supabase](https://supabase.com/) (Auth, PostgreSQL)                                                                                                                                                                                 |
| **Icons**        | [Lucide React](https://lucide.dev/)                                                                                                                                                                                                  |
| **Styling**      | [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), [OKLCH Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch)                                                   |
| **Type Safety**  | [TypeScript](https://www.typescriptlang.org/)                                                                                                                                                                                        |

## 🏁 Getting Started

### Prerequisites

-   Node.js 20+
-   npm, pnpm, yarn, or bun
-   A Supabase Project

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/goals.git
    cd goals
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root directory and add your Supabase credentials:

    ```env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_supabase_anon_key
    SITE_URL=http://localhost:3000
    ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```text
├── app/              # Next.js App Router (Pages, Layouts, API)
├── components/       # Reusable UI components (Shadcn UI, Custom Blocks)
├── db/               # Database client configurations
├── lib/              # Shared utilities, Supabase client/middleware, Server Actions
├── public/           # Static assets
└── tsconfig.json     # TypeScript configuration
```

## 📄 License

This project is licensed under the MIT License.
