# Admin Template Dashboard (Next.js)

<p align="left">
  A stunning, feature-rich admin dashboard crafted with <strong>Shadcn UI</strong>, <strong>Next.js 16 (App Router)</strong>, and <strong>Tailwind CSS v4</strong>. Built with performance, accessibility, and modern application architecture in mind.
</p>

<p align="left">
  <strong>🔥 Live Demo:</strong> <a href="https://admin-template-one-rho.vercel.app/">https://admin-template-one-rho.vercel.app/</a>
</p>

## ✨ Features

- **🚀 Next.js 16**: Utilizing the latest App Router, React Server Components (RSC), and Turbopack for lightning-fast dev server performance.
- **🎨 Tailwind CSS v4**: Modern, utility-first styling configured with native CSS variables and `@theme` integrations.
- **🌙 Zero-Flash Night Shift**: A fully custom, blue-light filter to protect your eyes. Engineered with pre-hydration scripts to guarantee zero layout shift or flashes on page refresh!
- **🌗 Dynamic Theming**: Seamless Light/Dark mode toggling and live custom font selections.
- **📱 Fully Responsive**: Flawlessly adapts to any screen size, complete with a beautiful Collapsible Sidebar.
- **🧩 Shadcn UI**: Leveraging the best Radix UI primitives for an accessible, beautiful component library.
- **🔍 Command Menu**: Global search command palette built right in (`Ctrl+K` / `Cmd+K`).
- **📁 Bulletproof Architecture**: Clean, modular, and deeply integrated root-level folder structure prioritizing scale and maintainability.
- **📏 LTR Support**: Strict Left-to-Right layout optimizations.

<details>
<summary>🛠 Customized Shadcn Components (click to expand)</summary>

This project uses Shadcn UI components, but some have been slightly modified to fit the dashboard's specific layout requirements and design aesthetic.

If you want to update components using the Shadcn CLI (e.g., `npx shadcn@latest add <component>`), it is generally safe for non-customized components. For the listed customized ones, you may need to manually merge changes to preserve the project's layout modifications.

### Modified Components

- scroll-area
- sonner
- separator
- alert-dialog
- calendar
- command
- dialog
- dropdown-menu
- select
- table
- sheet
- sidebar
- switch

**Notes:**

- For implementation details, check the source files in `components/ui/`.
- All other Shadcn UI components in the project are standard and can be safely updated via the CLI.

</details>

## 💻 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **UI & Styling:** [Shadcn UI](https://ui.shadcn.com), [Tailwind CSS v4](https://tailwindcss.com/), & [Radix UI](https://www.radix-ui.com/)
- **Type Checking:** [TypeScript](https://www.typescriptlang.org/)
- **State Management:** React Context & Local Storage sync
- **Linting/Formatting:** [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
- **Icons:** [Lucide React](https://lucide.dev/icons/) & [Tabler Icons](https://tabler.io/icons)

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/SombathVibes/admin-template.git
```

Navigate into the project directory:

```bash
cd admin-template
```

Install the dependencies:

```bash
pnpm install
# or npm install
# or yarn install
```

Start the development server with Turbopack:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to check the [issues page](https://github.com/SombathVibes/admin-template/issues).

## 📝 Author

Crafted with 🤍 by [@SombathVibes](https://github.com/SombathVibes)
