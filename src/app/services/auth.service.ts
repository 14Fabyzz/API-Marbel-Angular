import { Injectable } from '@angular/core'; // <-- 1. ASEGÚRATE DE IMPORTAR ESTO
import { Router } from '@angular/router';

// 2. AÑADE ESTE DECORADOR
@Injectable({
  providedIn: 'root'
})
export class authService {

  private isLoggedIn = false;

  constructor(private router: Router) { }

  login(email: string, password: string): void {
    console.log('Intentando iniciar sesión con:', email, password);
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}