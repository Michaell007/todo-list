import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.css']
})
export class CorbeilleComponent implements OnInit {

  listCorbeille: any;
  listTodos: any;
  list!: any;

  constructor() { }

  ngOnInit(): void {
    this.list = localStorage.getItem('myTodoCorbeille');
    this.listCorbeille = JSON.parse(this.list);

    this.list = localStorage.getItem('myTodos');
    this.listTodos = JSON.parse(this.list);
  }

  restaurer(id: number) {
    this.listTodos.push(this.listCorbeille[id]);
    localStorage.setItem('myTodos', JSON.stringify(this.listTodos));
    this.listCorbeille.splice(id, 1);
    localStorage.setItem('myTodoCorbeille', JSON.stringify(this.listCorbeille));
  }

}
