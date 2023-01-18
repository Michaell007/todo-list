import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  myTodos = <any>[];
  myTodoCorbeille = <any>[];

  addMyTodos(data: any) {
    this.myTodos.push(data);
    localStorage.setItem('myTodos', JSON.stringify(this.myTodos));
  }

  ngOnInit(): void {
    let tmp: any = localStorage.getItem('myTodos');
    this.myTodos = JSON.parse(tmp) || [];
  }

  deleteMyTodos(id: number) {
    this.myTodoCorbeille.push(this.myTodos[id]);
    localStorage.setItem('myTodoCorbeille', JSON.stringify(this.myTodoCorbeille));



    this.myTodos.splice(id, 1);
    localStorage.setItem('myTodos', JSON.stringify(this.myTodos));
  }

}
