import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../../class/passenger';
import { PassengerService } from '../../../services/passenger/passenger.service';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrl: './passenger-list.component.css'
})
export class PassengerListComponent implements OnInit{

  passengers: Passenger[];

  constructor(private passengerService:PassengerService) { }

  ngOnInit(): void {
    this.passengerService.getPassengerList().subscribe((response)=>{
      this.passengers=response
    });
  }

  deletePassenger(id: number){
    this.passengerService.deletePassenger(id).subscribe((response)=>{
      console.log(response);
      this.passengers=this.passengers.filter((s:Passenger) => {
        return id != s.id;
      })
      this.passengerService.getPassengerList().subscribe((response)=>{
        this.passengers=response
      });
    },
    error=>console.log(error));
  }
}
