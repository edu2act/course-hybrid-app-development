import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  log(msg){
    console.log(msg)
  }
  constructor() { }
}
