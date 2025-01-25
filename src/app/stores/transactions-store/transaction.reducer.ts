import { createReducer, on } from '@ngrx/store';
// import { Transaction } from './transaction.model';
// import * as TransactionActions from './transaction.actions';

export interface State {
  // transactions: Transaction[];
  loading: boolean;
  error: string | null;
}

export const initialState: State = {
  // transactions: [],
  loading: false,
  error: null
};

export const transactionReducer = createReducer(
  initialState,
  // on(TransactionActions.loadTransactions, state => ({
  //   ...state,
  //   loading: true,
  //   error: null
  // })),
  // on(TransactionActions.loadTransactionsSuccess, (state, { transactions }) => ({
  //   ...state,
  //   transactions,
  //   loading: false
  // })),
  // on(TransactionActions.loadTransactionsFailure, (state, { error }) => ({
  //   ...state,
  //   loading: false,
  //   error
  // })),
  // on(TransactionActions.addTransaction, state => ({
  //   ...state,
  //   loading: true,
  //   error: null
  // })),
  // on(TransactionActions.addTransactionSuccess, (state, { transaction }) => ({
  //   ...state,
  //   transactions: [...state.transactions, transaction],
  //   loading: false
  // })),
  // on(TransactionActions.addTransactionFailure, (state, { error }) => ({
  //   ...state,
  //   loading: false,
  //   error
  // }))
);
