import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-order-modal',
  templateUrl: 'order-modal.html'
})
export class OrderModal {
    receiver_name: string;
    receiver_country: string;
    grand_total: number;
    receiver_imgsrc: string;
    items: Array<{
        sku: {},
        quantity_ordered: number
    }>;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController) {}

    /**
    * Function to run when page is loaded. Extracts all contents passed from previous page.
    * @author Adebanke Buki Alabi
    */
    ionViewDidLoad() {
        console.log('ionViewDidLoad OrderModalPage');
        this.receiver_name = this.navParams.get('receiver_name');
        this.receiver_country = this.navParams.get('receiver_country');
        this.receiver_imgsrc = this.navParams.get('receiver_imgsrc');
        this.items = this.navParams.get('items');
        this.grand_total = this.total(this.items);//this.navParams.get('grand_total');
    }

    /**
    * Function to close the modal containing the detailed-view of Stock Keeping Units
    * @author Adebanke Alabi
    */
    closeView(){
        this.viewCtrl.dismiss();
    }

    /**
    * Function to calculate the total cost of the array of items ordered
    * @param items - (Array of objects) Each object in array contains 1 sku object + number of units of sku ordered
    * @author Adebanke Buki Alabi
    */
    total(items):number{
        let sum = 0;
        for(let i = 0; i < items.length; i++){
            sum += items[i].sku.price * items[i].quantity_ordered;
        }
        return sum;
    }

}
