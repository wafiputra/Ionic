import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewPlacePage } from "../new-place/new-place";
import { PlacesService } from "../../service/places.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	places: {title: string}[] = [];

  constructor(public navCtrl: NavController, private PlacesService: PlacesService) {

  }

  ionViewWillEnter() {
  	this.places = this.PlacesService.getPlaces();
  }

  onLoadNewPlace() {
  	this.navCtrl.push(NewPlacePage);
  }

}
