import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CPage } from './c';

@NgModule({
  declarations: [
    CPage,
  ],
  imports: [
    IonicPageModule.forChild(CPage),
  ],
})
export class CPageModule {}
