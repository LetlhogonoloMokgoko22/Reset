;
import { ResetpwdPage } from './../pages/resetpwd/resetpwd';
import { RegisterPageModule } from './../pages/register/register.module';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import firebase from 'firebase'
import { AuthServiceProvider } from '../providers/auth-service/auth-service';


 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyC_8Lx3nWEwzZeNESUGyRLwUu0UqQYYdqI",
  authDomain: "email-reset-818d8.firebaseapp.com",
  databaseURL: "https://email-reset-818d8.firebaseio.com",
  projectId: "email-reset-818d8",
  storageBucket: "email-reset-818d8.appspot.com",
  messagingSenderId: "257010433414"
};


firebase.initializeApp(config);








@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    
  ]
})
export class AppModule {}
