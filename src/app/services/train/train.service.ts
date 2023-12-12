import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Train } from '../../class/train';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http:HttpClient) { }

  createTrain(train: Train)
  {
    return this.http.post<Train>(environment.urlApi+"train/add", train);
  }

  getTrainList()
  {
    return this.http.get<Train[]>(environment.urlApi+"train/all");
  }

  deleteTrain(id: number)
  {
    return this.http.delete<Train>(environment.urlApi+"train/delete/"+id);
  }

  
}
