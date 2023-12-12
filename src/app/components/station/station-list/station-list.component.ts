import { Component, OnInit } from '@angular/core';
import { Station } from '../../../class/station';
import { StationService } from '../../../services/station/station.service';
@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrl: './station-list.component.css'
})
export class StationListComponent implements OnInit{
  stations: Station[];
  searchText: string;
  constructor(private stationService:StationService) { }

  ngOnInit() {
    this.stationService.getStationList().subscribe((response)=>{
      this.stations=response
    });
  }

  deleteStudent(id: number){
    this.stationService.deleteStation(id).subscribe((response)=>{
      console.log(response);
      this.stations=this.stations.filter((s:Station) => {
        return id != s.id;
      })
      this.stationService.getStationList().subscribe((response)=>{
        this.stations=response
      });
    },
    error=>console.log(error));
  }

}
