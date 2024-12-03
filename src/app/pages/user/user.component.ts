import { Component } from '@angular/core';
import {TodoListComponent} from '../../todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    TodoListComponent,
    TodoListComponent,
    FormsModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
