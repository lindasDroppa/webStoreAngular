import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthServiceService } from './../auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  walletAmount=0;
  constructor(private httpClient:HttpClient,private authServiceService:AuthServiceService) { }

  get wallet(){
      
      this.httpClient.get<number>("http://127.0.0.1:8080/webStore/api/wallet/balance",{headers:new HttpHeaders().append("token",this.authServiceService.token),params:new HttpParams().append("token",this.authServiceService.token)}).subscribe(waller=>
      this.walletAmount=waller);
      return this.walletAmount;
  }
}
