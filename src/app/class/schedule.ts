import { Station } from "./station";
import { Train } from "./train";

export class Schedule {
    id:number;
    departureTime:Date;
    arrivalTime:Date;
    train:Train;
    originStation:Station;
    departureStation:Station;
}