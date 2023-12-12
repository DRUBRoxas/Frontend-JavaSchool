import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Schedule } from '../../class/schedule';
import { ScheduleSearch } from '../../components/schedule/schedule-list/scheduleSearch';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http:HttpClient) { }

  createSchedule(schedule: Schedule)
  {
    return this.http.post<Schedule>(environment.urlApi+"schedule/add", schedule, {headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }

  getScheduleList()
  {
    return this.http.get<Schedule[]>(environment.urlApi+"schedule/all");
  }

  deleteSchedule(id: number)
  {
    return this.http.delete<Schedule>(environment.urlApi+"schedule/delete/"+id);
  }

  updateSchedule(Schedule: Schedule)
  {
    return this.http.put<Schedule>(environment.urlApi+"schedule/update", Schedule);
  }

  getSchedule(id: number)
  {
    return this.http.get<Schedule>(environment.urlApi+"schedule/"+id);
  }

  findSchedule(search: ScheduleSearch) {
    return this.http.post<Schedule[]>(environment.urlApi+"schedule/filtered/between", search, {headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }

}
