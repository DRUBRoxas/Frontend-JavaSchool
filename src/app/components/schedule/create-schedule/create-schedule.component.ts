import { Component, OnInit } from '@angular/core';
import { Schedule } from '../../../class/schedule';
import { Train } from '../../../class/train';
import { Station } from '../../../class/station';
import { CalendarModule } from 'primeng/calendar';
import { ScheduleService } from '../../../services/schedule/schedule.service'
import { StationService } from '../../../services/station/station.service'
import { ActivatedRoute } from '@angular/router';
import { TrainService } from '../../../services/train/train.service';
import { TimePipe } from '../../../time.pipe';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrl: './create-schedule.component.css'
})
export class CreateScheduleComponent implements OnInit {
  
  schedule: Schedule = new Schedule();

  trains: Train[] = [];
  stations: Station[] = [];

  constructor(
    private stationService: StationService,
    private scheduleService: ScheduleService,
    private trainService: TrainService,
    private timePipe: TimePipe,
    private messageService: MessageService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.stationService.getStationList().toPromise().then(result => {
      if (result !== undefined) {
        this.stations = result;
      }
      else {
        throw null;
      }
    }).catch(error => {
      console.error('There was an error while parsing stations');
      console.error(error);
      this.messageService.add({ severity: 'error', summary: 'There was an error while parsing stations', detail: error });
    });

    this.trainService.getTrainList().toPromise().then(result => {
      if (result !== undefined) {
        this.trains = result;
      }
      else {
        throw null;
      }
    }).catch(error => {
      console.error('There was an error while parsing trains');
      console.error(error);
      this.messageService.add({ severity: 'error', summary: 'There was an error while parsing trains', detail: error });
    });

    this.schedule.departureTime = new Date();
    this.schedule.arrivalTime = new Date();
  }

  onSubmit() {
    console.log(this.schedule);
    const body = {
      idOriginStation: this.schedule.originStation.id,
      idDepartureStation: this.schedule.departureStation.id,
      idTrain: this.schedule.train.id,
      arrivalTime: `${this.schedule.arrivalTime.getHours().toString().padStart(2,'0')}:${this.schedule.arrivalTime.getMinutes().toString().padStart(2, '0')}`,
      departureTime: `${this.schedule.departureTime.getHours().toString().padStart(2,'0')}:${this.schedule.departureTime.getMinutes().toString().padStart(2, '0')}`
    } as any;
    console.log(JSON.stringify(body));
    this.scheduleService.createSchedule(body).toPromise().then(response => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Schedule updated successfully.' });
    }).catch(error => {
      console.log("Error al actualizar");
    });
  }
}
