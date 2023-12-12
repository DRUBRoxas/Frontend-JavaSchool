import { Component, OnInit } from '@angular/core';
import { Schedule } from '../../../class/schedule';
import { ScheduleService } from '../../../services/schedule/schedule.service';
import { Train } from '../../../class/train';
import { ScheduleSearch } from './scheduleSearch';
import { Station } from '../../../class/station';
import { StationService } from '../../../services/station/station.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrl: './schedule-list.component.css'
})
export class ScheduleListComponent implements OnInit {
  schedules: Schedule[];
  search: ScheduleSearch = {} as ScheduleSearch;

  stations: Station[];
  
  constructor(
    private scheduleService:ScheduleService,
    private stationService: StationService,
    private messageService: MessageService,
    ) { }

  ngOnInit(){
    this.stationService.getStationList().toPromise().then(result => {
      if (result !== undefined) {
        this.stations = [{id: -1, stationName: ""}, ...result];
      }
      else {
        throw null;
      }
    }).catch(error => {
      console.error('There was an error while parsing stations');
      console.error(error);
      this.messageService.add({ severity: 'error', summary: 'There was an error while parsing stations', detail: error });
    });
    this.searchSchedules();
  }

  onSubmit() {
    const origin:any = this.search?.origin;
    this.search.origin = origin.id;
    const destination:any = this.search?.destination;
    this.search.destination = destination.id;
    this.search.start = this.buildTimeString(this.search.start as Date) as any;
    this.search.end = this.buildTimeString(this.search.end as Date) as any;
    this.searchSchedules();
  }

  private buildTimeString(date: Date): string | undefined {
    if (!date)
      return undefined;
    return `${date?.getHours().toString().padStart(2, '0')}:${date?.getMinutes().toString().padStart(2, '0')}`;
  }

  private searchSchedules() {
    this.scheduleService.findSchedule(this.search).toPromise().then(result => {
      if (result !== undefined) {
        this.schedules = result;
      }
      else {
        throw null;
      }
    }).catch(error => {
      console.error('There was an error while searching schedules');
      console.error(error);
      this.messageService.add({ severity: 'error', summary: 'There was an error while searching schedules', detail: error });
    });
  }

  deleteSchedule(id: number){
    this.scheduleService.deleteSchedule(id).subscribe((response)=>{
      console.log(response);
      this.schedules=this.schedules.filter((s:Schedule) => {
        return id != s.id;
      })
      this.scheduleService.getScheduleList().subscribe((response)=>{
        this.schedules=response
      });
    },
    error=>console.log(error));
  }
}
