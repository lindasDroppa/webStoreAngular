import { Component } from '@angular/core';
import { CartService } from './../service/cart.service';
import { Product } from './../Products';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthServiceService } from './../auth-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent 
{
  total:any
  products:any
  size:any
  constructor(private cartService:CartService,private http:HttpClient,private authServiceService:AuthServiceService)
  {
    
   
  }
  ngOnInit(){
   this.getCartProduct();
   this.getTotalAmount();
   this.cartSize();
  }
  getCartProduct(){
    this.http.get<Product>(`http://127.0.0.1:8080/webStore/api/cart/get/products`,{headers:new HttpHeaders().append
    ("token",this.authServiceService.token),params:new HttpParams().append("token",this.authServiceService.token)}).subscribe
    ((result)=>{
      this.products=result
    
    }
    )
  }

  removeFromCart(productId:string){
   
    alert("removing :"+productId)
    this.cartService.removeFromCart(productId);
  }
  getTotalAmount(){
    this.http.get(`http://127.0.0.1:8080/webStore/api/cart/total`,
     {headers:new HttpHeaders().append("token",this.authServiceService.token),
     params:new HttpParams().append("token",this.authServiceService.token)}).subscribe(amout=>
   this.total=amout
   );
   
  }

  cartSize(){

    this.http.get(`http://127.0.0.1:8080/webStore/api/cart/size`,{headers:new HttpHeaders().append("token",this.authServiceService.token),
    params:new HttpParams().append("token",this.authServiceService.token)}).subscribe((data)=>
      
    {
        if(data==null){
          
             this.size=0; 
        }else{
          this.size=data
         
        }
      }
    
      
    )
 }

}
