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
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrl: './edit-schedule.component.css'
})
export class EditScheduleComponent implements OnInit {
  
  schedule: Schedule = {} as Schedule;

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

    const id =this.route.snapshot.params['id'];
    this.scheduleService.getSchedule(id).toPromise().then(response => {
      if (response !== undefined) {
        this.schedule = response;
        this.schedule.departureTime = this.timePipe.transform(response.departureTime);
        this.schedule.arrivalTime = this.timePipe.transform(response.arrivalTime);
      }
      else {
        throw null;
      }
    }).catch(error => {
      console.log('There was an error while fetching the schedule');
      console.error(error);
      this.messageService.add({ severity: 'error', summary: 'There was an error while fetching the schedule', detail: error });
    });

  }

  onSubmit() {
    this.scheduleService.updateSchedule({
      id: this.schedule.id,
      idOriginStation: this.schedule.originStation.id,
      idDepartureStation: this.schedule.departureStation.id,
      idTrain: this.schedule.train.id,
      arrivalTime: `${this.schedule.arrivalTime.getHours()}:${this.schedule.arrivalTime.getMinutes()}`,
      departureTime: `${this.schedule.departureTime.getHours()}:${this.schedule.departureTime.getMinutes()}`
    } as any).toPromise().then(response => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Schedule updated successfully.' });
    }).catch(error => {
      console.log("Error al actualizar");
    });
  }
}
