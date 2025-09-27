import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const categoriesAdapter = createEntityAdapter();

const initialState = categoriesAdapter.getInitialState();

const defaultCategories = [
  { id: '1', name: 'Salary' },
  { id: '2', name: 'Groceries' },
  { id: '3', name: 'Utilities' },
  { id: '4', name: 'Entertainment' },
];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: categoriesAdapter.addOne,
    removeCategory: categoriesAdapter.removeOne,
    updateCategory: categoriesAdapter.updateOne,
    resetCategories: state => {
      categoriesAdapter.setAll(state, defaultCategories);
    },
  },
});

export const { addCategory, removeCategory, updateCategory, resetCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
export const categoriesSelectors = categoriesAdapter.getSelectors(state => state.categories);
