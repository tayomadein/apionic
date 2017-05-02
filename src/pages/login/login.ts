import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, LoadingController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { WelcomePage } from '../welcome/welcome';
import { FulfillmentPage } from '../fulfillment/fulfillment';
import { User } from './user.interface';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loginForms: any = 'login'; //value for selecting segments
  public loginForm;
  email: string;
  password: string;
  submitAttempt: boolean = false;
  loading: any;
  public user: User;


  /**
  * @param navCtrl (NavController) The constructor was auto generated with this param from the ionic CLI. Used to access navigation properties.
  * @param navParams (NavParams) holds user data for Welcome Page
  * @param authService (AuthService) Helps to perform login tasks
  * @param alertCtrl (AlertController) Used to control alerts to user
  * @param loadingCtrl (LoadingController) Controls loading view 
  */
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    // initialize user
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      checkbox: false
    }
  }
  
  save(f: User, isValid: boolean) {
    
  }


  /**
  * Function to login existing user
  * @author Omotayo Madein
  */
  loginUser(){
    this.submitAttempt = true;

    this.authService.doLogin(this.email, this.password).then( authService => {
    this.navCtrl.setRoot(FulfillmentPage);
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });

      this.loading = this.loadingCtrl.create({
        content: "Logging in...",
        dismissOnPageChange: true,
      });
      this.loading.present();
  }


  /**
  * Function to register new user
  * @author Omotayo Madein
  */
  registerUser(){
    this.submitAttempt = true;

    this.authService.register(this.email, this.password).then(authService => {
      this.navCtrl.setRoot(FulfillmentPage);
    }, error => {
      this.loading.dismiss().then(() => {
        let alert = this.alertCtrl.create({
          message: error.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });

    this.loading = this.loadingCtrl.create({
      content: "Creating your account...",
      dismissOnPageChange: true,
    });
    this.loading.present();
  }

}