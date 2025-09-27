import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { categoriesSelectors, removeCategory } from '../features/categoriesSlice';

export default function CategoryList() {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelectors.selectAll);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(c => (
          <li key={c.id}>
            {c.name} <button onClick={() => dispatch(removeCategory(c.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
