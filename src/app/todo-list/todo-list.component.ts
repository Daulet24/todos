import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
  ],
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  tasks: any[] = [];
  newTask: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.apiService.get('todos').subscribe((tasks: any[]) => {
      this.tasks = tasks;
    });
  }

  addTask(): void {
    if (this.newTask.trim()) {
      const newTask = { name: this.newTask, completed: false };

      this.apiService.post('todos', newTask).subscribe((task: any) => {
        this.tasks.push(task);
        this.newTask = '';
      }, (error) => {
        console.error('Ошибка при добавлении задачи:', error);
      });
    }
  }

  toggleTaskCompletion(index: number): void {
    const task = this.tasks[index];
    task.completed = !task.completed;
    this.apiService.put(`todos/${task.id}`, task).subscribe();
  }

  removeTask(index: number): void {
    const task = this.tasks[index];
    this.apiService.delete(`todos/${task.id}`).subscribe(() => {
      this.tasks.splice(index, 1);
    });
  }
}
