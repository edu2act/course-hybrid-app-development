import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { APage } from './a';

@NgModule({
  declarations: [
    APage,
  ],
  imports: [
    IonicPageModule.forChild(APage),
  ],
})
export class APageModule {}
