import { Component, Pipe, PipeTransform } from '@angular/core';
import { SKUModal } from './sku-modal/sku-modal';
import { OrderModal } from './order-modal/order-modal';
import { NewSKU } from './new-sku/new-sku';
import { ModalController, NavController, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { LoginPage } from '../../pages/login/login';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-fulfillment',
  templateUrl: 'fulfillment.html'
})
export class FulfillmentPage{
    /**
    * Class Properties
    */
    fulfillmentTabs: string = "Inventory";
    orderSearchTerm: string = "";
    skuSearchTerm: string = "";
    defaultMode:boolean = true;
    shippingMode:boolean = false;
    orderMode:boolean = false;

    SKUList: Array<{
        name: string,
        description: string,
        price: number,
        quantity_left: number,
        imgsrc: string
    }>;

    orderList: Array<{
        receiver_name: string,
        receiver_country: string,
        grand_total: number,
        receiver_imgsrc: string,
        items: Array<{
            sku: {},
            quantity_ordered: number
        }>
    }>;


    /**
    * Creates instances of all controllers needed on this page &
    * Checks that a user is signed in, else redirect to the Login Page
    * @param modController (ModalController) Allows this page create, manipulate & destroy modals
    * @param authService (AuthService) Allows this page have access to the authentication service
    * @param navController (NavControlller) Allows us have access to the current page displayed in the view
    * @param toastCtrl (ToastController) Allows this page create and destroy toasts
    * @author  Adebanke Buki Alabi (bukialabi@gmail.com) & Omotayo Madein
    */
    constructor(
        public modController: ModalController,
        public authService: AuthService,
        public navCtrl: NavController,
        public toastCtrl: ToastController) {
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


    /**
    * Once the page is initiated, the function below runs. An array of sku objects is created to be
    * loaded into the cards on the inventory segment (and eventually in the modals for each sku)
    * Also added the same feature for order list in the orders tab/order modals.
    * @param navCtrl (NavController) Used to access navigation properties.
    * @param modController (ModalController) Used to create modals and pass information to them
    * @author Adebanke Buki Alabi (bukialabi@gmail.com)
    */
    ionViewDidLoad(){
        this.SKUList = [
            {
                name:"Bed Sheets",
                description:"The most comfortable sheets you will ever lay on in your life.",
                price: 64,
                quantity_left: 7,
                imgsrc: "assets/images/sheets.jpg"
            },
            {
                name:"Camera",
                description:"Take pictures any and everywhere",
                price: 119,
                quantity_left: 14,
                imgsrc: "assets/images/camera.jpg"
            },
            {
                name:"Laptop",
                description:"Be the techiest in the group",
                price: 1500,
                quantity_left: 10,
                imgsrc: "assets/images/electronics.jpg"
            },
            {
                name:"Shoes",
                description:"How hipster are we? Only half shoes because we're cool kids.",
                price: 60,
                quantity_left: 5,
                imgsrc: "assets/images/shoes.jpg"
            }
        ];//End sku list

        this.orderList = [
            {
                receiver_name: "Johnson Aboyi",
                receiver_country: "United Arab Emirates",
                grand_total: 210,
                receiver_imgsrc: "assets/images/user1.jpg",
                items: [{sku: this.SKUList[1], quantity_ordered: 5}]
            },
            {
                receiver_name: "Timothy Green",
                receiver_country: "United States",
                grand_total: 400,
                receiver_imgsrc: "assets/images/user2.jpg",
                items: [
                    {sku: this.SKUList[1], quantity_ordered: 3},
                    {sku: this.SKUList[2], quantity_ordered: 7}]
            },
            {
                receiver_name: "Divya Patel",
                receiver_country: "India",
                grand_total: 100,
                receiver_imgsrc: "assets/images/user3.jpg",
                items: [
                    {sku: this.SKUList[3], quantity_ordered: 3},
                    {sku: this.SKUList[2], quantity_ordered: 7},
                    {sku: this.SKUList[0], quantity_ordered: 5}]
            },
            {
                receiver_name: "Fatima Abdulraman",
                receiver_country: "Nigeria",
                grand_total: 500,
                receiver_imgsrc: "assets/images/user4.jpg",
                items: [{sku: this.SKUList[3], quantity_ordered: 1}]
            },
            {
                receiver_name: "Min Ji Park",
                receiver_country: "South Korea",
                grand_total: 670,
                receiver_imgsrc: "assets/images/user5.jpg",
                items: [
                    {sku: this.SKUList[0], quantity_ordered: 12},
                    {sku: this.SKUList[1], quantity_ordered: 1}]
            },
            {
                receiver_name: "Tara Greene",
                receiver_country: "Jamaica",
                grand_total: 910,
                receiver_imgsrc: "assets/images/user6.jpg",
                items: [
                    {sku: this.SKUList[2], quantity_ordered: 4},
                    {sku: this.SKUList[3], quantity_ordered: 5}]
            }
        ];//End orders list

    }//End ngOnInit


    /**
    * Function to decide selection mode for SKU cards
    * @param sku (SKU Object) A reference to the SKU object in the grid that was clicked
    * @author Adebanke Buki Alabi (bukialabi@gmail.com)
    */
    selectSKU(sku){
        if(this.defaultMode)
            this.showSKUModal(sku);
    }


    /**
    * Function to open a modal that where users can view, modify and delete Stock Keeping Units
    * @param sku (object) The sku object (from SKUList) to be displayed/modified/deleted in the modal
    * @author Adebanke Buki Alabi  (bukialabi@gmail.com)
    */
    showSKUModal(sku){
        let modal = this.modController.create(SKUModal, sku);
        modal.present();
    }

    /**
    * Function to open a modal where users can view the details of a fulfillment order
    * @param order (Object) The Order object (from orderList) we want to view
    * @author Adebanke Buki Alabi bukialabi@gmail.com
    */
    showOrderModal(order){
        let modal = this.modController.create(OrderModal, order);
        modal.present();
    }

    /**
    * Function to open a modal where a new stock keeping unit can be created
    * On return from the modal, it creates a confirmation toast message if the return
    * value is positive.
    * @author Adebanke Buki Alabi (bukialabi@gmail.com)
    */
    newSKUModal(){
        let modal = this.modController.create(NewSKU);
        modal.present();
        modal.onDidDismiss(result =>{
            if(result){
                let toast = this.toastCtrl.create({
                    message: "SKU successfully created (This is a lie)",
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        });
        return modal;
    }


    /**
    * Function to set the mode of our choice to true which would activate/deactivate
    * certain ngIfs throughout the template and change the SKU selection behaviour on
    * our page. Sets one mode to true and the other modes to false.
    * @param mode (string) the mode we wish to enter
    * @author Adebanke Buki Alabi (bukialabi@gmail.com)
    */
    activateMode(mode:string){
        switch(mode){
            case "shipping":
                this.shippingMode = true;
                this.defaultMode = this.orderMode = false;
                break;
            case "order":
                this.orderMode = true;
                this.defaultMode = this.shippingMode = false;
                break;
            default:
                this.defaultMode = true;
                this.shippingMode = this.orderMode = false;
                break;
        }
        this.consoleFlagStatus();
    }
    //Method for debugging. To be deleted.
    consoleFlagStatus(){
        console.log("Current flag status: ");
        console.log("defaultMode: " + this.defaultMode);
        console.log("shippingMode: " + this.shippingMode);
        console.log("orderMode: " + this.orderMode);
    }


    /**
    * Function to cancel a search
    * @param searchBar (template reference variable) A reference to the search bar
    * @author Adebanke Buki Alabi (bukialabi@gmail.com)
    */
    cancelSearch(searchBar){
        searchBar.value = "";
    }

}
