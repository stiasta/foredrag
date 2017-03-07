import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { ReplaySubject } from 'rxjs/ReplaySubject'
import 'rxjs/add/operator/map';

/*
  Generated class for the ChatbotService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ChatbotService {
    private questionAndAnswerEmitter = new ReplaySubject<string>(1);
    constructor(public http: Http) {
    }

    ask(question: string) {
        this.questionAndAnswerEmitter.next(question);
        const params = new URLSearchParams();
        params.append('unikId', 'testId1');
        params.append('text', question);
        return this.http
            .get('http://10.0.0.217:81/api/ElseChat', {
                search: params
            })
            .map(response => {
                const answer = response.text();
                this.questionAndAnswerEmitter.next(answer);
                return answer;
            });
    }

    getAnswers() {
        return this.questionAndAnswerEmitter.asObservable();
    }

}
