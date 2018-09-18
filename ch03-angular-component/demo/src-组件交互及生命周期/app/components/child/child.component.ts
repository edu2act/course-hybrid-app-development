import { Component,EventEmitter, OnInit, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{

  @Input() arr:Array<any>;
  @Input() arr1:Array<any>;
  @Output() delIndex:EventEmitter<number> = new EventEmitter<number>();
  del(i){
    this.delIndex.emit(i);
  }
  index = 0;
  log(msg){
    console.log(`这是${this.index++}次调用,调用的钩子函数是${msg}`);
  }
  constructor() {
    // this.log("constructor")
    // console.log(this.arr);
  }
  ngOnChanges(changes: SimpleChanges) {
    // 检测输入属性的变化
    // this.log('ngOnChanges')
    // console.log(changes);
    for(let item in changes){
      // console.log(changes[item].currentValue);
      for(let i in changes[item]){
        console.log(`属性名是${i},属性值是${changes[item][i]}`)
      }
    }

  }
  ngOnInit() {
    // 进行数据初始化
    // this.log('ngOnInit')
    // console.log(this.arr);

  }
  ngDoCheck(): void {
    // this.log('ngDoCheck')
  }
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



