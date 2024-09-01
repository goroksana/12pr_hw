import { Component } from '@angular/core';
import { User } from '../../services/user.service';
import { UserService } from '../../services/user.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
    this.users = this.userService.getUsers();
  }
}
