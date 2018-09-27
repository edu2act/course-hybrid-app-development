import { Component, OnInit, Host, Optional } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ShareService } from '../../services/share.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor(private share:ShareService,private local:CommonService) {}
  add(){
    this.share.add(100)
  }
  data;
  data1 = ['a','b','c','d'];
  del(i){
    this.data.splice(i,1);
    // this.local.set('list',this.data);
  }
  ngOnInit(){
    // if(this.local.get('list')){
    //   this.data = this.local.get('list').split(',');
    // }else{
    //   this.data = [1,2,3,4,5,6,7];
    // }
  }




}
