import { Pipe, PipeTransform } from '@angular/core';
import { Station } from '../../class/station';
@Pipe({
  name: 'stationFilterPipe'
})
export class StationFilterPipePipe implements PipeTransform {


  transform(list: Station[], searchText: string): any { 
    if (!list) {
      return [];
    }
    if (!searchText) {
      return list;
    }
    searchText = searchText.toLocaleLowerCase();
    list=list.filter(s=>{
      return s.stationName.toLocaleLowerCase().includes(searchText);
    });
    return list;
  }
}
