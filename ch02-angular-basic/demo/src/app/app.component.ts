import { Component,Optional } from '@angular/core';
import { GetdataService } from './services/getdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public getdata:GetdataService){

  }


  list1=[];
  list2=[];
  getD(d){
    this.list1.push(d);
  }









  // haha = [1,2,3,5,6,'a'];
  // // 插值表达式
  // title = 'hello world';
  // imgUrl = 'assets/imgs/m1.png';
  // // 绑定属性
  // id = 'box';
  // // 循环
  // arr = [1,2,3,4,'a','b'];


  // str:string = 'abc';
  // // changeStr(e){
  // //   this.str = e.target.value;
  // // }


  // fn(e){
  //   console.log(e.target.innerHTML);
  //   this.arr = []
  // }
  // // ngSwitch
  // fruit:any = '苹果';
  // changeFruit(v){
  //   this.fruit = v;
  // }

  // // 双向数据绑定
  // txt = '新年快乐';

  // // todolist
  // tolist = [];
  // comlist = [];
  // content = '';
  // addData(){
  //   this.tolist.push(this.content);
  //   this.content = '';
  // }
  // keyData(e){
  //   if(e.keyCode==13){
  //     this.tolist.push(this.content);
  //     this.content = '';
  //   }
  // }
  // delData(i){
  // 	this.tolist.splice(i,1);
  // }
  // change(i){
  //   this.comlist.push(this.tolist[i])
  //   this.tolist.splice(i,1);
  // }
  // delData2(i){
  // 	this.comlist.splice(i,1);
  // }
  // change2(i){
  //   this.tolist.push(this.comlist[i])
  //   this.comlist.splice(i,1);
  // }
  // // 组件交互
  // arr1 = [1,2,3,4];
  // goodslist = ['a','b','c','d','e','f'];

  // agreed = 0;
  // disagreed = 0;
  // voters = ['张三', '李四', '王五','刘'];
 
  // onVoted(agre) {
  //   agre ? this.agreed++ : this.disagreed++;
  // }

  // data:string;
  // dataArr = [];
  // dataA = [];

  // add(){
  //   this.dataArr.push(this.data);
  //   this.data = '';
  // }
  // changeData(i){
  //   this.dataA.push(this.dataArr[i]);
  //   this.dataArr.splice(i,1);
  // }
  // arrD=[1,2,3,4,5,6];
  // idx:number=-1;
  // getI(ww){
  //   this.idx = ww;
  // }
// todolist
  // tolist=[];
  // comlist=[];
  // getData(data){
  //   this.tolist.push(data);
  // }
  // getIndex(e){
  //   this.comlist.push(this.tolist[e]);
  //   this.tolist.splice(e,1);
  // }
  //a
  con;
  arrData = [1,2,3,4,5];
  getI(e){
    this.con = e;
  }
  num = 200;
}
