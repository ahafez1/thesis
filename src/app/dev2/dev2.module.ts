import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dev2PageRoutingModule } from './dev2-routing.module';

import { Dev2Page } from './dev2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dev2PageRoutingModule
  ],
  declarations: [Dev2Page]
})
export class Dev2PageModule {}
