import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }
  txt:string;
  @Output() outValue:EventEmitter<string> = new EventEmitter<string>();
  getValue(e){
    if(e.keyCode == 13&&this.txt){
      this.outValue.emit(this.txt);
      this.txt = '';
    }
  }
  ngOnInit() {
  }

}
