import { Component, OnInit } from '@angular/core';
import { AccountModal } from './account-modal/account-modal';
import { NewaccountModal } from './newaccount-modal/newaccount-modal';
import { NavParams, NavController, ModalController } from 'ionic-angular';
import firebase from 'firebase';
import { LoginPage } from '../../pages/login/login';
import { AuthService } from '../../providers/auth-service';


@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html',
})

export class AccountsPage implements OnInit {
  Items: Array<{}>;
  address:Array<{}>;
  constructor(public navParams: NavParams, public modController: ModalController,public navCtrl: NavController, public authService: AuthService) {
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


  ngOnInit() {
    this.Items = [
      {
        account_id:"390892eiisdjkadakjxt392i2h",
        client_id:"10045",
        username: "Zelda Alonso",
        email: "ZeeA@fa.us",
        number: "+209476537",
        country: "United states",
        city:"North Carolina", 
        street_one:"787 Lakeview St.Marion",
        street_two:"77 Winchester Lane Coachella",
        street_three:"N/A",
        imgsrc: "assets/images/1.jpeg"
      },
      {
        account_id:"475685eiisdjkadakjxt392i2h",
        client_id:"49034",
        username: "Michelle Price",
        email: "MichelleP@fa.us",
        number: "+23476537",
        country: "United states",
        city: "California",
        street_one:"787 Lakeview St.Marion",
        street_two:"77 Winchester Lane Coachella CA 92236",
        street_three:"",
        imgsrc: "assets/images/2.jpg"
      },
      {
        account_id:"23453eiisdjkadakjxt392i2h",
        client_id:"34657",
        username: "Phillip Martins",
        email: "PhillipM@fa.us",
        number: "+209488537",
        country:"Nigeria",
        city:"Lagos",
        street_one:"787 Lakeview St.Marion,NC 28752",
        street_two:"1 N.Cactus Ave.Green Bay, WI 5430",
        street_three:"",
        imgsrc: "assets/images/3.jpeg"
      },
      {
        account_id:"95783",
        client_id:"",
        username: "Kim Yong",
        email: "KimY@fa.us",
        number: "+209476537",
        country:"South Korea",
        city:"Seoul",
        street_one:"787 Lakeview St.Marion,NC 28752",
        street_two:"711 Old York Drive Richmond, VA 23223",
        street_three:"",
        imgsrc: "assets/images/4.jpeg"
      }
    ];
  }


    /**
    * Function to open  AccountModal to enable user view, edit and delete Account
    * @param item(object) 
    * @author Adjekuko Uviemena  
    */

  showItems(item) {
    let accountmodal = this.modController.create(AccountModal, item);
    accountmodal.present();
    console.log(accountmodal)
    return accountmodal;
  }

    /**
    * Function to open a new AccountModal to enable user input account details into NewaccountModal
    * @param item(object) 
    * @author Adjekuko Uviemena  
    */

  showNew(item) {
    let newaccountmodal = this.modController.create(NewaccountModal, item);
   newaccountmodal.present();
    console.log(newaccountmodal)
    return newaccountmodal;
  }

}
