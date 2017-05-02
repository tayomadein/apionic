import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-sku-modal',
  templateUrl: 'sku-modal.html'
})
export class SKUModal{
    name: string;
    description: string;
    price: number;
    quantity_left: number;
    imgsrc: string;

    constructor(
        public navParams: NavParams,
        public viewCtrl: ViewController) {}

    /**
    * Function to run when page is loaded. Extracts all contents passed from previous page.
    * @author Adebanke Buki Alabi
    */
    ionViewDidLoad() {
        //Extract SKU information
        this.name = this.navParams.get('name');
        this.description = this.navParams.get('description');
        this.price = this.navParams.get('price');
        this.quantity_left = this.navParams.get('quantity_left');
        this.imgsrc = this.navParams.get('imgsrc');
    }

    /**
    * Function to close the modal containing the detailed-view of Stock Keeping Units
    * @author Adebanke Alabi
    */
    closeView(){
        this.viewCtrl.dismiss();
    }

}
