import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../features/categoriesSlice';

export default function CategoryForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name) return;
    dispatch(addCategory({ id: Date.now().toString(), name }));
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <h2>Add Category</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Category name" required />
      <button type="submit">Add</button>
    </form>
  );
}
