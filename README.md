````markdown
# 📝 Task Manager App

A modern, responsive Task Manager web app built with **React** and **ShadCN UI**, featuring local storage persistence, API integration, dark mode toggle, and mobile-friendly navigation.

---

## 🌟 Features

- ✅ Add, complete, delete, and filter tasks
- 💾 Tasks persist using `localStorage`
- 🔁 Auto-fetch initial tasks from API
- 🎨 Dark mode toggle (system-based and manual)
- 📱 Fully responsive layout
- 🧭 Client-side routing using React Router
- 🧠 Clean and modular component structure

---

## 🖼️ Screenshots

| Light Mode | Dark Mode |
|------------|-----------|
![light](./screenshots/lightmode.png)
 ![dark](./screenshots/task.png)
 ![card](./screenshots/cards.png)

---

## ⚙️ Tech Stack

- **React + Vite**
- **React Router DOM**
- **TypeScript (optional) / JavaScript**
- **ShadCN UI + Tailwind CSS**
- **Lucide Icons**
- **Dark Mode Context**
- **localStorage for persistence**

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app
````

### 2. Install Dependencies

```bash
pnpm install
# or
yarn
```

### 3. Create `.env` File

Create a `.env` file in the root directory and add your API URL (optional):

```env
VITE_API_URL=https://jsonplaceholder.typicode.com/todos/
```

> 🔁 If no `.env` is provided, the app still works using only localStorage.

### 4. Run the Development Server

```bash
pnpm run dev 
```

---

## 🛠️ Folder Structure

```bash
src/
├── components/
│   └── ui/               # ShadCN UI components (Button, Card, etc.)
├── context/
│   └── ThemeProvider.jsx # Dark mode context logic
├── pages/
│   └── TaskManager.jsx   # Main Task Manager page
├── constants/
│   └── index.js          # Routes and links
├── App.jsx               # App routes and layout
├── main.jsx              # React root
```

---

## 🧪 Available Commands

| Command           | Description              |
| ----------------- | ------------------------ |
| `pnpm run dev`     | Start local dev server   |
| `pnpm run build`   | Build app for production |
| `pnpm run preview` | Preview production build |

---

## 📦 Deployment

You can deploy the app using:

* [Vercel](https://vercel.com/)
* [Netlify](https://www.netlify.com/)
* [Firebase Hosting](https://firebase.google.com/products/hosting)
* Or any static hosting provider

---

## 👨‍💻 Author

**Muli Clement Wambua**
📫 [clementwa01@gmail.com](mailto:clementwa01@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/muli-clement-b5b17b308/)
🌐 [Portfolio](https://klmportfolio.netlify.app/)
💻 [GitHub](https://github.com/Clementwa0)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

```

