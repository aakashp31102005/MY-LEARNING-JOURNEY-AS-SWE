import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import CategoryList from './components/CategoryList';
import CategoryForm from './components/CategoryForm';
import FilterBar from './components/FilterBar';
import { fetchTransactions } from './features/transactionsSlice';
import { resetCategories } from './features/categoriesSlice';

function MainApp() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(resetCategories());
  }, [dispatch]);
  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
      <h1>Personal Finance Tracker</h1>
      <Dashboard />
      <FilterBar />
      <TransactionForm />
      <TransactionList />
      <CategoryForm />
      <CategoryList />
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
