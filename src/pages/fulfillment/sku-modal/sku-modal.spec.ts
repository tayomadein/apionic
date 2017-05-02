/*
    DATE: 10 March 2017 - Friday
    DEVELOPER: Adebanke Buki Alabi bukialabi@gmail.com
    DESCRIPTION: Unit tests for the sku modal
*/
import { SKUModal } from './sku-modal';
import { OrderModal } from './order-modal/order-modal';
import { NavParams, ViewController } from 'ionic-angular';


describe("SKU Modal", ()=>{
    let navParams = new NavParams({
            name:"Bed Sheets",
            description:"The most comfortable sheets you will ever lay on in your life.",
            price: 64,
            quantity_left: 7,
            imgsrc: "assets/images/sheets.jpg"
        });
    let skuModal = null;
    let viewCtrl = new ViewController();

    beforeEach(()=>{
        skuModal = new SKUModal(navParams, viewCtrl);
        skuModal.ionViewDidLoad();
    });

    it('should be created', ()=>{
        expect(skuModal).toBeTruthy();
    });

    it('should grab the properties of the SKU passed to it', ()=>{
        expect(skuModal.name).toBe("Bed Sheets");
        expect(skuModal.description).toBe("The most comfortable sheets you will ever lay on in your life.");
        expect(skuModal.price).toBe(64);
        expect(skuModal.quantity_left).toBe(7);
        expect(skuModal.imgsrc).toBe("assets/images/sheets.jpg");
    });

    /*it('should close when closeView() is run', () =>{
        skuModal.closeView();
        expect(skuModal).toBeFalsy();
    });*/


    //Test that for all mode flags, only one is always true
});
