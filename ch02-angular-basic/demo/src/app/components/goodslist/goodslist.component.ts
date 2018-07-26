import { Component,Optional, OnInit, Input } from '@angular/core';
import { GetdataService } from '../../services/getdata.service';
import { Router} from '@angular/router'; 
import { Http,Headers,Jsonp } from '@angular/http';
import {Observable} from "rxjs";
import "rxjs/Rx";
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {
  constructor(public jsonp:Jsonp,public http:Http,public router:Router,@Optional() public getdata:GetdataService) { 
  }
  // @Input() list:number[];
  list:number[] = [1,2,3,4,5];
  headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  // options = new RequestOptions({headers:this.headers});
  ngOnInit() {
    // this.http.get('http://datainfo.duapp.com/shopdata/getGoods.php').subscribe(data=>{
    //   console.log(data['_body']);
    //   // this.list = JSON.parse(data['_body']);
    // },err=>{
    //   console.log(err);
    // });

    // this.jsonp.get('http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK').subscribe(data=>{
    //   console.log(data['_body']);
    //   this.list = data['_body'];
    // },err=>{
    //   console.log(err);
    // });

    this.http.post('http://datainfo.duapp.com/shopdata/getclass.php',JSON.stringify({}),{headers:this.headers}).filter(data=>{
      return data.status === 200;
    }).map(data=>data.json()).subscribe(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    })
  }
  goDetail(idx){
    this.router.navigate(['/goodslist/gooddetail',idx],{queryParams:{id:100,n:200}});
  }
  
}
