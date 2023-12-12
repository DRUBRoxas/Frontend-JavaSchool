import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Station } from '../../../class/station';
import { StationService } from '../../../services/station/station.service';

@Component({
  selector: 'app-edit-station',
  templateUrl: './edit-station.component.html',
  styleUrl: './edit-station.component.css'
})
export class EditStationComponent implements OnInit{
  constructor(private route: ActivatedRoute,private stationService:StationService){}
  
  id:number;
  station= new Station(); 

  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.stationService.getStation(this.id).subscribe((response)=>{
      this.station.id=response.id;
      this.station.stationName=response.stationName;
    });
  }
  updateStation(){
    
    this.stationService.updateStation(this.station).subscribe((response)=>{
      console.log(response);
    },
    error=>console.log(error));
  }
}
