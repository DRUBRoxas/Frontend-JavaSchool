import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: string | Date): Date {
    if (typeof(value) !== 'string')
      return value;
    const date = new Date()
    const parts = value.split(":");
    let hours = +parts[0];
    let minutes = +parts[1];
    let seconds = +parts[2];
    date.setHours(hours, minutes, seconds);
    return date;
  }

}
