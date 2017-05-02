import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { LoginPage } from '../../pages/login/login';
import { AuthService } from '../../providers/auth-service';

/*
  Generated class for the Awb page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-awb',
  templateUrl: 'awb.html'
})
export class AwbPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {
    //Checks that a user is signed in, else redirect to the Login Page
    firebase.auth().onAuthStateChanged(function (user) {
      console.log(user);
      if (!user) {
        navCtrl.setRoot(LoginPage);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AwbPage');
  }

  /**
  * Function to Logout current user
  * @author Omotayo Madein
  */
  logout() {
    this.authService.doLogout();
  }

}
