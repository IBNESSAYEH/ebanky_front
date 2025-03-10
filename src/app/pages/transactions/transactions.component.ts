import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-transactions',
  imports: [],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
  transactionTableColumns: string[] = ["firstname", "lastname", "email", "password", "age", "role", "monthlyIncome", "creditScore"];

  constructor(private store: Store){

  }
}
