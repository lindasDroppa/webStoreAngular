import { Injectable } from '@angular/core';
import { CartItem } from '../classes/cartItem';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from '../Products';
import { AuthServiceService } from './../auth-service.service';
import { RemoveRequest } from '../classes/removeReq';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItem: CartItem[] = [];
  totalAmount:any;
  products: any;
  size:any=0;
  added=false
  cartSizeR:any|number;
 private cartAdd:CartItem | undefined
  constructor(private http:HttpClient,private authServiceService:AuthServiceService,private router:Router) { 
    
  }

  addToCart(productId:string):Boolean {
  
  const thisCart=new CartItem(productId,1);
    console.log("clicked");
  this.http.post(`http://127.0.0.1:8080/webStore/api/cart/add/item`,thisCart,
  {headers:new HttpHeaders().append("token",this.authServiceService.token),
     params:new HttpParams().append("token",this.authServiceService.token)}).subscribe(result=>
     {if(result==null){
      this.added=true
     }}
      )
     return this.added;
  };

  getItems():any {
    let prod:any
    this.http.get<Product>(`http://127.0.0.1:8080/webStore/api/cart/get/products`,{headers:new HttpHeaders().append
    ("token",this.authServiceService.token),params:new HttpParams().append("token",this.authServiceService.token)}).subscribe
    ((result)=>{
      this.products=result

    }
      
      )
   console.log(prod)
    return prod;
  }
  public get total(){
     this.http.get(`http://127.0.0.1:8080/webStore/api/cart/total`,
     {headers:new HttpHeaders().append("token",this.authServiceService.token),
     params:new HttpParams().append("token",this.authServiceService.token)}).subscribe(amout=>
   this.totalAmount=amout
   );
   return this.totalAmount;
  }


 cartSize(){
  this.http.get(`http://127.0.0.1:8080/webStore/api/cart/size`,{headers:new HttpHeaders().append("token",this.authServiceService.token),
  params:new HttpParams().append("token",this.authServiceService.token)}).subscribe((data)=>
    
  {
      if(data==null){
           this.size=0; 
      }else{
        this.size=data;
      }
    }
  
    
  )
 
  return this.size;
}

removeFromCart(value:string){
 let urlcheck=`http://127.0.0.1:8080/webStore/api/cart/remove`;
 let removeR=new RemoveRequest(value);
  return this.http.post(urlcheck,removeR,
  {headers:new HttpHeaders().append("token",this.authServiceService.token),
  params:new HttpParams().append("token",this.authServiceService.token)}).subscribe(result=>window.location.reload());

}



}
