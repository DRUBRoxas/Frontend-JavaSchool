import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<String> = new BehaviorSubject<String>("");


  constructor(private http:HttpClient) { }

  register(credentials: any){
    return this.http.post<any>("http://localhost:8080/auth/register",credentials).pipe(
      tap((userData)=> {
        sessionStorage.setItem("token",userData.token);
        this.currentUserData.next(userData.token);
        this.currentUserLoginOn.next(true);
      }),
      map((userData)=> userData.token),
      catchError(this.handleError)
    );
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('An error occurred:', error.error);
    }
    else{
      console.error(
        `Backend returned code ${error.status},`+
        `body was: ${error.error}`
      );
    }
    return throwError(()=> new Error('Something bad happened; please try again later.'));
  }

  get userData():Observable<String>{
    return this.currentUserData.asObservable();
  }

  get userLoginOn():Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }

}
