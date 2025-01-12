import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthRes, AuthUser, User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private router = inject(Router);

  token = signal<string | null>(null);
  user = signal<AuthUser | null>(null);

  private readonly apiUrl = 'http://localhost:8080/api/auth';

  constructor() {
    this.loadUserTokenLocalStorage();
  }

  loadUserTokenLocalStorage() {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      this.user.set(JSON.parse(storedUser));
      this.token.set(storedToken);
    }
  }

  login(email: string, password: string): Observable<AuthRes> {
    return this.http.post<AuthRes>(`${this.apiUrl}/authenticate`, { email, password }).pipe(
      tap((res) => {
        this.setUser(res);
        this.setToken(res);
      })
    );
  }

  setUser(res: AuthRes) {
    const { token, refreshToken, ...userWithoutTokens } = res;
    localStorage.setItem('user', JSON.stringify(userWithoutTokens));
    this.user.set(userWithoutTokens);
  }

  setToken(res: AuthRes) {
    localStorage.setItem('token', res.token);
    this.token.set(res.token);
  }

  getUser(): AuthUser | null {
    return this.user();
  }

  getToken(): string | null {
    return this.token();
  }

  isAthenticated() {
    return !!this.getToken();
  }

  logout() {
    this.token.set(null);
    this.user.set(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }
}
