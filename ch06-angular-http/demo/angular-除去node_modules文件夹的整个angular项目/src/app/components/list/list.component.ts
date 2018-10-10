import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Msg } from '../parent/parent.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() arr:Msg[]=[];
  @Output() delIndex:EventEmitter<number> = new EventEmitter<number>();
  @Output() changeIndex:EventEmitter<number> = new EventEmitter<number>();
  counter:number = 0;
  delete(i){
    this.delIndex.emit(i);
    this.count();
  }
  change(i){
    this.changeIndex.emit(i);
    this.count();
  }
  count(){
    this.counter = 0;
    this.arr.forEach( (value,index)=>{
      if(value.done){
        this.counter++;
      }
    } );
  }
}
