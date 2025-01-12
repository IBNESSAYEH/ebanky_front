import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;
  private authService = inject(AuthService);
  private router = inject(Router);
  errorMessge: string = '';

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password:new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        //Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ])
    });
  }

  submit(){
    if (this.loginForm.valid) {
      this.errorMessge = "";
      const {email, password} = this.loginForm.value;

      this.authService.login(email, password).subscribe({
        next: (res) => {
          this.router.navigate(['/accounts']);
        },
        error: (error) => {
          this.errorMessge = error.error.message || "The credentials are wrong";
          this.loginForm.reset();
        }
      });
    }
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}






