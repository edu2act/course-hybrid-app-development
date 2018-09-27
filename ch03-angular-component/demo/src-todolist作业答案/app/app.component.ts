import { Component, SimpleChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  txt:string;
  counter:number = 0;
  arr:Msg[]=[];
  getValue(e){
    if(e.keyCode == 13){
      this.arr.push(new Msg(this.txt,false));
      this.txt = '';
      this.count();
    }
  }
  count(){
    this.counter = 0;
    this.arr.forEach( (value,index)=>{
      if(value.done){
        this.counter++;
      }
    } );
  }
  delete(idx){
    this.arr.splice(idx,1);
    this.count();
  }
  change(idx){
    this.arr[idx].done = !this.arr[idx].done;
    this.count();
  }
}
export class Msg{
  constructor(public title:string,public done:boolean) {}
}
