import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Todo } from './todo.model';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos: Todo[] = [];
  public title: string = 'Minhas Tarefas';
  public form: FormGroup;
  public mode = 'list';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]
    });

    
  }
  
  ngOnInit(): void {
    this.load();
  }

  add(): void {
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.save();
    this.clear();
  }

  clear(): void {
    this.form.reset();
  }

  remove(todo: Todo): void {
    const index = this.todos.indexOf(todo); //captura o index do todo recebido
    if (index !== -1) {
      this.todos.splice(index, 1); //remove o item da lista
    }
    this.save();
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.save();
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
    this.save();
  }

  save(): void {
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
    this.mode ='list';
  }

  load(): void {
    const data = localStorage.getItem('todos') as string;
    if (data) {
      this.todos = JSON.parse(data);
    }
    else {
      this.todos = [];
    }
  }

  changeMode(mode: string) {
    this.mode = mode;
  }


 

}
