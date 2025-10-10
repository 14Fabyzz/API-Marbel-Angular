import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';
@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  users: any;

  constructor(private JsonPlaceholderService: JsonplaceholderService) { }

  ngOnInit(): void {
    this.JsonPlaceholderService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

}
