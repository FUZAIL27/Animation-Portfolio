# 🧠 Fuzail Ahmed — AI Document Intelligence Portfolio

A premium, cinematic, AI-themed personal portfolio built entirely on the frontend — no backend, no servers, no database. Every "AI" interaction is simulated using local mock data and frontend state, making it 100% static-hostable while still feeling like a real, high-end SaaS product.

> Built to showcase **Fuzail Ahmed** as a Full Stack Java Developer & AI Enthusiast.

---

## ✨ Highlights

- **Cinematic 3D Hero** — Three.js / React Three Fiber holographic avatar, particle universe, neural network mesh, mouse-follow lighting
- **Animated typing role rotator** (Full Stack Developer → Java Developer → AI Enthusiast)
- **Skill Galaxy** — floating animated skill orbs filterable by category
- **3D tilt project cards** — magnetic perspective hover effect
- **Experience timeline** with scroll-reveal animations
- **Simulated AI Document Platform**: Dashboard, Upload (with fake progress + AI analyzing stage), AI Chat (JARVIS-style conversational assistant with typing indicator & smart canned responses), Document Detail (Summary / Insights / Keywords / Quiz tabs), Analytics (Recharts: area, bar, line, pie)
- **Dark / Light theme toggle** with smooth CSS variable transitions
- **Fully responsive** — mobile, tablet, laptop, desktop, ultrawide
- **Lazy-loaded routes** via `React.lazy` + `Suspense` for fast initial paint

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Routing | React Router v6 |
| Styling | Tailwind CSS (custom theme tokens) |
| Animation | Framer Motion |
| 3D | Three.js, @react-three/fiber, @react-three/drei |
| Charts | Recharts |
| Icons | Lucide React |
| Notifications | react-hot-toast |
| Dates | date-fns |

**No backend. No Node/Express API. No MongoDB. No real authentication.** All "AI" responses, document data, and analytics are mock data living in `src/data/mockData.js` and `src/context/AppContext.jsx`.

---

## 📁 Project Structure

```
fuzail-portfolio/
├── public/
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar, DashSidebar, DashLayout
│   │   ├── sections/       # Hero, About, Experience, Skills, Projects, Education, Contact
│   │   ├── dashboard/      # StatCard, DocumentCard
│   │   └── three/          # ParticleField, FloatingAvatar (3D)
│   ├── context/
│   │   └── AppContext.jsx  # Global state: theme, docs, chat history, sidebar
│   ├── data/
│   │   └── mockData.js     # ALL mock data: profile, skills, experience, projects, docs, AI responses, analytics
│   ├── pages/
│   │   ├── Landing.jsx     # Portfolio homepage
│   │   ├── Dashboard.jsx   # AI platform dashboard
│   │   ├── Upload.jsx      # Drag & drop simulated upload + AI analyzing
│   │   ├── AiChat.jsx      # Conversational AI chat interface
│   │   ├── DocDetail.jsx   # Per-document Summary/Insights/Keywords/Quiz
│   │   └── Analytics.jsx   # Charts & metrics
│   ├── index.css           # Design tokens, glassmorphism, animations
│   └── main.jsx            # Router + lazy loading entry point
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# → opens http://localhost:3000

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🌐 Deployment Guide

This is a fully static site — deploy anywhere that serves static files.

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```
Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.

### Netlify
```bash
npm run build
# Drag the /dist folder into Netlify's deploy UI
```
Or connect your GitHub repo with build command `npm run build` and publish directory `dist`.

### GitHub Pages
```bash
npm run build
# Push /dist contents to a `gh-pages` branch, or use the `gh-pages` npm package
```

---

## 🎨 Customization

- **Profile info, skills, experience, projects, education** → edit `src/data/mockData.js`
- **Color theme** → edit CSS variables in `src/index.css` (`:root` and `.light`) and `tailwind.config.js` color tokens
- **AI chat responses** → edit `AI_RESPONSES` in `src/data/mockData.js`
- **Sample documents** → edit `DOCUMENTS` array in `src/data/mockData.js`

---

## 👤 Author

**Fuzail Ahmed**
Full Stack Developer · Java Developer · AI Enthusiast
📍 Chennai, India

- 📧 fuzailahmed.h@gmail.com
- 📱 +91 9840843264
- 💼 [LinkedIn](https://www.linkedin.com/in/fuzail-ahmed27/)
- 💻 [GitHub](https://github.com/FUZAIL27)

---

## 📄 License

This project is built as a personal portfolio piece. Feel free to reference the structure for learning purposes.
