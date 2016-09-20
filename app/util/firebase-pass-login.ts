import {FirebaseAuth, AuthProviders, AuthMethods} from 'angularfire2';

export class FirebasePassLogin {
    auth: FirebaseAuth;
    user: {email: string, password: string};

    login(successCallback, errorCallback) {
        // this.auth.createUser(this.user).then((authData) => {
        //     successCallback(authData);
        // }).catch((error) => {
        //     errorCallback(error);
        // });
        
        if(this.user) {
            this.auth.login(this.user, {
                provider: AuthProviders.Password,
                method: AuthMethods.Password
            }).then((authData) => {
                successCallback(authData);
            }).catch((error) => {
                errorCallback(error);
            });
        } else {
            errorCallback('The user property was not defined.');
        }
    }
}
