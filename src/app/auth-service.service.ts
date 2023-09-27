import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import { Product } from './Products';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  
  logged = new ReplaySubject<boolean>(1);
  isLogged = this.logged.asObservable();
 accessToken: any;



  constructor(private http:HttpClient,private route:Router) { }
  
  loginUser(data:any):Observable<any>{
  
    return this.http.post(`http://127.0.0.1:8080/webStore/api/useraccount/login`,data);
    
  }

  signUpAccount(data:any):any{
    return this.http.post(`http://127.0.0.1:8080/webStore/api/useraccount/create`,data);
  }
  logout(){
    
    localStorage.clear();
    this.route.navigate(['home/login']);
    
  }

  checkStatus() {
    if (localStorage.getItem('token')) {
      this.logged.next(true);
    } else {
      this.logged.next(false);
    }
  }
  get token(): string {
    if (!this.accessToken) {
      this.accessToken = localStorage.getItem('token')?.slice(1,-1);
      
    }
    return this.accessToken;
  }

 getbyTkn(value:string){
  console.log("we are here now :"+value)
  

    return this.http.get<Observable<Product>>(`http://127.0.0.1:8080/webStore/api/useraccount/by/token`,{headers:new HttpHeaders().append("token",value),params:new HttpParams().append("token",value)});
  }
  userName(){
    return localStorage.getItem("name")?.slice(1,-1);
  }


}
