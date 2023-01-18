import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  @Input() listTodos = <any>[];
  @Output() eventDeleteItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  setEventDelete(id: number) {
    this.eventDeleteItem.emit(id);
  }

}
