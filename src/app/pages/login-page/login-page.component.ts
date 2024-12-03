import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {ApiService} from '../../api.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit(): void {
    if (!this.username || !this.password) {
      console.error('Fill all fields');
      return;
    }

    this.apiService.get('users').subscribe({
      next: (users: any[]) => {
        const user = users.find(
          (u) => u.username === this.username && u.password === this.password
        );

        if (user) {
          console.log('Success', user);

          if (user.role === 'admin') {
            this.router.navigate(['/admin']);
          } else if (user.role === 'user') {
            this.router.navigate(['/user']);
          } else {
            console.error('No role');
          }
        } else {
          console.error('Wrong name or password');
        }
      },
      error: (err: any) => {
        console.error('Error', err);
      }
    });
  }
}
