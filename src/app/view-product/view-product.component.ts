import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../service/products.service';
import { Product } from './../Products';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  viewProductz:Product|any

  constructor(private activated:ActivatedRoute,private prodService:ProductsService){this.viewProductz=""}
    
  ngOnInit(): void {
    
    let producctId:any=this.activated.snapshot.paramMap.get('productId');
 
  }

  
  

}
