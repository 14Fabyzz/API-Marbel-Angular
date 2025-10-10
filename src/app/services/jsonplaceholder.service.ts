import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getPosts() {
    return this.http.get(`${this.baseUrl}/posts`);
  }
  
}
