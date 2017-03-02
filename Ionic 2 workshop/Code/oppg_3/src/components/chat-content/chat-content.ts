import { Component } from '@angular/core';

/*
  Generated class for the ChatContent component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'chat-content',
  templateUrl: 'chat-content.html'
})
export class ChatContentComponent {

  text: string;

  constructor() {
    console.log('Hello ChatContent Component');
    this.text = 'Hello World';
  }

}
