import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvel-app';

  // 3. Inyecta el AuthService como público y el Router
  constructor(
    public authService: authService, 
    private router: Router
  ) {}

  // 4. Crea el método login() para navegar a la página de login
  login(): void {
    this.router.navigate(['/login']);
  }

  // 5. Crea el método logout() que llama al servicio
  logout(): void {
    this.authService.logout();
  }

}