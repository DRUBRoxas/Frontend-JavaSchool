import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Ticket } from '../../class/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {


  constructor(private http:HttpClient) { }

  createTicket(ticket:Ticket)
  {
    return this.http.post<any>(environment.urlApi+"ticket/add",ticket,{headers: new HttpHeaders({'Content-Type': 'application/json'})});
  }

  deleteTicket(id: number)
  {
    return this.http.delete<any>(environment.urlApi+"ticket/delete/"+id);
  }

  getTicketList()
  {
    return this.http.get<any>(environment.urlApi+"ticket/all");
  }

  
}
