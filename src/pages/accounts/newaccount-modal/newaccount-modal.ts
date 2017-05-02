import { Component,OnInit} from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';


@Component({
  selector: 'page-newaccount-modal',
  templateUrl: 'newaccount-modal.html'
})

export class NewaccountModal{
  account_id :any;
  client_id:any;
  username: any;
  imgsrc: any;
  email: any;
  number: any;
  address:any;
  country:any;
  city:any;
  streetone:any;
  streettwo:any;

  constructor(public navCtrl: NavController, 
             public navParams: NavParams,
             public viewCtrl: ViewController) {}

 ngOnInit() {}
 
  closeView() {
    this.viewCtrl.dismiss();
  }

}
