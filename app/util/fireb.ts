import {Injectable} from '@angular/core';

/*
    firebase está sendo importado como .js, então .ts não o reconhece
    com essa linha ele diz pra "não verificar o tipo e somente usar"
*/
declare var firebase: any;

@Injectable()
export class Fireb {
    
    contructor() {
        var config = {
            apiKey: "AIzaSyCMW9hrfBIzgEdcUm-IYWSu07KUHzo00kw",
            authDomain: "messages-a9e9a.firebaseapp.com",
            databaseURL: "https://messages-a9e9a.firebaseio.com",
            storageBucket: "messages-a9e9a.appspot.com"
        };
        firebase.initializeApp(config);
    }

    login(token: string, successCallback, errorCallback) {
        
        let credential = firebase.auth.FacebookAuthProvider.credential(token);

        firebase.auth.signInWithCredential(credential).then(
            (response) => { successCallback(response); },
            (error) => { errorCallback("Firebase error:\n" + error); }
        )
    }
}
