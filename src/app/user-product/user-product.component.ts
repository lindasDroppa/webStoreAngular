import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.css']
})
export class UserProductComponent {

  products:any;

  constructor(private http:HttpClient){}
  
  
 
}
