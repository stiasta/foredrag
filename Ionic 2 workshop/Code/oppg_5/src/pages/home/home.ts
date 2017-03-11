import { Component } from '@angular/core';
import { SpeechRecognition } from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }

    start() {
        SpeechRecognition.startListening({ language: 'nb-NO' })
    }

    end() {
        SpeechRecognition.stopListening();
    }
}
