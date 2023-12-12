import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../../class/passenger';
import { PassengerService } from '../../../services/passenger/passenger.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-passenger',
  templateUrl: './edit-passenger.component.html',
  styleUrl: './edit-passenger.component.css'
})
export class EditPassengerComponent implements OnInit{
  passenger: Passenger = new Passenger();
  id:number;
  constructor(private passengerService:PassengerService,private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.passengerService.getPassenger(this.id).subscribe((response)=>{
      this.passenger.id=response.id;
      this.passenger.name=response.name;
      this.passenger.lastname=response.lastname;
      this.passenger.dateBirth=response.dateBirth;
    });
  }

  onSubmit() {
    const body = {
      name: this.passenger.name,
      lastName: this.passenger.lastname,
      birthDate: `${this.passenger.dateBirth.getFullYear().toString()}-${(this.passenger.dateBirth.getMonth()+1).toString()}-${this.passenger.dateBirth.getDay()}`
    } as any;
    console.log(JSON.stringify(body));
    this.passengerService.updatePassenger(this.passenger).subscribe(result => {
      console.log(result);
      this.passenger = new Passenger();
    }, error => console.error(error));
  }
  
}
