import { Injectable } from '@angular/core';

@Injectable()
export class GetdataService {

  constructor() { }

  list = [];
  addData(num:number){

    this.list.push(num);
  }


  index;
  getIndex(i){
    this.index = i;
  }
}
