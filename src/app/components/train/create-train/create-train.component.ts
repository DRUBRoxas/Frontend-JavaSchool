import { Component, OnInit } from '@angular/core';
import { Train } from '../../../class/train';
import { TrainService } from '../../../services/train/train.service';

@Component({
  selector: 'app-create-train',
  templateUrl: './create-train.component.html',
  styleUrl: './create-train.component.css'
})
export class CreateTrainComponent{

  train: Train = new Train();
  constructor(private trainService:TrainService) { }
  
  onSubmit() {
    this.trainService.createTrain(this.train).subscribe(result => {
      console.log(result);
      this.train = new Train();
    }, error => console.error(error));
  }


}
