// src/app/home/home.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home { // 👈 Important : c'est "Home", pas "HomeComponent"
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/auth']);
  }

  navigateToSignup() {
    this.router.navigate(['/auth']);
  }
}