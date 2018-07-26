import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'num'
})
export class NumPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    


    return (value+100)*args;
  }

}
