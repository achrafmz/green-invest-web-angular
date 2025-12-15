import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.html',
  styleUrls: ['./auth.css']
})
export class AuthComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  isLoginMode = true;
  authForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['']
  });

  // Toast
  showToast = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'error';

  // Loading
  showLoading = false;
  loadingText = 'Création de votre compte...'; // ✅ Texte dynamique

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

  private showNotification(message: string, type: 'success' | 'error' = 'error') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 4000);
  }

  onSubmit() {
    if (this.authForm.invalid) {
      if (this.authForm.get('password')?.hasError('minlength')) {
        this.showNotification('Le mot de passe doit contenir au moins 6 caractères.');
        return;
      }
      if (this.authForm.get('email')?.invalid) {
        this.showNotification('Veuillez entrer une adresse email valide.');
        return;
      }
      if (this.authForm.get('password')?.invalid) {
        this.showNotification('Le mot de passe est requis.');
        return;
      }
      if (!this.isLoginMode && this.authForm.get('role')?.invalid) {
        this.showNotification('Veuillez sélectionner un rôle.');
        return;
      }
      return;
    }

    const { email, password, role } = this.authForm.value;

    // ✅ Définir le texte du loading selon le mode
    this.loadingText = this.isLoginMode 
      ? 'Accès à votre espace...' 
      : 'Création de votre compte...';

    this.showLoading = true;

    setTimeout(() => {
      if (this.isLoginMode) {
        // 🔐 Admin
        if (email === 'admin@greeninvest.com' && password === 'admin123') {
          localStorage.setItem('currentUser', JSON.stringify({ email, role: 'admin' }));
          this.router.navigate(['/admin']);
          return;
        }
        // 👤 Achraf → Porteur
        if (email === 'achraf@gmail.com' && password === 'achraf') {
          localStorage.setItem('currentUser', JSON.stringify({ email, password, role: 'porteur' }));
          this.router.navigate(['/dashboard/porteur']);
          return;
        }
        // 👤 Anasse → Investisseur
        if (email === 'anasse@gmail.com' && password === 'anasse') {
          localStorage.setItem('currentUser', JSON.stringify({ email, password, role: 'investisseur' }));
          this.router.navigate(['/projects']);
          return;
        }

        // ❌ Erreur → annuler le loading
        this.showLoading = false;
        this.showNotification('Email ou mot de passe incorrect.');
      } else {
        // ✅ Inscription réussie
        localStorage.setItem('currentUser', JSON.stringify({ email, password, role }));
        if (role === 'porteur') {
          this.router.navigate(['/dashboard/porteur']);
        } else {
          this.router.navigate(['/projects']);
        }
      }
    }, 4000);
  }
}