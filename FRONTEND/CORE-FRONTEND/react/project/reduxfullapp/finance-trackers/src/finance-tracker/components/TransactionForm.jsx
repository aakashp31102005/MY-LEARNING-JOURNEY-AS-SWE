import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveTransaction } from '../features/transactionsSlice';
import { categoriesSelectors } from '../features/categoriesSlice';

export default function TransactionForm() {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelectors.selectAll);
  const [form, setForm] = useState({
    date: '',
    type: 'income',
    category: '',
    amount: '',
    description: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.date || !form.category || !form.amount) return;
    dispatch(saveTransaction({ ...form, id: Date.now().toString(), amount: Number(form.amount) }));
    setForm({ date: '', type: 'income', category: '', amount: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h2>Add Transaction</h2>
      <input name="date" type="date" value={form.date} onChange={handleChange} required />
      <select name="type" value={form.type} onChange={handleChange}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <select name="category" value={form.category} onChange={handleChange} required>
        <option value="">Select Category</option>
        {categories.map(c => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      <input name="amount" type="number" value={form.amount} onChange={handleChange} placeholder="Amount" required />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <button type="submit">Add</button>
    </form>
  );
}
