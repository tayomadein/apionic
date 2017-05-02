import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import firebase from 'firebase';
import { LoginPage } from '../../pages/login/login';
import { AuthService } from '../../providers/auth-service';
import { InvoiceModal} from './invoice-modal/invoice-modal';
/*
  Generated class for the Invoices page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-invoices',
  templateUrl: 'invoices.html'
})
export class InvoicesPage {

 invoiceProperty: Array<{
        invoice_id: string,
        client_id: string,
        product_type: string,
        date_issued: string,
        grand_total:number,
        phone_number: number,
        order_type: string,
        client_img: string;
        email: string,
        address: Array<{
            name: string,
            country: string,
            state: string,
        }>
    }>;
    
  constructor(public modController: ModalController, public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoicesPage');

    this.invoiceProperty = [
        {
                invoice_id: "FIN0000UAE",
                client_id: "Apple inc",
                product_type: "iPhone 7plus",
                date_issued: "2011-10-02",
                grand_total: 750,
                phone_number: +2347034567890,
                order_type: "C2C",
                client_img: "assets/images/apThumbnail.jpg",
                email: "appleinc@apple.us",
                address: [
                  {
                    name: "my new warehouse",
                    country: "Dubai",
                    state: "Abu Dhabi",
                  }
                ],
        },
        {
                invoice_id: "FIN0022NIG",
                client_id: "Nestle PLC",
                product_type: "Bottle Water",
                date_issued: "2017-02-26",
                grand_total: 1400,
                phone_number: +2348023456789,
                order_type: "B2C",
                client_img: "assets/images/nsThumbnail.jpg",
                email: "contactus@nestlenig.com",
                address: [
                  {
                    name: "warehouse 01",
                    country: "Nigeria",
                    state: "Lagos",
                  }
                ],
        }, 
        {
                invoice_id: "FIN01042NIG",
                client_id: "Konga Ltd",
                product_type: "Windows Phones",
                date_issued: "2017-03-05",
                grand_total: 72000,
                phone_number: +234712345678,
                order_type: "C2C",
                client_img: "assets/images/kgThumbnail.jpg",
                email: "info@konga.com",
                address: [
                  {
                    name: "Abuja Warehouse",
                    country: "Nigeria",
                    state: "Abuja",
                  }
                ],
        },   
    ];       
                     
  }


      showInvoice(Invoice){
        let newinvoiceModal = this.modController.create(InvoiceModal, Invoice);
        newinvoiceModal.present();
        console.log(newinvoiceModal)
        return newinvoiceModal;
              
}

}
