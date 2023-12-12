import { Component } from '@angular/core';
import { Train } from '../../../class/train';
import { Seat } from '../../../class/seat';
import { TrainService } from '../../../services/train/train.service';
import { SeatService } from '../../../services/seat/seat.service';

@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrl: './train-list.component.css'
})
export class TrainListComponent {

  seat:Seat=new Seat();

  trains:Train[];
  constructor(private trainService:TrainService,private seatService:SeatService) { }

  ngOnInit() {
    this.trainService.getTrainList().subscribe((response)=>{
      this.trains=response
    });
  }

  deleteTrain(id: number){
    this.trainService.deleteTrain(id).subscribe((response)=>{
      console.log(response);
      this.trains=this.trains.filter((s:Train) => {
        return id != s.id;
      })
      this.trainService.getTrainList().subscribe((response)=>{
        this.trains=response
      });
    },
    error=>console.log(error));
  }

  
  addSeat(id:number){
    this.seatService.createSeat(id).subscribe(result => {
      console.log(result);
      this.seat = new Seat();
      window.location.reload();
    }, error => console.error(error));
  }
}
