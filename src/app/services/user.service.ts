import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'user1' },
    { id: 2, name: 'user2' },
    { id: 3, name: 'user3' },
    { id: 4, name: 'user4' },
    { id: 5, name: 'user5' },
  ];

  constructor() { }

  // Get all users
  getUsers(): User[] {
    return this.users;
  }

  // Get user by ID
  getUser(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  // Add new user
  addUser(user: User): void {
    this.users.push(user);
  }

  // Update existing user
  updateUser(updatedUser: User): void {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  // Delete user
  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
