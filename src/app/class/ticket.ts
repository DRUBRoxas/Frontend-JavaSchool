import { Passenger } from "./passenger";
import { Schedule } from "./schedule";
import { Seat } from "./seat";

export class Ticket {
    id: number;
    passenger: Passenger;
    schedule: Schedule;
    seat: Seat;
}
