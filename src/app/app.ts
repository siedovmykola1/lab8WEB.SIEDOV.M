import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Мій список завдань';
  newTask = '';
  filter: 'all' | 'active' | 'done' = 'all';

  
  items = [
    { description: 'Вивчити основи Angular', done: true },
    { description: 'Створити To-Do застосунок', done: false },
    { description: 'Здати лабораторну №8', done: false }
  ];

  
  get tasks() {
    if (this.filter === 'all') {
      return this.items;
    }
    return this.items.filter((item) => 
      this.filter === 'done' ? item.done : !item.done
    );
  }

  
  addItem() {
    if (!this.newTask.trim()) return;
    this.items.unshift({
      description: this.newTask,
      done: false
    });
    this.newTask = '';
  }

  
  remove(item: any) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}