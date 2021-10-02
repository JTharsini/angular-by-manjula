import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  todo : string = '';

  @Output() addtodo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(ngForm : NgForm) {
    console.log(ngForm.value.todoinputonewaybinding);
    this.addtodo.emit(this.todo);
    this.todo = '';
    ngForm.reset();
    console.log(ngForm);
  }
}
