import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dev1Page } from './dev1.page';

const routes: Routes = [
  {
    path: '',
    component: Dev1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dev1PageRoutingModule {}
