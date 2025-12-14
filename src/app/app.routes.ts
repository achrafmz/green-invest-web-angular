// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth';
import { Home } from './home/home';
import { DashboardPorteur } from './dashboard-porteur/dashboard-porteur';
import { CreateProject } from './create-project/create-project';
import { ProjectsList } from './projects-list/projects-list'; 
import { MyInvestments } from './my-investments/my-investments'; // 👈 Import
import { AdminDashboard } from './admin-dashboard/admin-dashboard'; // 👈 Import
import { ProjectDetail } from './project-detail/project-detail'; 
import { PendingProjects } from './pending-projects/pending-projects'; // 👈 Import

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'auth', component: AuthComponent },
  { path: 'dashboard/porteur', component: DashboardPorteur },
  { path: 'create-project', component: CreateProject },
  { path: 'projectss', component: ProjectsList }, 
  { path: 'project/:id', component: ProjectDetail },
  { path: 'my-investments', component: MyInvestments }, 
  { path: 'admin', component: AdminDashboard }, // 👈 Nouvelle route
  { path: 'admin/pending', component: PendingProjects }, // 👈 Nouvelle route


];