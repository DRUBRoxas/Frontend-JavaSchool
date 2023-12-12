import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';
import { User } from '../../class/user';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<String> = new BehaviorSubject<String>("");

  constructor(private http:HttpClient) {
     this.currentUserLoginOn=new BehaviorSubject<boolean>(sessionStorage.getItem("token")!=null);
     this.currentUserData=new BehaviorSubject<String>(sessionStorage.getItem("token") || "");
   }

  login(credentials:LoginRequest):Observable<any>{ 
    //TODO: call the api to authenticate the user
    return this.http.post<any>(environment.urlHost+"auth/login",credentials).pipe(
      tap((userData)=> {
        sessionStorage.setItem("token",userData.token);
        this.currentUserData.next(userData.token);
        this.currentUserLoginOn.next(true);
      }),
      map((userData)=> userData.token),
      catchError(this.handleError)
    );
  }

  logout(){
    sessionStorage.removeItem("token");
    this.currentUserData.next("");
    this.currentUserLoginOn.next(false);
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

  get userToken():String{
    return this.currentUserData.value;
  }

}
