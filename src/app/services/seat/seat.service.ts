import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  constructor(private http:HttpClient) { }

  createSeat(idTrain:number)
  {
    return this.http.post<any>(environment.urlApi+"seat/"+idTrain+"/addauto",idTrain, {headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }

  getSeatList()
  {
    return this.http.get<any>(environment.urlApi+"seat/all");
  }

  deleteSeat(id: number)
  {
    return this.http.delete<any>(environment.urlApi+"seat/delete/"+id);
  }

  getSeatByTrainId(id: number)
  {
    return this.http.get<any>(environment.urlApi+"seat/train/"+id);
  }

}
