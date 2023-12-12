import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Passenger } from '../../class/passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  constructor(private http:HttpClient) { }

  createPassenger(passenger:Passenger)
  {
    return this.http.post<any>(environment.urlApi+"passenger/add",passenger);
  }

  getPassengerList()
  {
    return this.http.get<any>(environment.urlApi+"passenger/all/user");
  }

  deletePassenger(id: number)
  {
    return this.http.delete<any>(environment.urlApi+"passenger/delete/"+id);
  }

  updatePassenger(passenger:Passenger)
  {
    return this.http.put<any>(environment.urlApi+"passenger/update",passenger);
  }

  getPassenger(id:number)
  {
    return this.http.get<any>(environment.urlApi+"passenger/"+id);
  }
}
