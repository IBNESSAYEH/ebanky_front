import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account/account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiUrl: string = 'http://localhost:8080/api/accounts';

  http = inject(HttpClient);

  getAllAccounts(): Observable<Account[]>{
    return this.http.get<Account[]>(this.apiUrl);
  }

  deleteAccount(id: string): Observable<Account[]>{
    return this.http.delete<Account[]>(`${this.apiUrl}/${id}`);
  }
}
