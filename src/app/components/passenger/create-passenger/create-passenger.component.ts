import { Component } from '@angular/core';
import { Passenger } from '../../../class/passenger';
import { PassengerService } from '../../../services/passenger/passenger.service';

@Component({
  selector: 'app-create-passenger',
  templateUrl: './create-passenger.component.html',
  styleUrl: './create-passenger.component.css'
})
export class CreatePassengerComponent {
  passenger: Passenger = new Passenger();
  constructor(private passengerService:PassengerService) { }

  onSubmit() {
    const body = {
      name: this.passenger.name,
      lastName: this.passenger.lastname,
      birthDate: `${this.passenger.dateBirth.getFullYear().toString()}-${(this.passenger.dateBirth.getMonth()+1).toString()}-${this.passenger.dateBirth.getDay()}`
    } as any;
    console.log(JSON.stringify(body));
    console.log(this.passenger);
    this.passengerService.createPassenger(this.passenger).subscribe(result => {
      console.log(result);
      this.passenger = new Passenger();
    }, error => console.error(error));
  }
  
}
