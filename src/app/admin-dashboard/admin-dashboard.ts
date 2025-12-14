// src/app/admin-dashboard/admin-dashboard.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css']
})
export class AdminDashboard {
  // ✅ Déclaration explicite des propriétés
  stats = {
    pending: 12,
    approved: 48,
    funded: 32,
    users: 1245
  };

  recentActivity = [
    {
      icon: '✅',
      text: 'Parc solaire communautaire validé',
      time: 'Il y a 2h'
    },
    {
      icon: '👥',
      text: '15 nouveaux utilisateurs',
      time: 'Il y a 5h'
    },
    {
      icon: '📈',
      text: 'Éoliennes offshore - 75% financé',
      time: 'Il y a 1j'
    }
  ];

  viewPendingProjects() {
    console.log('Affichage des projets en attente...');
    alert('Redirection vers la liste des projets en attente...');
  }
}