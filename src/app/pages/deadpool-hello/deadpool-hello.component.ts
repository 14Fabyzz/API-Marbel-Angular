import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deadpool-hello',
  standalone: false,
  templateUrl: './deadpool-hello.component.html',
  styleUrl: './deadpool-hello.component.css'
})
export class DeadpoolHelloComponent {
constructor(private router: Router) { }
goBack(): void {
    this.router.navigate(['/home']); // Puedes cambiar a '/characters' o donde quieras
  }

}
