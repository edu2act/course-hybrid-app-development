import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BPage } from './b';

@NgModule({
  declarations: [
    BPage,
  ],
  imports: [
    IonicPageModule.forChild(BPage),
  ],
})
export class BPageModule {}
