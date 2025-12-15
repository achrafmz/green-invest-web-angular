// src/app/projects-list/projects-list.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects-list.html',
  styleUrls: ['./projects-list.css']
})
export class ProjectsList {
  userName = 'Anasse';

  searchQuery = '';
  selectedFilter = '';

  projects = [
    {
      id: 1,
      title: 'Parc solaire communautaire',
      description: 'Installation de 500 panneaux solaires pour alimenter 200 foyers en énergie propre.',
      location: 'Ouarzazate, Maroc',
      type: 'solaire',
      image: 'https://via.placeholder.com/600x200/4CAF50/FFFFFF?text=Parc+Solaire',
      progress: 75,
      raised: 750000,
      target: 1000000
    },
    {
      id: 2,
      title: 'Éolienne communautaire',
      description: 'Construction d’une éolienne de 1MW pour fournir de l’électricité à un village isolé.',
      location: 'Tanger, Maroc',
      type: 'eolien',
      image: 'https://via.placeholder.com/600x200/2196F3/FFFFFF?text=Éolienne',
      progress: 45,
      raised: 450000,
      target: 1000000
    },
    {
      id: 3,
      title: 'Mini-centrale hydraulique',
      description: 'Petite centrale hydroélectrique sur un cours d’eau local pour produire de l’énergie renouvelable.',
      location: 'Marrakech, Maroc',
      type: 'hydraulique',
      image: 'https://via.placeholder.com/600x200/9C27B0/FFFFFF?text=Hydraulique',
      progress: 30,
      raised: 300000,
      target: 1000000
    }
  ];

  filteredProjects = [...this.projects];

  constructor(private router: Router) {
    const user = localStorage.getItem('currentUser');
    if (user) {
      try {
        const userData = JSON.parse(user);
        const name = userData.email.split('@')[0];
        this.userName = name.charAt(0).toUpperCase() + name.slice(1);
      } catch (e) {
        console.warn('Données utilisateur invalides');
      }
    }
  }

  filterProjects() {
    let result = this.projects;
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q)
      );
    }
    if (this.selectedFilter) {
      result = result.filter(p => p.type === this.selectedFilter);
    }
    this.filteredProjects = result;
  }

  setFilter(type: string) {
    this.selectedFilter = type;
    this.filterProjects();
  }

  viewProject(project: any) {
    this.router.navigate(['/project', project.id]);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth']);
  }
}