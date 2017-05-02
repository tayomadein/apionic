/*
    DATE: 1 March 2017 - Wednesday
    DEVELOPER: Adebanke Buki Alabi bukialabi@gmail.com
    DESCRIPTION: Unit tests for the fulfillment page
    SOURCE: https://www.joshmorony.com/how-to-unit-test-an-ionic-2-application/
*/


import { FulfillmentPage } from './fulfillment';
import { ModalController, Modal, NavController, ToastController } from 'ionic-angular';
import { SKUModal } from './sku-modal/sku-modal';
import { OrderModal } from './order-modal/order-modal';
import { NewSKU } from './new-sku/new-sku';
import { NavParams, ViewController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import firebase from 'firebase';


//Firebase configuration from app module
export const firebaseConfig = {
    apiKey: "your_key",
    authDomain: "your_auth_domain",
    databaseURL: "your_url",
    storageBucket: "your_storage",
    messagingSenderId: "your_id"
};
firebase.initializeApp(firebaseConfig);

//Basic Properties
let fulfillmentPage = null;
let modController: ModalController = new ModalController(this);
let authService: AuthService;
let navCtrl: NavController;
let toastCtrl: ToastController;

describe('Fulfillment Page', () => {

    /**
        Before each test:
        Create an instance of the fulfillment page
        Run the load function
    */
    beforeEach(()=>{
        fulfillmentPage = new FulfillmentPage(modController, authService, navCtrl, toastCtrl);
        fulfillmentPage.ionViewDidLoad();
    });

    //Expect page to be created
    it('should be created', ()=>{
        expect(fulfillmentPage).toBeTruthy();
    });

    //Expect default segment displayed to be inventory?
    it('should display the inventory segment', ()=>{
        let segment = fulfillmentPage.fulfillmentTabs;
        expect(segment).toBe("Inventory");
    });

    //Expect an array of 4 SKUs to be created
    it('should create an array of 4 SKUs', ()=>{
        let SKUs = fulfillmentPage.SKUList;
        expect(Array.isArray(SKUs)).toBeTruthy();
        expect(SKUs.length).toBe(4);
    });

    //Expect an array of 6 orders to be created
    it('should create an array of 6 orders', ()=>{
        let orders = fulfillmentPage.orderList;
        expect(Array.isArray(orders)).toBeTruthy();
        expect(orders.length).toBe(6);
    });

    it('should be able to display modals with SKU details as needed', ()=>{
        let SKUs = fulfillmentPage.SKUList;
        let modal = modController.create(SKUModal, SKUs[0]);
        expect(modal).toBeDefined();
        expect(modal.didEnter.hasError).toBeFalsy();
    });

    it('should be able to display new SKU modals as needed', ()=>{
        let modal = modController.create(NewSKU);
        expect(modal).toBeDefined();
        expect(modal.didEnter.hasError).toBeFalsy();
    });

    it('should be able to display order modals as needed', ()=>{
        let orders = fulfillmentPage.orderList;
        let modal = modController.create(OrderModal, orders[0]);
        expect(modal).toBeDefined();
        expect(modal.didEnter.hasError).toBeFalsy();
    });



});//End fulfillment page description
