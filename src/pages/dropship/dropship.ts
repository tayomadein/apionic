import { Component } from '@angular/core';
import { NavParams, NavController, ModalController, LoadingController } from 'ionic-angular';
import {DropModPage} from './dropmod/dropmod'; 
import firebase from 'firebase';
import { LoginPage } from '../../pages/login/login';
import { AuthService } from '../../providers/auth-service';
import { SpecificDrop} from './specificdrop/specificdrop';

@Component({
  selector: 'page-dropship',
  templateUrl: 'dropship.html',
})
export class DropshipPage  {
  queryText: string;

  droppers = [
    {
      id: 1,
      name: 'Chioma Jesu',
      phone: '234 80947765',
      email: 'chije@trapmusic.com',
      country: 'Nigeria',
      state: 'Lagos'

    },
    { 
      id: 2,
      name: 'Preye Egwuatu',
      phone: '234 70947765',
      email: 'pgreatu@firstcrew.com',
      country: 'Nigeria',
      state: 'Lagos'
    },
    {
      id: 3,
      name: 'Festus Adesanya',
      phone: '234 809347765',
      email: 'festusmake@settledesign.com',
      country: 'Nigeria',
      state: 'Kogi'
    },
    {
      id: 4,
      name: 'Deola Tingir',
      phone: '234 70947765',
      email: 'deetingir@whiteboard.com',
      country: 'Nigeria',
      state: 'Rivers'
    },
    {
      id: 5,
      name: 'Atairu Yusuf',
      phone: '234 70934343',
      email: 'pgreatu@uinature.com',
      country: 'Nigeria',
      state: 'Abuja'
    },
    {
      id: 6,
      name:  'Fela Olukole',
      phone: '234 700947765',
      email: 'felacole@tracymedia.com',
      country: 'Nigeria',
      state: 'Jos'
    }
  ]

latests = [
  { 
    id: 1,
    name:  'Fela Olukole',
    phone: '234 700947765'
  },
      {
      id: 2,
      name: 'Atairu Yusuf',
      phone: '234 70934343'
      }
]  

  constructor(public navParams: NavParams, 
              public modController: ModalController,
              public navCtrl: NavController,
              public authService: AuthService,
              public loadingController: LoadingController) {
 //Checks that a user is signed in, else redirect to the Login Page
    firebase.auth().onAuthStateChanged(function (user) {
    console.log(user);
    if (!user) {
    navCtrl.setRoot(LoginPage);
    }
    });
}

 /**
  * Function to Logout current user
  * @author Omotayo Madein
  */
  logout() {
      this.authService.doLogout();
  }

  //  openDropped($event, article) {
  //   let modal = this.modalCtrl.create(ArticleComponent, {
  //     let loader = this.loadingController.create
  //     ({content: "Getting Data..",
  //     dimissionOnPageChange: true
  //     });
  //     loader.present();
  //     this.orderApi.getOrderData(order.droppedID)
  //     .subscribe (dropr => this.nav.push())
  //     }
  //   })
  //   modal.present();
  // }

  
    openMod(){
        let modal = this.modController.create(DropModPage);
        modal.present();
        console.log(modal);
        return modal
    }

    openDropped(){
      let NewModal= this.modController.create(SpecificDrop);
      NewModal.present();
      return NewModal
    }

    // getOrders(){
    //   letqueryTextlower = this.queryText.toLowerCase();
    //   let filteredOrders = [];
    //   _.forEach(this.droppers)
    // }

 ionViewDidLoad() {
    console.log('ionViewDidLoad DropshipPage');
  }
   

}


