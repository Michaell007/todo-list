import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListTodosComponent,
    CorbeilleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
