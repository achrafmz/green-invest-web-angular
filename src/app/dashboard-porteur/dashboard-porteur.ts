// src/app/dashboard-porteur/dashboard-porteur.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-porteur',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-porteur.html',
  styleUrls: ['./dashboard-porteur.css']
})
export class DashboardPorteur { // 👈 Note : c'est "DashboardPorteur", pas "DashboardPorteurComponent"

  constructor(private router: Router) {}

  createNewProject() {
    // Ici tu peux rediriger vers une page de création de projet
    console.log('Création d’un nouveau projet...');
    // this.router.navigate(['/create-project']);
  }
}