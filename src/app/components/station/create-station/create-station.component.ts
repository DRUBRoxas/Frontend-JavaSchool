import { Component } from '@angular/core';
import { Station } from '../../../class/station';
import { StationService } from '../../../services/station/station.service';

@Component({
  selector: 'app-create-station',
  templateUrl: './create-station.component.html',
  styleUrl: './create-station.component.css'
})
export class CreateStationComponent {

  station=new Station();
  showAlert: boolean = false;
  constructor(private stationService: StationService) {

  }

  saveStation() {
    this.stationService.createStation(this.station).subscribe((response) => {
      console.log(response);
      this.station=new Station();
      this.showAlert = true;
    },
    error => console.log(error));
  }

  closeAlert() {
    this.showAlert = false;
  }
}
