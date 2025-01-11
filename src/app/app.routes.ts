import { authRoutes } from './pages/auth/auth.routes';
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { BankNewsComponent } from './pages/bank-news/bank-news.component';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: 'accounts',
    component: AccountsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'ebanky-news',
    component: BankNewsComponent,
    canActivate: [authGuard]
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }
];
