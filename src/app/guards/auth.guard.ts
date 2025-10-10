import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

 // forma del guardian antigua
@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // Si está logueado, permite el acceso
    } else {
      alert('¡No tienes permiso! Debes iniciar sesión.');
      this.router.navigate(['/']); // Redirige al inicio
      return false; // Si no está logueado, bloquea el acceso
    }
  }
}