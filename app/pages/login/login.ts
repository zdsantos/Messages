import {AuthData} from '../../providers/auth-data/auth-data';
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FacebookLogin} from '../../util/facebook-login';
import * as firebase from 'firebase';

import { HomePage } from '../home/home';

@Component({
    templateUrl: 'build/pages/login/login.html',
    providers: [AuthData]
})
export class LoginPage {
    user: {email: string, password: string};

    constructor(private nav: NavController, private authProvader: AuthData) { }
    
    login() {
        // FacebookLogin.login(
        //     (response) => {
        //         this.fireb.login(response.accessToken,
        //             () => { alert('sucesso'); },
        //             (error) => { alert(error); }
        //         );
        //     },
        //     (error) => { alert(error.errorMessage); }
        // );
        
        // var provider = new firebase.auth.FacebookAuthProvider();

    }

    loginWithFacebook() {
        this.authProvader.loginWithFacebook();
    }

    signUp() {
        this.authProvader.loginWithFacebook();
    }

    resetPassword() {
        this.authProvader.loginWithFacebook();
    }
}
