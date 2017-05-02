import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, PopoverController } from 'ionic-angular';
import {CategoryPopover, UnitTypePopover, CurrencyCodePopover} from './popovers';

@Component({
  selector: 'page-new-sku',
  templateUrl: 'new-sku.html',
})
export class NewSKU {

    category:string = "Category";
    unitType:string = "Unit of Measurement";
    currencyCode:string = "Currency Code";

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public popoverCtrl: PopoverController) {}

    /**
    * Function to close the modal containing the detailed-view of Stock Keeping Units
    * @param status (number) passed back to main page. 0 for cancelled & 1 for created SKU
    * @author Adebanke Alabi
    */
    closeView(status:number){
        this.viewCtrl.dismiss(status);
    }

    showCategories(myEvent) {
        let popover = this.popoverCtrl.create(CategoryPopover);
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(result=>{
            result ? this.category = result :
                this.category ? this.category = this.category : this.category = 'Category';
        });

    }

    showUnitTypes(myEvent){
        let popover = this.popoverCtrl.create(UnitTypePopover);
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(result=>{
            result ? this.unitType = result :
                this.unitType ? this.unitType = this.unitType : this.unitType = 'Unit of Measurement';
        });
    }

    showCurrencyCodes(myEvent){
        let popover = this.popoverCtrl.create(CurrencyCodePopover);
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(result=>{
            result ? this.currencyCode = result :
                this.currencyCode ? this.currencyCode = this.currencyCode : this.currencyCode = 'Currency Code';
        });
    }

    createSKU(){
        this.closeView(1);
    }

}//End NewSKU class
