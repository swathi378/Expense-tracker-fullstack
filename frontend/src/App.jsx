import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import "./App.css";

function App() {
  const API_URL = "http://localhost:8000/expenses";

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setExpenses(data);
    drawChart(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      amount: Number(amount),
      category,
      description,
      date: new Date()
    };

    if (editId) {
      await fetch(`${API_URL}/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      setEditId(null);
    } else {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
    }

    setAmount(""); setCategory(""); setDescription("");
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchExpenses();
  };

  const startEdit = (exp) => {
    setEditId(exp._id);
    setAmount(exp.amount);
    setCategory(exp.category);
    setDescription(exp.description);
  };

  // Chart logic
  const drawChart = (data) => {
    const ctx = document.getElementById("chart");
    if (!ctx) return;

    const totals = {};
    data.forEach((e) => {
      totals[e.category] = (totals[e.category] || 0) + e.amount;
    });

    new Chart(ctx, {
      type: "pie",
      data: {
        labels: Object.keys(totals),
        datasets: [
          {
            data: Object.values(totals),
            backgroundColor: ["#4caf50", "#2196f3", "#ff5722", "#9c27b0", "#ff9800"],
          }
        ]
      }
    });
  };

  return (
    <div className="dashboard">
      
      {/* LEFT SIDE */}
      <div className="left">
        <h1>💰 Expense Tracker</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
          <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button type="submit">{editId ? "Save Edit" : "Add Expense"}</button>
        </form>

        <h2>📌 Recent Expenses</h2>
        <table className="expense-table" border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Category</th>
              <th>Description</th>
              <th>Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(e => (
              <tr key={e._id}>
                <td>₹ {e.amount}</td>
                <td>{e.category}</td>
                <td>{e.description}</td>
                <td>{new Date(e.date).toLocaleDateString()}</td>
                <td><button className="edit" onClick={() => startEdit(e)}>✏ Edit</button></td>
                <td><button className="delete" onClick={() => deleteExpense(e._id)}>🗑 Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <h2>📊 Spending Split</h2>
        <canvas id="chart" width="250" height="250"></canvas>
      </div>

    </div>
  );
}

export default App;
