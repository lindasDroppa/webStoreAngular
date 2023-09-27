import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  constructor(private http:HttpClient) { }
  addToCart(data:any):void{
    this.http.post(`http://127.0.0.1:8080/webStore/api/cart/add/item`,data);
    window.location.reload();
  }
}
