import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginSuccess } from './../loginsucess';
import { WalletService } from './../service/wallet.service';
import { AuthServiceService } from './../auth-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent 
{
 


  constructor(private router:Router,private walletService:WalletService,private authServiceService:AuthServiceService)
  { 
    
  }

  
   navigateTo(values:string):any{
    this.router.navigate([values]);
    console.log(this.getToken());
  }
  private getToken():LoginSuccess|any{
    
   const  localData=localStorage.getItem('user');

   
   
    return localData;
    
  }
  getWalletAmount(){
    
    return this.walletService.wallet;
  }
  // userName(){
  //   return this.authServiceService.userName();
  // }

}
