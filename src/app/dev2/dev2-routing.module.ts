import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dev2Page } from './dev2.page';

const routes: Routes = [
  {
    path: '',
    component: Dev2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dev2PageRoutingModule {}
