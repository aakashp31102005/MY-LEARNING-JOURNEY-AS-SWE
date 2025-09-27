import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

const transactionsAdapter = createEntityAdapter();

const initialState = transactionsAdapter.getInitialState({ status: 'idle', error: null });

// Simulate async fetch from localStorage
export const fetchTransactions = createAsyncThunk('transactions/fetch', async () => {
  const data = localStorage.getItem('transactions');
  return data ? JSON.parse(data) : [];
});

export const saveTransaction = createAsyncThunk('transactions/save', async (transaction, { getState }) => {
  const state = getState().transactions;
  const all = transactionsAdapter.getSelectors().selectAll(state);
  const updated = [...all, transaction];
  localStorage.setItem('transactions', JSON.stringify(updated));
  return transaction;
});

export const deleteTransaction = createAsyncThunk('transactions/delete', async (id, { getState }) => {
  const state = getState().transactions;
  const all = transactionsAdapter.getSelectors().selectAll(state).filter(t => t.id !== id);
  localStorage.setItem('transactions', JSON.stringify(all));
  return id;
});

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        transactionsAdapter.setAll(state, action.payload);
        state.status = 'succeeded';
      })
      .addCase(saveTransaction.fulfilled, (state, action) => {
        transactionsAdapter.addOne(state, action.payload);
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        transactionsAdapter.removeOne(state, action.payload);
      });
  },
});

export default transactionsSlice.reducer;
export const transactionsSelectors = transactionsAdapter.getSelectors(state => state.transactions);
