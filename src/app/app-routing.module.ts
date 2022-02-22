import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatefulComponent } from './stateful/stateful.component';

const routes: Routes = [
  {path:'', component: StatefulComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
