import { Component, Input } from '@angular/core';
import { User } from '../../services/user.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  @Input() user: User = { id: 0, name: '' };

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const existingUser = this.userService.getUser(+id);
      if (existingUser) {
        this.user = existingUser;
      }
    }
  }

  onSave(): void {
    if (this.user.id) {
      this.userService.updateUser(this.user);
    } else {
      const newId = this.userService.getUsers().length + 1;
      this.user.id = newId;
      this.userService.addUser(this.user);
    }
    this.router.navigate(['/users']);
  }
}
