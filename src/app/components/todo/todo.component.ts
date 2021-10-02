import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo = '';
  @Output() deleteToDo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.deleteToDo.emit(this.todo);
  }
}
