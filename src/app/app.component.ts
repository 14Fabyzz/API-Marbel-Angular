import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'marvel-app';

  constructor(private authService: AuthService) {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
  
}
