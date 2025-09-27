import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setType, setCategory, setDateRange } from '../features/filtersSlice';
import { categoriesSelectors } from '../features/categoriesSlice';

export default function FilterBar() {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);
  const categories = useSelector(categoriesSelectors.selectAll);

  return (
    <div style={{ marginBottom: 20 }}>
      <h3>Filters</h3>
      <select value={filters.type} onChange={e => dispatch(setType(e.target.value))}>
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <select value={filters.category} onChange={e => dispatch(setCategory(e.target.value))}>
        <option value="all">All Categories</option>
        {categories.map(c => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      <input
        type="date"
        value={filters.dateRange.from}
        onChange={e => dispatch(setDateRange({ ...filters.dateRange, from: e.target.value }))}
      />
      <input
        type="date"
        value={filters.dateRange.to}
        onChange={e => dispatch(setDateRange({ ...filters.dateRange, to: e.target.value }))}
      />
    </div>
  );
}
