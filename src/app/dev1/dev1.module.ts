import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dev1PageRoutingModule } from './dev1-routing.module';

import { Dev1Page } from './dev1.page';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        Dev1PageRoutingModule,
        ChartsModule,

    ],
    declarations: [Dev1Page]
})
export class Dev1PageModule { }
