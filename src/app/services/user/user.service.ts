import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'; // Import the HttpClient class
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../../class/user';
import { environment } from '../../environments/environments';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { } // Fix the typo in the constructor parameter


  getUser(id:number):Observable<User>{
    return this.http.get<User>(environment.urlApi+'user/'+id).pipe(
      catchError(this.handleError));
  }

  private handleError(error:HttpErrorResponse) {
    {
      if (error.status===0){
        console.error('An error occurred:', error.error);
      }
      else{
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      return throwError(() => new Error('Server error'));
    }
  }
}
