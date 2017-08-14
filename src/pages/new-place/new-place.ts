import { Component } from '@angular/core';

import { PlacesService } from "../../service/places.service";



@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(private PlacesService: PlacesService) {}

  onAddPlace(value: {title: string}) {
  this.PlacesService.AddPlace(value);

  }

}
