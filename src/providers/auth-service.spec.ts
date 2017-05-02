// import { inject, TestBed } from '@angular/core/testing';
// import { Subject } from 'rxjs/Subject';
// import firebase from 'firebase';
// import { AuthProviders, AuthMethods, AngularFireAuth, FirebaseAuthState } from 'angularfire2';
// import { AuthService } from './auth-service';


// const fbAuthMethods = [
//   'subscribe'
//   // ... etc
// ];

// const myFirebaseAuthConfig = {
//   provider: AuthProviders.Password,
//   method: AuthMethods.Password
// }

// export const firebaseConfig = {
//     apiKey: "AIzaSyDz3zohwtisDeRphGlEEPgK0O0SSZI2zqE",
//     authDomain: "apionic-40a0d.firebaseapp.com",
//     databaseURL: "https://apionic-40a0d.firebaseio.com",
//     storageBucket: "apionic-40a0d.appspot.com",
//     messagingSenderId: "16432555693"
// };

// firebase.initializeApp(firebaseConfig);


// describe('auth/', () => {
//   describe('AuthService', () => {
//     let authService;
//     let authSubject;
//     let mockFirebaseAuth;

//     beforeEach(() => {
//       authSubject = new Subject<FirebaseAuthState>();

//       mockFirebaseAuth = jasmine.createSpyObj('fbAuth', fbAuthMethods);
//       mockFirebaseAuth.subscribe.and.callFake(callback => {
//         authSubject.subscribe(callback);
//       });

//       TestBed.configureTestingModule({
//         providers: [
//           {provide: AngularFireAuth, useValue: mockFirebaseAuth},
//           AuthService
//         ]
//       });

//       inject([AuthService], (service: AuthService) => {
//         authService = service;
//       })();
//     });

//     it('should be defined', () => {
//       expect(authService).toBeDefined();
//     });

//     it('should return a user object', () =>{
//         let email = '';
//         let password = '';

//         expect(typeof authService.doLogin(email, password)).toBe('object');
//     });

//     //testData.forEach((test) => {

//     //});

//     // it('should subscribe to auth state changes', () => {
//     //   expect(authService.authState).toBe(null);

//     //   let authData = {
//     //     uid: '12345',
//     //     provider: AuthProviders.Password,
//     //     auth: {
//     //       displayName: 'John Doe',
//     //       //providerId: 'github.com'
//     //     }
//     //   } as FirebaseAuthState;

//     //   authSubject.next(authData);
//     //   expect(authService.authState).toBe(authData);
//     // });
//   });
// });


// //     /** it('doLogin(email, password) should return a logged in User', () => {

// //         let result = authService.getAnswers();

// //         expect(Array.isArray(result)).toBeTruthy;
// //         expect(result.length).toBeGreaterThan(0);
// //     });

// //     it('register(email, password) should return a non-null User', () => {
// //         expect(typeof authService.getRandomAnswer()).toBe('string');
// //     });

// //     it('should have both yes and no available in result set', () => {

// //         let result = authService.getAnswers();

// //         expect(result).toContain('Yes');
// //         expect(result).toContain('No');

// //     });

// // });**/