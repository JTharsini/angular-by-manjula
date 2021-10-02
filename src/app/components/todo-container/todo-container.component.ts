import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  todos = [
    { todo: 'Learn more on components' },
    { todo: 'Component communication' },
    { todo: 'Forms' },
    { todo: 'Services' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddTodo(event : string)
  {
    this.todos.push({
      todo: event,
    });
  }

  onDeleteToDo(event : string)
  {
    this.todos = this.todos.filter(t => t.todo !== event);
  }
}