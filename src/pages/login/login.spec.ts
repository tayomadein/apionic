// import { TestBed, ComponentFixture } from '@angular/core/testing';
// import { NavController, AlertController, NavParams, LoadingController } from 'ionic-angular';
// import { AuthService } from '../../providers/auth-service';
// import { LoginPage } from './login';
// import { WelcomePage } from '../welcome/welcome';
// import testData from './testData';

// let loginPage = null;

// describe('Login Page', () => {

//      /**
//         Create an instance of the login page
//     */
//     beforeEach(()=>{
//         let navCtrl: NavController, navParams: NavParams,  authService: AuthService, alertCtrl: AlertController, loadingCtrl: LoadingController;

//         loginPage = new LoginPage(navCtrl, navParams, authService, alertCtrl, loadingCtrl);
//     });

//     //Expect page to be created
//     it('should be created', ()=>{
//         expect(loginPage).toBeTruthy();
//     });

//     //Expect default form segment to be login
//     it('should display default the login segment', ()=>{
//         let segment = loginPage.loginForms;
//         expect(segment).toBe("login");
//     });

//     //Expect Welcome Page
//     // it('should display welcome page', ()=>{
//     //     let segment = loginPage.loginForms;
//     //     expect(segment).toBe("register");
//     // });

//      testData.forEach((test) => {

//         it('should validate the login form (' + test.input.email + ',' + test.input.password + ')', () => {
//             loginPage.email = test.input.email;
//             loginPage.password = test.input.password;
//             loginPage.loginUser();
//             expect(loginPage.formIsValid()).toEqual(test.result.valid);
//         });

//     });


// });