import React from 'react';
import { useSelector } from 'react-redux';
import { transactionsSelectors } from '../features/transactionsSlice';
import { categoriesSelectors } from '../features/categoriesSlice';

export default function Dashboard() {
  const transactions = useSelector(transactionsSelectors.selectAll);
  const categories = useSelector(categoriesSelectors.selectEntities);

  const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
  const balance = income - expense;

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Dashboard</h2>
      <div>Total Income: <b>{income}</b></div>
      <div>Total Expense: <b>{expense}</b></div>
      <div>Balance: <b>{balance}</b></div>
    </div>
  );
}
