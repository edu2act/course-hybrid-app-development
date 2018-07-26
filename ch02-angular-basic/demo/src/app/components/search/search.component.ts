import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  content:string;
  @Output() outData = new EventEmitter();
  keyData(e){
    if(e.keyCode == 13){
      this.outData.emit(this.content);
    }
  }

}
