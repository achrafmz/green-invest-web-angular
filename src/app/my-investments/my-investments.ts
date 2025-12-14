// src/app/my-investments/my-investments.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-investments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-investments.html',
  styleUrls: ['./my-investments.css']
})
export class MyInvestments {
  investments = [
    {
      projectName: 'Parc solaire communautaire',
      date: '15 Oct 2024',
      amount: 1000,
      return: 8,
      status: 'En cours'
    },
    {
      projectName: 'Éoliennes offshore',
      date: '3 Sept 2024',
      amount: 5000,
      return: 7.5,
      status: 'En cours'
    },
    {
      projectName: 'Centrale biomasse locale',
      date: '12 Août 2024',
      amount: 2500,
      return: 9,
      status: 'Terminé'
    },
    {
      projectName: 'Mini-centrale hydraulique',
      date: '28 Juin 2024',
      amount: 3000,
      return: 7,
      status: 'En cours'
    }
  ];

  // ✅ Propriété déclarée explicitement
  totalInvested = this.investments.reduce((sum, inv) => sum + inv.amount, 0);
}