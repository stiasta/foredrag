import { ChatbotService } from './../../providers/chatbot-service';
import { Component } from '@angular/core';
import { SpeechRecognition } from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(
        public navCtrl: NavController,
        private service: ChatbotService) {

    }

    start() {
        SpeechRecognition
            .hasPermission()
            .then(hasPermission => {
                if (hasPermission) {
                    SpeechRecognition
                        .startListening({ language: 'nb-NO' })
                        .subscribe(matches => {
                            if (matches && matches.length > 0) {
                                this.service.ask(matches[0]).subscribe();
                            }
                        });
                } else {
                    SpeechRecognition.requestPermission();
                }
            })
    }

    end() {
        SpeechRecognition.stopListening();
    }
}
