import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../class/ticket';
import { Passenger } from '../../../class/passenger';
import { Schedule } from '../../../class/schedule';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleService } from '../../../services/schedule/schedule.service';
import { PassengerService } from '../../../services/passenger/passenger.service';
import { TicketService } from '../../../services/ticket/ticket.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
})
export class CreateTicketComponent implements OnInit {
  id: number = this.route.snapshot.params['id'];
  ticket: Ticket = new Ticket();

  passengers: Passenger[] = [];

  constructor(
    private scheduleService: ScheduleService,
    private passengerService: PassengerService,
    private ticketService: TicketService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.passengerService
      .getPassengerList()
      .toPromise()
      .then((response) => {
        this.passengers = response;
      });
    this.scheduleService
      .getSchedule(this.id)
      .toPromise()
      .then((response) => {
        if (response !== undefined) {
          this.ticket.schedule = response;
        }
      });
  }

  create() {
    this.ticketService.createTicket({idPassenger: this.ticket.passenger.id, idSchedule: this.ticket.schedule.id} as any).toPromise().then((response) => {
        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Ticket created successfully',
        });
      this.router.navigate(['/schedule-list']);  
    }).catch((error) => {
        this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error while creating ticket',
        });
      this.router.navigate(['/schedule-list']);  
    });
  }
}
