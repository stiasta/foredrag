import { ChatbotService } from './../providers/chatbot-service';
import { ChatContentComponent } from './../components/chat-content/chat-content';
import { ChatInputComponent } from './../components/chat-input/chat-input';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,

    ChatInputComponent,
    ChatContentComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ChatbotService
  ]
})
export class AppModule { }
