import { Component, OnInit, Host, Optional } from '@angular/core';
import { CommonService } from '../../services/common.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor(private local:CommonService) {}
  
  data:Msg[];
  ngOnInit(){
    if(this.local.get('todo')){
      this.data = JSON.parse(this.local.get('todo'));
    }else{
      this.data = [];
    }
  }
  addData(e){
    this.data.push(new Msg(e,false));
    this.local.set('todo',JSON.stringify(this.data));
  }
  del(idx){
    this.data.splice(idx,1);
    this.local.set('todo',JSON.stringify(this.data));
  }
  change(idx){
    this.data[idx].done = !this.data[idx].done;
    this.local.set('todo',JSON.stringify(this.data));
  }


}
export class Msg{
  constructor(public title:string,public done:Boolean){}
}
