import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  template: `
    <ion-list>
      <ion-list-header color="primary">Categories</ion-list-header>
      <button ion-item (click)="setCategory('Electronics')">Electronics</button>
      <button ion-item (click)="setCategory('Clothing')">Clothing</button>
      <button ion-item (click)="setCategory('Non-Perishable Food Items')">Non-Perishable Food Items</button>
      <button ion-item (click)="setCategory('Make-up &amp; Beauty')">Make-up &amp; Beauty</button>
    </ion-list>
  `
})
export class CategoryPopover {
    category:string;

    constructor(public viewCtrl: ViewController) {}

    setCategory(category){
        this.category = category;
        this.close();
    }

    close() {
        this.viewCtrl.dismiss(this.category);
    }
}



@Component({
  template: `
    <ion-list>
      <ion-list-header color="primary">Unit of Measurement</ion-list-header>
      <button ion-item (click)="setUnitType('Imperial')">Imperial</button>
      <button ion-item (click)="setUnitType('Metric')">Metric</button>
    </ion-list>
  `
})
export class UnitTypePopover {
    unitType:string;

    constructor(public viewCtrl: ViewController) {}

    setUnitType(unitType){
        this.unitType = unitType;
        this.close();
    }

    close() {
        this.viewCtrl.dismiss(this.unitType);
    }
}



@Component({
  template: `
    <ion-list>
      <ion-list-header color="primary">Currency Code</ion-list-header>
      <button ion-item (click)="setUnitType('Nigeria (NGN)')">Nigeria (NGN)</button>
      <button ion-item (click)="setUnitType('United Arab Emirates (AED)')">United Arab Emirates (AED)</button>
      <button ion-item (click)="setUnitType('United States of America (USD)')">United States of America (USD)</button>
    </ion-list>
  `
})
export class CurrencyCodePopover {
    currencyCode:string;

    constructor(public viewCtrl: ViewController) {}

    setUnitType(currencyCode){
        this.currencyCode = currencyCode;
        this.close();
    }

    close() {
        this.viewCtrl.dismiss(this.currencyCode);
    }
}
