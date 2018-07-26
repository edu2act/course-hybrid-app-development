import { Component,Optional,Host, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GetdataService } from '../../services/getdata.service';
@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
  // providers:[GetdataService]
})
export class AComponent implements OnInit {
  constructor(@Optional() public getdata:GetdataService) {

  }

  @Input() arrData:Array<any>;
  @Output() getIndex = new EventEmitter();
  num:number;
  ngOnInit() {

  }
 
  fn(i){
    this.getIndex.emit(i);
  }
}
