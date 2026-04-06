# 🚀 React Launchpad

<p align="center">
  <b>⚡ Production-ready React boilerplate for scalable frontend apps</b>
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/React-18-blue?logo=react" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Vite-fast-purple?logo=vite" /></a>
  <a href="#"><img src="https://img.shields.io/badge/TailwindCSS-utility-blue?logo=tailwindcss" /></a>
  <a href="#"><img src="https://img.shields.io/badge/React%20Query-server--state-red" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Zustand-state-black" /></a>
  <a href="#"><img src="https://img.shields.io/badge/license-MIT-green" /></a>
  <a href="#"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen" /></a>
</p>

---

## ✨ Why React Launchpad?

Stop setting up the same configs again and again.

**React Launchpad v3** gives you a clean, scalable foundation with:

* ⚡ Lightning-fast setup (Vite)
* 🧠 Smart state management (Zustand)
* 🌐 API-ready architecture (Axios + React Query)
* 🎨 Rapid UI development (Tailwind CSS)
* 📦 Production-ready folder structure

---

## 🚀 Features

* ⚡ **Vite** — blazing fast dev environment
* 🎨 **Tailwind CSS** — utility-first styling
* 🧭 **React Router** — routing setup
* 🧠 **Zustand** — lightweight global state
* 🌐 **Axios** — centralized API layer
* 🔄 **React Query** — server state & caching
* 📁 **Scalable architecture**
* 🔐 **Environment-based configuration**

---

## 🏗️ Project Structure

```bash
src/
│
├── assets/            # Static files
├── components/        # Reusable UI components
├── layouts/           # Layout wrappers
├── pages/             # Route pages
├── hooks/             # Custom hooks
├── store/             # Zustand store
├── services/          # API & external services
├── providers/         # Context providers
├── routes/            # App routing
│   └── AppRoutes.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the repo

```bash
git clone  https://github.com/uiatabhishek/react-launchpad.git
cd react-launchpad
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Run development server

```bash
npm run dev
```

---

## 🌍 Environment Variables

Create a `.env` file:

```env
VITE_API_BASE_URL=https://api.example.com
```

Use in your app:

```js
import.meta.env.VITE_API_BASE_URL
```

---

## 🔐 Security Best Practices

❌ Never commit `.env` with real values

✅ Use `.env.example`:

```env
VITE_API_BASE_URL=
```

---

## 🧪 Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview build
```

---

## 🧠 Example Usage

### Zustand Store

```js
const { count, increment } = useStore();
```

---

### API Call with React Query

```js
const { data } = useQuery({
  queryKey: ["demo"],
  queryFn: async () => {
    const res = await api.get("/");
    return res.data;
  },
});
```

---

## 🎨 Customization

* Update Tailwind config → `tailwind.config.js`
* Add new pages → `src/pages/`
* Add APIs → `src/services/`
* Manage state → `src/store/`

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create your feature branch
3. Commit changes
4. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**

---

## ⭐ Support

If you found this useful:

👉 Give it a ⭐ on GitHub
👉 Share with your dev friends

---

## 🧑‍💻 Author

**Abhi Jangid**

---

## 🔥 Future Roadmap

* 🔐 Authentication system (JWT)
* 🌙 Dark mode
* 🧩 UI component library
* 📊 Admin dashboard starter
* 🧪 Testing setup (Vitest)

---

<p align="center">
  Made with ❤️ using React + Vite
</p>
