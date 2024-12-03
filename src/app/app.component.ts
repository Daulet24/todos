import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {AdminComponent} from './pages/admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginPageComponent ,AdminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {

}
