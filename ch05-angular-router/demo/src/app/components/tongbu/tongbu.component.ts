import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router) { }
  courseId:number;
  ngOnInit() {
    //参数快照
    // this.courseId = this.router.snapshot.params['courseId'];
    //参数订阅
    this.router.params.subscribe((params)=>{
      this.courseId = params['courseId'];
    });
  }

  go(){
    //js跳转
    this.route.navigate(['/tongbu',600],{queryParams:{id:1000}});
  }

}
