import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseTypeComponent } from '../choose-type.component';

const routes: Routes = [
  {
    path:'',
    component:ChooseTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChooseTypeRoutingModule { }
