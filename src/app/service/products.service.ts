import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './../Products';
import { AuthServiceService } from './../auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products:any;
  productA:Product | any;
  url="http://127.0.0.1:8080/webStore/api/product";

  constructor(private http:HttpClient,private authServiceService:AuthServiceService) { }

  getAllProduct(){
    return this.http.get(this.url+"/all");
  }
  getById(value:string):Product|any{

   return this.http.get<Product>(`http://127.0.0.1:8080/webStore/api/product/find/${value}`).subscribe(result=>
    
         console.log(result)
    );
    
  }
  getStore():any{

   

   return this.products;
  }

  
 
}
