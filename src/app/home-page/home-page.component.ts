import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  products:any;

  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    let response =this.http.get("http://127.0.0.1:8080/webStore/api/product/all");
    response.subscribe((data)=>this.products=data)
  }
  

}
