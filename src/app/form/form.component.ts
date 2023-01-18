import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() myTodos = <any>[];
  @Output() eventAddTodo = new EventEmitter<any>();

  name = "";
  description = "";

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    this.eventAddTodo.emit({ name: this.name, description: this.description});
  }

}


