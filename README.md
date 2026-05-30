# Personal Portfolio — Figma to Code

A responsive personal portfolio web app built by translating a custom Figma design into a fully functional React + TypeScript application. The project was created as a design-to-code practice exercise, focusing on layout precision, component structure, and real UI implementation from a Figma file.

## Features

- Resume-style layout with a two-column design — main content area and a project sidebar
- About section with personal introduction
- Skills section displaying technologies with icons
- Contact section
- Sidebar showcasing latest projects loaded dynamically from a JSON file
- Language switcher for multi-language support
- Responsive layout styled with Tailwind CSS

## Tech Stack

### Core

| [React 19](https://react.dev/) | UI component library |
|---|---|
| [TypeScript](https://www.typescriptlang.org/) | Typed JavaScript for safer, scalable code |
| [Vite](https://vitejs.dev/) | Build tool and dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |

### Libraries

| [Redux Toolkit](https://redux-toolkit.js.org/) | Global state management |
|---|---|
| [React Router DOM](https://reactrouter.com/) | Client-side routing and navigation |
| [Axios](https://axios-http.com/) | HTTP client for API requests |
| [react-icons](https://react-icons.github.io/react-icons/) | Icon components from popular icon sets |
| [react-loader-spinner](https://mhnpd.github.io/react-loader-spinner/) | Loading state animations |

### Dev Tools

| ESLint (flat config) | Code linting and quality |
|---|---|
| eslint-plugin-react-hooks | Hooks rules enforcement |
| eslint-plugin-react-refresh | Fast Refresh compatibility |
| @vitejs/plugin-react | Fast Refresh via Babel |
| PostCSS + Autoprefixer | CSS processing for Tailwind |

## Project Structure

```
figma-practice/
├── public/
│   └── projects.json         # Project data loaded dynamically into the sidebar
├── src/
│   ├── assets/               # Images and static files
│   ├── components/           # UI components (Header, Sidebar, Skills, About, Contact)
│   ├── constants/            # Static data (skills list, etc.)
│   ├── layout/               # Layout wrappers (Center, etc.)
│   ├── pages/                # Page components (Homepage, etc.)
│   ├── types/                # TypeScript type definitions
│   ├── App.tsx               # Root component with routing
│   ├── index.css             # Global styles
│   └── main.tsx              # Entry point
├── index.html                # HTML shell
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint flat configuration
└── package.json              # Dependencies and scripts
```

## Get Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SepideNorouzi/figma-practice.git
   ```

2. **Navigate into the project directory**
   ```bash
   cd figma-practice
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser** and visit `http://localhost:5173`

---

## Available Scripts

| `npm run dev` | Start the local development server with Hot Module Replacement |
|---|---|
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

---

## Design

This project was built from a custom Figma design as a practice exercise in translating visual designs into production-quality React code. The focus was on layout accuracy, component decomposition, and clean TypeScript structure.

## License

This project is open source and available under the [MIT License](LICENSE).
