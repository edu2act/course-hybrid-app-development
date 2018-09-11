import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular';
  txt:string;
  arr:number[] = [1,2,3,4,5];
  fun(e){
    this.title = 'hello angular';
    if(e.keyCode==13){
      // this.arr.push(this.txt) //这句话会报错，因为数组元素的类型不一致
    };
  }
  del(idx:number){
    this.arr.splice(idx,1);
  }
}