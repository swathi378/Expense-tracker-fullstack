
# 💰 Full-Stack Expense Tracker (React + FastAPI + MongoDB)

![Python](https://img.shields.io/badge/Python-3.9-blue)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688)
![React](https://img.shields.io/badge/Frontend-React-61DAFB)
![Vite](https://img.shields.io/badge/Build-Vite-646CFF)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![License](https://img.shields.io/badge/License-MIT-lightgrey)
![Status](https://img.shields.io/badge/Status-Active-success)

A modern finance-tracking application where users can add & record expenses, view history, edit + delete entries, and visualize spend using charts — built to learn real-world full-stack development.



## 🧭 Preview

<p align="center">
  <img src="https://raw.githubusercontent.com/monasri001/Expense-Tracker-Fullstack/master/dashbord.png" alt="Dashboard UI" width="65%">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/monasri001/Expense-Tracker-Fullstack/master/expensedb.png" alt="Expense DB" width="65%">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/monasri001/Expense-Tracker-Fullstack/master/vscode.png" alt="Dashboard UI" width="65%">
</p>

---

## 🧱 Architecture

```

Frontend (React + Vite + Chart.js)
|
Axios
|
Backend API (FastAPI)
|
MongoDB Atlas

```

---

## 🗂 Folder Structure
```

expense-tracker/
│
├── backend/
│   ├── main.py
│   ├── db.py
│   ├── models.py
│   ├── routes/
│   ├── requirements.txt
│   ├── .env.example
│
├── frontend/
│   ├── src/
│   ├── App.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── package-lock.json
│
└── README.md

```

❌ Not committed (ignored through `.gitignore`):

```

backend/venv/
frontend/node_modules/
.env

```

---

## 🧰 Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React (Vite), JavaScript, Chart.js |
| Backend  | FastAPI, Python |
| Database | MongoDB Atlas |
| Tools | Git, VS Code, Node.js, Uvicorn |

---

# 🚀 Setup Instructions (Local Machine)

### ✔ Prerequisites
| Requirement | Version |
|------------|---------|
| Python | 3.9+ |
| Node.js | 20+ |
| MongoDB Atlas Account | Free cluster |

---

## 1️⃣ Clone Repository

```

git clone [https://github.com/YOUR_USERNAME/expense-tracker.git](https://github.com/YOUR_USERNAME/expense-tracker.git)
cd expense-tracker

````

---

## 2️⃣ Backend Setup (FastAPI)

```bash
cd backend
python -m venv venv
venv\Scripts\activate       # Windows
pip install -r requirements.txt
````

> Create `.env` file 👇

```
copy .env.example .env   (or create manually)
```

Edit `.env`:

```
MONGO_URI="mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/"
DB_NAME="expense_db"
```

Run backend:

```bash
uvicorn main:app --reload
```

✔ Test API:  [http://localhost:8000](http://localhost:8000)
✔ Swagger Docs: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 3️⃣ Frontend Setup (React Vite)

```bash
cd ../frontend
npm install
npm run dev
```

Open in browser →
👉 [http://localhost:5173](http://localhost:5173)

---

# 🧪 Usage

| Action        | Result                  |
| ------------- | ----------------------- |
| Add row       | Saves to MongoDB        |
| Edit row ✏    | Opens form in edit mode |
| Delete row 🗑 | Removes entry           |
| Chart refresh | Auto-updates            |

---

## 🛑 Troubleshooting

| Issue                     | Fix                                            |
| ------------------------- | ---------------------------------------------- |
| `chart.js/auto` not found | `npm install chart.js`                         |
| Vite crypto error         | Install **Node v20+**                          |
| `/openapi.json` 500 error | `pip install fastapi==0.95.2 pydantic==1.10.8` |
| MongoDB denied            | In Atlas → Network Access → Add IP `0.0.0.0/0` |

---

# 🤝 Sharing This Project With Others

Before zipping → DELETE folders:

```
backend/venv/
frontend/node_modules/
```

Then send ZIP.

Receiver must run:

```bash
python -m venv venv
pip install -r requirements.txt
npm install
npm run dev
```

---

# ⭐ Contribute & Support

Want more features? Open an issue or request:

```
- Export CSV
- Monthly filter with dropdown
- Login system
- Deploy to Railway + Vercel
```

---

# 📜 License

MIT — free to use, modify, and learn.

---

# 🙌 Author

Made with ❤️ by Monasri

```

