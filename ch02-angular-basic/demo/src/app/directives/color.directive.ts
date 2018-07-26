import { Directive,ElementRef,Input } from '@angular/core';
@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  @Input() appColor;
  @Input() width;
  constructor(public el:ElementRef) {
  }
  ngOnInit(){
    for(let item in this.appColor){
      this.el.nativeElement.style[item]=this.appColor[item];
    }
    this.el.nativeElement.style.width = this.width;
  }


}
