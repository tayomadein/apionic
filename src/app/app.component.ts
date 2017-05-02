import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen, Deeplinks } from 'ionic-native';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { FulfillmentPage } from '../pages/fulfillment/fulfillment';
import { AccountsPage } from '../pages/accounts/accounts';
import { DropshipPage } from '../pages/dropship/dropship';
import { InvoicesPage } from '../pages/invoices/invoices';
import { LocationsPage } from '../pages/locations/locations';
import { SettingsPage } from '../pages/settings/settings';
import { NotificationsPage } from '../pages/notifications/notifications';
import { AwbPage } from '../pages/awb/awb';
import { TrackingPage } from '../pages/tracking/tracking';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;


  //rootPage: any = FulfillmentPage;
  rootPage: any = LoginPage;
  
  pages: Array<{ title: string, component: any, name: string }>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Fulfillment', component: FulfillmentPage, name: 'cart' },
      { title: 'Accounts', component: AccountsPage, name: 'people' },
      { title: 'Dropship', component: DropshipPage, name: 'cart' },
      { title: 'Invoices', component: InvoicesPage, name: 'pricetags' },
      { title: 'Locations', component: LocationsPage, name: 'navigate' },
      { title: 'Settings', component: SettingsPage, name: 'settings' },
      { title: 'Notifications', component: NotificationsPage, name: 'text' },
      { title: 'AWB', component: AwbPage, name: 'paper' },
      { title: 'Tracking', component: TrackingPage, name: 'compass' }
    ];
  }
  ngAfterViewInit() {
    this.platform.ready().then(() => {
      // Convenience to route with a given nav
      Deeplinks.routeWithNavController(this.nav, {
        '/fulfillment': FulfillmentPage,
        // '/universal-links-test': AboutPage,
        // '/products/:productId': ProductPage
      }).subscribe((match) => {
        console.log('Successfully routed', match);
      }, (nomatch) => {
        console.warn('Unmatched Route', nomatch);
      });
    })
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    //this.nav.setRoot(this.pages[0].component);
  }
}
