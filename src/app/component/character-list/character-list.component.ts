import { Component } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-character-list',
  standalone: false,
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
 characters: any[] = [];
 isLoading: boolean = true;

 // Variables para la paginación
  currentPage: number = 1;
  itemsPerPage: number = 20; // Cuántos personajes por página
  totalCharacters: number = 0;


  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.loadCharacters(); // Carga los personajes de la primera página
  }
loadCharacters(): void {
    this.isLoading = true;
    this.characters = []; // Limpia la lista actual para el efecto de carga
    const offset = (this.currentPage - 1) * this.itemsPerPage;

    this.marvelService.getCharacters(this.itemsPerPage, offset)
      .subscribe((response: any) => {
        this.characters = response.data.results;
        this.totalCharacters = response.data.total; // La API nos dice el total de personajes
        this.isLoading = false;
      });
  }
  // Función para ir a la página siguiente
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCharacters();
    }
  }

  // Función para ir a la página anterior
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }

  // Un 'getter' para calcular el número total de páginas
  get totalPages(): number {
    return Math.ceil(this.totalCharacters / this.itemsPerPage);
  }
  
}
