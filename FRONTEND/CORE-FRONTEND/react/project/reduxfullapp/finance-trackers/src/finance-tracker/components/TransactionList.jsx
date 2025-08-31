import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { transactionsSelectors, deleteTransaction } from '../features/transactionsSlice';
import { categoriesSelectors } from '../features/categoriesSlice';

export default function TransactionList() {
  const dispatch = useDispatch();
  const transactions = useSelector(transactionsSelectors.selectAll);
  const categories = useSelector(categoriesSelectors.selectEntities);

  if (!transactions.length) return <p>No transactions yet.</p>;

  return (
    <div>
      <h2>Transactions</h2>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(t => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.type}</td>
              <td>{categories[t.category]?.name || ''}</td>
              <td>{t.amount}</td>
              <td>{t.description}</td>
              <td>
                <button onClick={() => dispatch(deleteTransaction(t.id))}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
