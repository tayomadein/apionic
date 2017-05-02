// import { TestBed, ComponentFixture, async, inject } from '@angular/core/testing';
// import { IonicModule, Nav } from 'ionic-angular';
// import { MyApp } from './app.component';
// import { LoginPage } from '../pages/login/login';
// let comp: MyApp;
// let fixture: ComponentFixture<MyApp>;

// // This page tests functions in the app.component that controls the application globally unless otherwise stated

// describe('Component: Root Component', () => {

//     beforeEach(async(() => {

//         TestBed.configureTestingModule({

//             declarations: [MyApp],

//             providers: [

//             ],

//             imports: [
//                 IonicModule.forRoot(MyApp)
//             ]

//         }).compileComponents();

//     }));
//     beforeEach(() => {
//         fixture = TestBed.createComponent(MyApp);
//         comp = fixture.componentInstance;

//     });

//     //    afterEach(() => {
//     //      fixture.destroy();
//     //    comp = null;
//     // });

//     it('is created', () => {
//         expect(fixture).toBeTruthy();
//         expect(comp).toBeTruthy();

//     });
//     it('initialises with a root page of LoginPage', () => {
//         expect(comp['rootPage']).toBe(LoginPage);
//     });
    
//     it('to set root to login', () => {
//         //let page = LoginPage;
//         let page = comp.pages[0];
//         let result = comp.openPage(page);
        
//        // expect(result['Nav.setRoot']).toBe(LoginPage);
//         //expect(typeof result).toBe('Component');
//         // expect(result[comp.nav._componentName]).toBe(LoginPage);
//          expect(result).toBeDefined();
//     });
// });
