import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SallingProductService {
  
  constructor(private http:HttpClient) { }
getMySellingProduct():Observable<any>{
  
  
  return this.http.get('');
}

}
