import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

/*
  Generated class for the Tracking page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dropMod',
  templateUrl: 'dropmod.html'
})
export class DropModPage {
     @ViewChild('orderSlider') orderSlider: any;
    slideOneForm: FormGroup;
    slideTwoForm: FormGroup;
 
    submitAttempt: boolean = false;

  constructor(public navCtrl: NavController,
              public formBuilder: FormBuilder, 
              public navParams: NavParams) {

      this.slideOneForm = formBuilder.group({

        Name: [''],
        Phone: [''],
        Country: [''],
        State: [''],
        City: [''],
        Street: [''] ,              
        Instruction: ['']                            

       
    });

    this.slideTwoForm = formBuilder.group({
        Type: [''],
        Price: [''],
        Description: [''],        
        Weight: [''],      
        Height: [''],
        Depth: ['']
        

       });
  }

  next(){
        this.orderSlider.slideNext();
    }
 
    prev(){
        this.orderSlider.slidePrev();
    }

    submit(){
 
    this.submitAttempt = true;
 
    if(!this.slideOneForm.valid){
        this.orderSlider.slideTo(0);
    } 
    else if(!this.slideTwoForm.valid){
        this.orderSlider.slideTo(1);
    }
    else {
        console.log("success!")
        console.log(this.slideOneForm.value);
        console.log(this.slideTwoForm.value);
    }
 
}

    

}
