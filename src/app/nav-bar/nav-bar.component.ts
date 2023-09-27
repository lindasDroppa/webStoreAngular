import { Component, OnInit } from '@angular/core';
import { LoginSuccess } from '../loginsucess';
import { Router } from '@angular/router';
import { AuthServiceService } from './../auth-service.service';
import { CartService } from './../service/cart.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
size:any
constructor(private route:Router,private authServiceService:AuthServiceService,private cartService:CartService,private http:HttpClient){
  cartService.cartSize();
this.size=cartService.size;

}
  ngOnInit(): void {
    this.cartSize();
  }


goToPage(){
 this.route.navigate([`home/user/dashboard`]);
}
goToCart(){
  this.route.navigate([`home/cart`]);
}


goToTest(){
  this.route.navigate([`test`]);
}
logout(){
  this.authServiceService.logout();
}

isLogged():boolean{
  
return localStorage.hasOwnProperty("token");
}

userName(){
 return this.authServiceService.userName();
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
