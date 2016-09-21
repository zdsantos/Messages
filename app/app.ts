import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import * as firebase from 'firebase';

import { LoginPage } from './pages/login/login';
import { HomePage } from './pages/home/home';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(public platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });

    this._initFirebase();

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.rootPage = HomePage;
      } else {
        this.rootPage = LoginPage;
      }
    })
  }

  _initFirebase() {
    var config = {
      apiKey: "AIzaSyCMW9hrfBIzgEdcUm-IYWSu07KUHzo00kw",
      authDomain: "messages-a9e9a.firebaseapp.com",
      databaseURL: "https://messages-a9e9a.firebaseio.com",
      storageBucket: "messages-a9e9a.appspot.com"
    };
    firebase.initializeApp(config);
  }

}

ionicBootstrap(MyApp);
