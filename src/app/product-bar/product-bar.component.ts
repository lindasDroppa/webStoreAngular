import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AddToCartService } from '../add-to-cart.service';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from './../service/cart.service';
import { ProductsService } from './../service/products.service';
import { AuthServiceService } from './../auth-service.service';

@Component({
  selector: 'app-product-bar',
  templateUrl: './product-bar.component.html',
  styleUrls: ['./product-bar.component.css']
})
export class ProductBarComponent  {

  products:any;
  formGroup!: FormGroup;
  numberofItem=1;

  constructor(private http:HttpClient,private addCart:AddToCartService,private router:Router,
    private cartService:CartService,private productsService:ProductsService, private authServiceService:AuthServiceService){

  }
  ngOnInit(): void {
    
      if(this.authServiceService.logged)
      {
 
        
       let response =this.http.get("http://127.0.0.1:8080/webStore/api/product/store",
       {headers:new HttpHeaders().append("token",this.authServiceService.token),
       params:new HttpParams().append("token",this.authServiceService.token)});
       response.subscribe((data)=>this.products=data)
      }else{
       
       let response =this.http.get("http://127.0.0.1:8080/webStore/api/product/all");
       response.subscribe((data)=>this.products=data)
      }
    
    this.initForm();
  }

  addToCartProcess():void{
    if(this.formGroup.valid){
 
      this.addCart.addToCart(this.formGroup.value);
      
    }

    
  }
  nevigateToDetails(value:string){
    this.router.navigate(['/test/'+value]);
  }

  initForm(){
    this.formGroup = new FormGroup({
      productId: new FormControl("",[Validators.required]),
      numberOfProduct: new FormControl("",[Validators.required])
    })
  }
  addToCart(productID:string):Boolean{
    alert("Item Added")
    window.location.reload()
   return this.cartService.addToCart(productID);
  }
  isAdded(data:any):Boolean{
    if(data==true){
        return true
    }else{
      return false
    }
  }

}
