import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  data:Array<any> = [1,2,3];
  add(msg){
    this.data.push(msg);
  }
  constructor() { }
}
