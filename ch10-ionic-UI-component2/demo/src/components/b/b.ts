import { Component } from '@angular/core';

/**
 * Generated class for the BComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'b',
  templateUrl: 'b.html'
})
export class BComponent {

  text: string;

  constructor() {
    console.log('Hello BComponent Component');
    this.text = 'Hello World';
  }

}
