import { Component, OnInit } from '@angular/core';
// 1. Importa lo necesario para formularios reactivos
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authService } from '../../services/auth.service'; // Asegúrate que la ruta sea correcta

// --- ¡IMPORTA ESTOS MÓDULOS! ---
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

  // --- ¡AÑADE EL ARRAY DE IMPORTS AQUÍ! ---
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LoginComponent implements OnInit {

  // 2. Declara tu propiedad para el FormGroup
  loginForm!: FormGroup;

  // 3. Inyecta FormBuilder, AuthService y Router
  constructor(
    private fb: FormBuilder,
    private authService: authService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // 4. Define la estructura del formulario en ngOnInit
    this.loginForm = this.fb.group({
      // El primer valor es el valor inicial, el segundo son los validadores
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // 5. Crea el método para manejar el envío
  onSubmit(): void {
    // Si el formulario no es válido, no hagas nada
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched(); // Marca todos los campos como "tocados" para mostrar errores
      return;
    }

    // Muestra los datos en consola
    console.log('Formulario enviado:', this.loginForm.value);

    // 6. Llama a tu servicio de autenticación
    // En una app real, el servicio haría una petición HTTP
    this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
    
    // 7. Redirige al home (o a /characters) después del login
    this.router.navigate(['/home']);
  }
  
  // Opcional: Un "getter" para acceder fácilmente a los controles en el HTML
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}