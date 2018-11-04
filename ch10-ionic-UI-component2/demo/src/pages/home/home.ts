import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { APage } from '../a/a';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('ac') ac;
  icons:string="camera";
  constructor(public navCtrl: NavController) {
  }
  goSub(){
    this.navCtrl.push(APage,{id:1});
  }
  ionViewDidLoad(){
    this.ac.get();
  }

}
