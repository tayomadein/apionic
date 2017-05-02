import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-account-modal',
  templateUrl: 'account-modal.html'
})
export class AccountModal implements OnInit {
  account_id :any;
  client_id:any;
  username: any;
  imgsrc: any;
  email: any;
  number: any;
  address:any;
  country:any;
  city:any;
  street_one:any;
  street_two:any;

  constructor(public navParams: NavParams,
    public viewCtrl: ViewController) { }

  ngOnInit() 
  {
    
    this.account_id = this.navParams.get("account_id");
    this.client_id = this.navParams.get("client_id");
    this.username = this.navParams.get("username");
    this.imgsrc = this.navParams.get("imgsrc");
    this.email = this.navParams.get("email");
    this.number = this.navParams.get("number");
    this.country = this.navParams.get("country");
    this.city = this.navParams.get("city");
    this.street_one = this.navParams.get("street_one");
    this.street_two = this.navParams.get("street_two");
    this.street_two = this.navParams.get("street_three");
   
  }

  closeView() {
    this.viewCtrl.dismiss();
  }
}
