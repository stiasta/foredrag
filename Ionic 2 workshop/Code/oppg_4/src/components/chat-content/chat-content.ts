import { ChatbotService } from './../../providers/chatbot-service';
import { Component, OnInit } from '@angular/core';

/*
  Generated class for the ChatContent component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
    selector: 'chat-content',
    templateUrl: 'chat-content.html'
})
export class ChatContentComponent implements OnInit {

    text: string[] = [];

    constructor(private service: ChatbotService) {
    }

    ngOnInit() {
        this.service
            .getAnswers()
            .subscribe(text => this.text.push(text));
    }
}
