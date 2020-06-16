import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    component: ViewComponent,
    path: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
