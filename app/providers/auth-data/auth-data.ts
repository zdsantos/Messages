import {FacebookLogin} from '../../util/facebook-login';
import {Injectable} from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthData {

  public fireAuth: firebase.auth.Auth;
  public userProfile: any;

  constructor() {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('/userProfile');
  }

  login(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  loginWithFacebook() {
    FacebookLogin.login( (authResponse) => {
      // error: credential is not a method
      var credential = new firebase.auth.FacebookAuthProvider().credential(authResponse.accessToken);
      this.fireAuth.signInWithCredential(credential).then( (response) => {
        alert(response.email);
      }, (error) => {
        alert(error);
      });
    }, (error) => {
      alert("face error" + error);
    });

  }

  signUp(email: string, password: string): any {
    return this.fireAuth.createUserWithEmailAndPassword(email, password).then((user) => {
      this.login(email, password).then((authenticatedUser) => {
        this.userProfile.child(authenticatedUser.uid).set({email: email});
      });
    });

  }

  resetPassword(email: string): any {
    return this.fireAuth.sendPasswordResetEmail(email);
  }

  logout(): any {
    this.fireAuth.signOut();
  }

}

