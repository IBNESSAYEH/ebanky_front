// register.component.ts
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'app-register',
 standalone: true,
 imports: [CommonModule, ReactiveFormsModule, RouterModule],
 templateUrl: './register.component.html'
})
export class RegisterComponent {
 registerForm: FormGroup;
 private fb = inject(FormBuilder);
 private authService = inject(AuthService);
 private router = inject(Router);

 constructor() {
   this.registerForm = this.fb.group({
     firstname: ['', Validators.required],
     lastname: ['', Validators.required],
     email: ['', [Validators.required, Validators.email]],
     password: ['', [
       Validators.required,
       Validators.minLength(8)
     ]],
     age: ['', [Validators.required, Validators.min(18)]],
     role: ['USER', Validators.required],
     monthlyIncome: ['', [Validators.required]],
     creditScore: ['', [Validators.required]]
   });
 }
 showPassword = false;

 togglePassword() {
   this.showPassword = !this.showPassword;
 }

//  onSubmit() {
//    if (this.registerForm.valid) {
//      this.authService.register(this.registerForm.value).subscribe({
//        next: (response) => {
//          console.log('Registration successful');
//          this.router.navigate(['/login']);
//        },
//        error: (error) => {
//          console.error('Registration failed:', error);
//        }
//      });
//    }
//  }
}
