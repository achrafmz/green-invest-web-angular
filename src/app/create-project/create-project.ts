import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-project.html',
  styleUrls: ['./create-project.css']
})
export class CreateProject {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  userName = 'Achraf';
  showSuccess = false;

  projectForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    budget: [null, [Validators.required, Validators.min(1)]],
    location: ['', Validators.required],
    energyType: ['', Validators.required]
  });

  constructor() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      try {
        const userData = JSON.parse(user);
        this.userName = userData.email.split('@')[0].charAt(0).toUpperCase() + userData.email.split('@')[0].slice(1);
      } catch (e) {
        console.warn('User data invalid');
      }
    }
  }

  cancel() {
    this.router.navigate(['/dashboard/porteur']);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth']);
  }

  onSubmit() {
    if (this.projectForm.invalid) {
      // Affiche les erreurs via les messages dans le template
      return;
    }

    // Simule la soumission
    const projectData = this.projectForm.value;
    console.log('Nouveau projet soumis :', projectData);

    // Affiche popup de succès
    this.showSuccess = true;

    // Redirige vers le dashboard après 2 secondes
    setTimeout(() => {
      this.router.navigate(['/dashboard/porteur']);
    }, 2000);
  }
}