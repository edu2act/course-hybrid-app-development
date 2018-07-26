import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {
  @Input() name:string;
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;
 
  vote(ag) {
    this.onVoted.emit(ag);
    this.voted = true;
  }
  constructor(public router:ActivatedRoute) { }

  ngOnInit() {
    

  }

}
