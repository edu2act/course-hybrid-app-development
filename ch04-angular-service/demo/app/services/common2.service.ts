import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { LogService } from './log.service';

@Injectable()
export class Common2Service implements CommonService{
  set(key,value){
    this.log.log('set');
    localStorage.setItem(key,value);
  }
  get(key){
    this.log.log('get方法调用了');
    return localStorage.getItem(key);
  }

  constructor(private log:LogService) { }


}
