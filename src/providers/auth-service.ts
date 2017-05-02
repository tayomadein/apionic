import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  public fireAuth: any; //For authentication
  public userData: any; //To hold user data

  /**
  * The constructor function initializes fireAuth and userData
  * @param http (Http) public http: Http The constructor was auto generated with this param from the ionic CLI. Used for communication
  */
  constructor() {
    //console.log('Hello AuthService Provider');
    this.fireAuth = firebase.auth();
    this.userData = firebase.database().ref('/userData');
  }

  /**
    * Function to sign in using an email and password.
    * @param email (string) The user's email address
    * @param password (string) The user's password
    * @return A firebase Promise that contains a non-null User
    * @author Omotayo Madein
    */
  doLogin(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  /**
    * Function to register a new user using an email and password.
    * @param email (string) The user's email address
    * @param password (string) The user's password
    * @return A firebase Promise that contains a non-null User
    * @author Omotayo Madein
    */
  register(email: string, password: string): any {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then((newUser) => {
        this.userData.child(newUser.uid).set({email: email});
      });
  }

  /**
    * Function to sign out current user.
    * @return A void firebase Promise
    * @author Omotayo Madein
    */
  doLogout(): any {
    return this.fireAuth.signOut();
  }
}