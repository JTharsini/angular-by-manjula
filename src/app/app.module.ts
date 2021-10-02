import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';
import { MembersComponent } from './components/members/members.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    TodoContainerComponent,
    MembersComponent,
    TodoInputComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // mandatory
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
