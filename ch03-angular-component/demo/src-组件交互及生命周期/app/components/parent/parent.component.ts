import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  data = [1,2,3,4,5,6];
  data1 = ['a','b','c','d'];
  del(i){
    console.log(i);
    this.data.splice(i,1);
  }
  constructor() { }
  ngOnInit(){
    // setTimeout(()=>{
    //   this.data = this.data1;
    // },3000)
    // setInterval(()=>{
    //   this.data.push(2);//data是引用类型，这种情况地址没有变，ngOnChanges检测不到
    // },1000);
  }

}
