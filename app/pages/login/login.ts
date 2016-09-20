import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FacebookLogin} from '../../util/facebook-login';
import {Fireb} from '../../util/fireb';

import { HomePage } from '../home/home';

@Component({
    templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
    user: {email: string, password: string};

    constructor(private navCtrl: NavController, private fireb: Fireb) { }
    
    onLogin() {
        FacebookLogin.login(
            (response) => {
                this.fireb.login(response.accessToken,
                    () => { alert('sucesso'); },
                    (error) => { alert(error); }
                );
            },
            (error) => { alert(error.errorMessage); }
        );
    }

}
