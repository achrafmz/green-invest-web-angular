// src/app/project-detail/project-detail.ts
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

// 🔹 Interface pour typer les données du projet
interface Project {
  id: string;
  title: string;
  location: string;
  type: string;
  image: string;
  progress: number;
  raised: number;
  target: number;
  investors: number;
  daysLeft: number;
  description: string;
  roi: string;
  duration: number;
}

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.css']
})
export class ProjectDetail {
  // 🔸 Déclaration explicite de la propriété
  project: Project | null = null;

  constructor(private route: ActivatedRoute) {
    this.loadProject();
  }

  loadProject() {
    // Récupère l'ID depuis l'URL
    const id = this.route.snapshot.paramMap.get('id') || '1';

    // 🟢 Simule un projet (à remplacer par un appel API plus tard)
    this.project = {
      id,
      title: 'Parc solaire communautaire',
      location: 'Ouarzazate, Maroc',
      type: 'solaire',
      image: 'https://via.placeholder.com/800x300/4CAF50/FFFFFF?text=Parc+Solaire',
      progress: 75,
      raised: 750000,
      target: 1000000,
      investors: 156,
      daysLeft: 23,
      description: 'Installation de 500 panneaux solaires photovoltaïques sur les toits d\'une zone industrielle. Ce projet permettra d\'alimenter 200 foyers en énergie 100% renouvelable et de réduire les émissions de CO₂ de 300 tonnes par an.',
      roi: '8% par an',
      duration: 10
    };
  }

  investNow() {
    if (this.project) {
      console.log('Investir dans le projet :', this.project.title);
      alert('Merci ! La fonctionnalité d’investissement sera bientôt activée.');
    }
  }
}