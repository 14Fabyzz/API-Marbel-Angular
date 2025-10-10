import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-post',
  standalone: false,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})

export class PostsComponent implements OnInit {
  public allPosts: any[] = []; // Array para guardar TODOS los posts
  public paginatedPosts: any[] = []; // Array para los posts de la página actual

  // --- Propiedades para la paginación ---
  public currentPage: number = 1;
  public itemsPerPage: number = 8; // ¿Cuántos posts quieres por página?
  public totalPages: number = 0;

  constructor(private placeholderService: JsonplaceholderService) { }

  ngOnInit(): void {
    this.placeholderService.getPosts().subscribe(data => {
      this.allPosts = data as any[];
      this.totalPages = Math.ceil(this.allPosts.length / this.itemsPerPage);
      this.updatePaginatedPosts();
    });
  }
  // Actualiza la lista de posts a mostrar
  updatePaginatedPosts(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedPosts = this.allPosts.slice(startIndex, endIndex);
  }

  // Va a una página específica
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedPosts();
    }
  }

  // Va a la página anterior
  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  // Va a la página siguiente
  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  // Genera un array de números de página para los botones [1, 2, 3, ...]
  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  
}

