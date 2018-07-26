import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  @Output() outIndex = new EventEmitter();
  @Input() tolist:Array<string>;
  @Input() comlist:Array<string>;
  change(e){
    this.outIndex.emit(e);
  }
}
