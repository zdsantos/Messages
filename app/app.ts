import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Fireb } from './util/fireb';

// import {FIREBASE_PROVIDERS,
//   defaultFirebase,
//   AngularFire,
//   AuthMethods,
//   AuthProviders,
//   firebaseAuthConfig} from 'angularfire2';

import { LoginPage } from './pages/login/login';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(public platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp, [Fireb]);
