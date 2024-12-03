import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AdminSidebarComponent} from '../admin-sidebar/sidebar.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    RouterOutlet,
    AdminSidebarComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
