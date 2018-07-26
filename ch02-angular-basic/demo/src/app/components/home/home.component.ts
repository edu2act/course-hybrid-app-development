import { Component, OnInit } from '@angular/core';
import { Http,Headers,Jsonp,RequestOptions } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public route:ActivatedRoute) { }
  ngOnInit() {
    this.route.queryParams.subscribe(data=>{
      console.log(data);
    });
  }
  con;
  arrData = [1,2,3,4,5];
  getI(e){
    this.con = e;
  }
  user={
    'firstname':'',
    'lastname':''
  };
  str:string;
  submit(a){
    console.log(a);
  }
  date =  new Date();
}
