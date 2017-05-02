import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import * as firebase from 'firebase';

import { AuthService } from '../providers/auth-service';
import { OrderService } from './../providers/order-service';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { FulfillmentPage } from '../pages/fulfillment/fulfillment';
import { WelcomePage } from '../pages/welcome/welcome';
import { AccountsPage } from '../pages/accounts/accounts';
import { AwbPage } from '../pages/awb/awb';
import { TrackingPage } from '../pages/tracking/tracking';
import { DropshipPage } from '../pages/dropship/dropship';
import { InvoicesPage } from '../pages/invoices/invoices';
import { LocationsPage } from '../pages/locations/locations';
import { SettingsPage } from '../pages/settings/settings';
import { NotificationsPage } from '../pages/notifications/notifications';

import { SKUModal } from '../pages/fulfillment/sku-modal/sku-modal';
import { OrderModal } from '../pages/fulfillment/order-modal/order-modal';
import {AccountModal} from '../pages/accounts/account-modal/account-modal';
import {NewaccountModal} from '../pages/accounts/newaccount-modal/newaccount-modal';
import { NewSKU } from '../pages/fulfillment/new-sku/new-sku';
import {DropModPage} from '../pages/dropship/dropmod/dropmod';
import {SpecificDrop} from '../pages/dropship/specificdrop/specificdrop';
import {InvoiceModal} from '../pages/invoices/invoice-modal/invoice-modal';

//Other modules
import { AllPipes } from '../pages/fulfillment/pipe.module';
import { AllPopovers } from '../pages/fulfillment/new-sku/popovers.module';
//import { RouterModule, Routes } from '@angular/router';
//import { AppRoutingModule } from './app.routing';

// Must export the config
export const firebaseConfig = {
    apiKey: "your_key",
    authDomain: "your_auth_domain",
    databaseURL: "your_url",
    storageBucket: "your_storage",
    messagingSenderId: "your_id"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    FulfillmentPage,
    WelcomePage,
    AccountsPage,
    DropshipPage,
    InvoicesPage,
    LocationsPage,
    SettingsPage,
    NotificationsPage,
    SKUModal,
    OrderModal,
    AccountModal,
    InvoiceModal,
    NewaccountModal,
    NewSKU,
    AwbPage,
    TrackingPage,
    SpecificDrop,
    DropModPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    AllPipes,
    AllPopovers
    //AppRoutingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    FulfillmentPage,
    WelcomePage,
    AccountsPage,
    DropshipPage,
    InvoicesPage,
    LocationsPage,
    SettingsPage,
    NotificationsPage,
    SKUModal,
    OrderModal,
    AccountModal,
    InvoiceModal,
    NewaccountModal,
    NewSKU,
    AwbPage,
    TrackingPage,
    DropModPage,
    SpecificDrop
  ],
  providers: [
    OrderService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
