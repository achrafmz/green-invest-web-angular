import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-porteur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-porteur.html',
  styleUrls: ['./dashboard-porteur.css']
})
export class DashboardPorteur {
  // Récupère le nom depuis localStorage ou par défaut
  userName = 'Achraf'; // Tu peux le rendre dynamique plus tard

  constructor(private router: Router) {
    // Optionnel : charger le nom depuis localStorage
    const user = localStorage.getItem('currentUser');
    if (user) {
      try {
        const userData = JSON.parse(user);
        this.userName = userData.email.split('@')[0]; // Ex: achraf@gmail.com → "achraf"
      } catch (e) {
        console.warn('Impossible de charger l’utilisateur');
      }
    }
  }

  goToCreateProject() {
    this.router.navigate(['/create-project']);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth']);
  }
}