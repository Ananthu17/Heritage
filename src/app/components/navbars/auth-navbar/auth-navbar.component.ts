import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-auth-navbar",
  templateUrl: "./auth-navbar.component.html",
})
export class AuthNavbarComponent implements OnInit {
  navbarOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }

  goToRoute() {
    this.router.navigate(['auth/login']);
    localStorage.removeItem('Token');
  }
}
