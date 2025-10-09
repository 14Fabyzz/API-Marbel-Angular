import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MD5 } from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  private publicKey = 'e0493a989b6f1bb40a2e8a442985c71a'; // <-- Pega tu clave pública
  private privateKey = '43d2b842ab148a5188e434a8c1e3bedd95cb6c1d'; // <-- Pega tu clave privada
  private baseUrl = 'https://gateway.marvel.com/v1/public/';

  constructor(private http: HttpClient) { }

  getCharacters(itemsPerPage: number, offset: number) {
   const timestamp = new Date().getTime().toString();
    const hash = MD5(timestamp + this.privateKey + this.publicKey).toString();

    const url = `${this.baseUrl}characters?ts=${timestamp}&apikey=${this.publicKey}&hash=${hash}`;

    return this.http.get(url);
  }
}
