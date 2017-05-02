import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { LoginPage } from '../../pages/login/login';
import { AuthService } from '../../providers/auth-service';

/*
  Generated class for the Locations page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html'
})
export class LocationsPage implements OnInit {
  locations: Array<{
    name: string,
    location_id: string,
    modified_date: string,
    address: {
      address_name: string,
      country_code: string,
      country: string,
      state: string,
      city: string,
      street_one: string,
      street_two: string,
      latitude: string,
      longitutde: string,
      is_default: boolean
    }
  }>

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) {
    //Checks that a user is signed in, else redirect to the Login Page
    firebase.auth().onAuthStateChanged(function (user) {
      console.log(user);
      if (!user) {
        navCtrl.setRoot(LoginPage);
      }
    });
  }
ngOnInit(){
  this.locations = [
    {
      'name': 'Longinus Otoide',
      'location_id': 'esd',
      'modified_date': '12-04-2017',
      'address': {
        'address_name': 'Warehouse',
        'country_code': 'NIG',
        'country': 'Nigeria',
        'state': 'Benue',
        'city': 'Makurdi',
        'street_one': 'Ahmadu Bello Way',
        'street_two': '',
        'latitude': '4467',
        'longitutde': '04674',
        'is_default': true
      },
    },
        {
      'name': 'Longinus Otoide',
      'location_id': 'esd',
      'modified_date': '12-04-2017',
      'address': {
        'address_name': 'Warehouse',
        'country_code': 'EGY',
        'country': 'Nigeria',
        'state': 'Benue',
        'city': 'Makurdi',
        'street_one': 'Ahmadu Bello Way',
        'street_two': '',
        'latitude': '4467',
        'longitutde': '04674',
        'is_default': true
      },
    },   
     {
      'name': 'Longinus Otoide',
      'location_id': 'esd',
      'modified_date': '12-04-2017',
      'address': {
        'address_name': 'Warehouse',
        'country_code': 'UAE',
        'country': 'Nigeria',
        'state': 'Benue',
        'city': 'Makurdi',
        'street_one': 'Ahmadu Bello Way',
        'street_two': '',
        'latitude': '4467',
        'longitutde': '04674',
        'is_default': true
      },
    },    
    {
      'name': 'Longinus Otoide',
      'location_id': 'JOR',
      'modified_date': '12-04-2017',
      'address': {
        'address_name': 'Warehouse',
        'country_code': 'nig',
        'country': 'Nigeria',
        'state': 'Benue',
        'city': 'Makurdi',
        'street_one': 'Ahmadu Bello Way',
        'street_two': '',
        'latitude': '4467',
        'longitutde': '04674',
        'is_default': true
      },
    },
        {
      'name': 'Longinus Otoide',
      'location_id': 'kEN',
      'modified_date': '12-04-2017',
      'address': {
        'address_name': 'Warehouse',
        'country_code': 'nig',
        'country': 'Nigeria',
        'state': 'Benue',
        'city': 'Makurdi',
        'street_one': 'Ahmadu Bello Way',
        'street_two': '',
        'latitude': '4467',
        'longitutde': '04674',
        'is_default': true
      },
    },
        {
      'name': 'Longinus Otoide',
      'location_id': 'POR',
      'modified_date': '12-04-2017',
      'address': {
        'address_name': 'Warehouse',
        'country_code': 'nig',
        'country': 'Nigeria',
        'state': 'Benue',
        'city': 'Makurdi',
        'street_one': 'Ahmadu Bello Way',
        'street_two': '',
        'latitude': '4467',
        'longitutde': '04674',
        'is_default': true
      },
    }
  ]
}
  /**
  * Function to Logout current user
  * @author Omotayo Madein
  */
  logout() {
      this.authService.doLogout();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationsPage');
  }

}
