import { ChatbotService } from './../../providers/chatbot-service';
import { Component } from '@angular/core';

/*
  Generated class for the ChatInput component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
    selector: 'chat-input',
    templateUrl: 'chat-input.html'
})
export class ChatInputComponent {

    inputText: string;

    constructor(private service: ChatbotService) {
    }

    onAsk() {
        this.service.ask(this.inputText).subscribe(
            r => this.inputText = ''
        );
    }
}
