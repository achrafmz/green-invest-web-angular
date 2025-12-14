// src/app/projects-list/projects-list.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Obligatoire pour [(ngModel)]

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Les deux sont nécessaires
  templateUrl: './projects-list.html',
  styleUrls: ['./projects-list.css']
})
export class ProjectsList {
  searchQuery = '';
  selectedFilter = '';

  // Données simulées (à remplacer par une API plus tard)
  projects = [
    {
      id: 1,
      title: 'Parc solaire communautaire',
      description: 'Installation de 500 panneaux solaires pour alimenter 200 foyers en énergie propre.',
      location: 'Ouarzazate, Maroc',
      type: 'solaire',
      image: 'https://via.placeholder.com/600x200/4CAF50/FFFFFF?text=Parc+Solaire',
      progress: 75,
      raised: 75000,
      target: 100000
    },
    {
      id: 2,
      title: 'Éolienne communautaire',
      description: 'Construction d’une éolienne de 1MW pour fournir de l’électricité à un village isolé.',
      location: 'Tanger, Maroc',
      type: 'eolien',
      image: 'https://via.placeholder.com/600x200/2196F3/FFFFFF?text=Éolienne',
      progress: 45,
      raised: 45000,
      target: 100000
    },
    {
      id: 3,
      title: 'Mini-centrale hydraulique',
      description: 'Petite centrale hydroélectrique sur un cours d’eau local pour produire de l’énergie renouvelable.',
      location: 'Marrakech, Maroc',
      type: 'hydraulique',
      image: 'https://via.placeholder.com/600x200/9C27B0/FFFFFF?text=Hydraulique',
      progress: 30,
      raised: 30000,
      target: 100000
    }
  ];

  // Commence par afficher tous les projets
  filteredProjects = [...this.projects];

  filterProjects() {
    let result = this.projects;

    // Filtre par recherche
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q)
      );
    }

    // Filtre par type
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
    console.log('Voir détails du projet:', project.title);
    // Plus tard : this.router.navigate(['/project', project.id]);
  }
}