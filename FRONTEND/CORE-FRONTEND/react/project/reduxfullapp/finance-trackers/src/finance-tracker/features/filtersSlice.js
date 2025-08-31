import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    type: 'all', // 'income', 'expense', 'all'
    category: 'all',
    dateRange: { from: '', to: '' },
  },
  reducers: {
    setType: (state, action) => { state.type = action.payload; },
    setCategory: (state, action) => { state.category = action.payload; },
    setDateRange: (state, action) => { state.dateRange = action.payload; },
    resetFilters: state => {
      state.type = 'all';
      state.category = 'all';
      state.dateRange = { from: '', to: '' };
    },
  },
});

export const { setType, setCategory, setDateRange, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
