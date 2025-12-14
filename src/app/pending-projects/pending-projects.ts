// src/app/pending-projects/pending-projects.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// 🔹 Interface optionnelle (bonne pratique)
interface PendingProject {
  id: number;
  title: string;
  author: string;
  budget: number;
  submittedDate: string;
  type: string;
}

@Component({
  selector: 'app-pending-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pending-projects.html',
  styleUrls: ['./pending-projects.css']
})
export class PendingProjects {
  // ✅ Déclaration explicite de la propriété
  projects: PendingProject[] = [
    {
      id: 1,
      title: 'Parc éolien urbain',
      author: 'Nouhaila Ajaamoud',
      budget: 250000,
      submittedDate: '2 Nov 2024',
      type: 'éolien'
    },
    {
      id: 2,
      title: 'Installation photovoltaïque',
      author: 'Anasse Lekkioui',
      budget: 80000,
      submittedDate: '1 Nov 2024',
      type: 'solaire'
    },
    {
      id: 3,
      title: 'Centrale géothermique',
      author: 'Achraf Mazouz',
      budget: 500000,
      submittedDate: '31 Oct 2024',
      type: 'géothermie'
    }
  ];

  validateProject(project: PendingProject) {
    console.log('Projet validé:', project.title);
    alert(`✅ Le projet "${project.title}" a été validé.`);
    // À connecter à une API plus tard
  }

  rejectProject(project: PendingProject) {
    console.log('Projet refusé:', project.title);
    alert(`❌ Le projet "${project.title}" a été refusé.`);
  }
}