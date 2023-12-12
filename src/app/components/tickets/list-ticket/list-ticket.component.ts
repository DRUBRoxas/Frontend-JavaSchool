import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../class/ticket';
import { TicketService } from '../../../services/ticket/ticket.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrl: './list-ticket.component.css',
})
export class ListTicketComponent implements OnInit {
  tickets: Ticket[];

  constructor(
    private ticketService: TicketService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.ticketService.getTicketList().subscribe((response) => {
      this.tickets = response;
    });
  }

  deleteTicket(id: number) {
    this.ticketService.deleteTicket(id).subscribe((response) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Ticket deleted successfully',
      });
      this.ngOnInit();
    });
  }
}
