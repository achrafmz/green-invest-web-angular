import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.html',
  styleUrls: ['./auth.css']
})
export class AuthComponent {
  private fb = inject(FormBuilder);
  isLoginMode = true;
  authForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    role: ['']
  });

  switchToLogin() {
    this.isLoginMode = true;
    this.authForm.get('role')?.clearValidators();
    this.authForm.get('role')?.updateValueAndValidity();
  }

  switchToSignup() {
    this.isLoginMode = false;
    this.authForm.get('role')?.setValidators(Validators.required);
    this.authForm.get('role')?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.authForm.valid) {
      const { email, password, role } = this.authForm.value;
      if (this.isLoginMode) {
        console.log('Connexion:', { email, password });
      } else {
        console.log('Inscription:', { email, password, role });
      }
    } else {
      console.log('Formulaire invalide');
    }
  }
}