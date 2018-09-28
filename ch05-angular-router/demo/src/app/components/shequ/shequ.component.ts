import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.router.snapshot.queryParams['id'])
  }

}
