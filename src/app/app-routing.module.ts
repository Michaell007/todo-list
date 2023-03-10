import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorbeilleComponent } from './corbeille/corbeille.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: 'corbeille', component: CorbeilleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
