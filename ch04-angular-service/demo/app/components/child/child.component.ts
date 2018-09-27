import { Component,EventEmitter, OnInit, Input, Output, SimpleChanges, OnChanges } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  // @Input() arr:Array<any>;
  // @Input() arr1:Array<any>;
  // @Output() delIndex:EventEmitter<number> = new EventEmitter<number>();
  // del(i){
  //   this.delIndex.emit(i);
  // }
  // index;
  // log(msg){
  //   console.log(`这是${this.index++}次调用,调用的钩子函数是${msg}`);
  // }
  constructor(private share:ShareService) {
    // this.log("constructor")
    // console.log(this.arr);
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   // 检测输入属性的变化
  //   this.log('ngOnChanges')
  //   // console.log(changes);
  //   // for(let item in changes){
  //   //   // console.log(changes[item].currentValue);
  //   //   for(let i in changes[item]){
  //   //     console.log(`属性名是${i},属性值是${changes[item][i]}`)
  //   //   }
  //   // }

  // }
  // message:string;
  arr;
  ngOnInit() {
    this.arr = this.share.data;
    // 进行数据初始化
    // this.index = 0;
    // this.message = 'hello';
    // this.log('ngOnInit')
    // console.log(this.arr);

  }
  // ngDoCheck(): void {
  //   this.log('ngDoCheck')
  // }
  // ngAfterContentChecked(){
  //   this.log('ngAfterContentChecked')
  // }
  // ngAfterContentInit(){
    
  //   this.log('ngAfterContentInit');
  // }
  // ngAfterViewInit(){
  //   this.log('ngAfterViewInit');
  // }
  // ngAfterViewChecked(){
  //   this.log('ngAfterViewChecked');
  // }
}






