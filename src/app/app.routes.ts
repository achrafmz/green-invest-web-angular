// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AuthComponent } from './auth/auth';
import { DashboardPorteur } from './dashboard-porteur/dashboard-porteur';
import { CreateProject } from './create-project/create-project';
import { ProjectsList } from './projects-list/projects-list';
import { ProjectDetail } from './project-detail/project-detail';
import { MyInvestments } from './my-investments/my-investments';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { PendingProjects } from './pending-projects/pending-projects';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'auth', component: AuthComponent },
  { path: 'dashboard/porteur', component: DashboardPorteur },
  { path: 'create-project', component: CreateProject },
  { path: 'projects', component: ProjectsList },
  { path: 'project/:id', component: ProjectDetail },
  { path: 'my-investments', component: MyInvestments },
  { path: 'admin', component: AdminDashboard },
  { path: 'admin/pending', component: PendingProjects },
  { path: '**', redirectTo: '' } // Wildcard
];