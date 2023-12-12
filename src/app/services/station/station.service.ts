import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Station } from '../../class/station';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http:HttpClient) { }

  createStation(station: Station)
  {
    return this.http.post<Station>(environment.urlApi+"station/add", station);
  }

  getStationList()
  {
    return this.http.get<Station[]>(environment.urlApi+"station/all");
  }

  deleteStation(id: number)
  {
    return this.http.delete<Station>(environment.urlApi+"station/delete/"+id);
  }

  updateStation(station: Station)
  {
    return this.http.put<Station>(environment.urlApi+"station/update", station);
  }

  getStation(id: number)
  {
    return this.http.get<Station>(environment.urlApi+"station/"+id);
  }


}
