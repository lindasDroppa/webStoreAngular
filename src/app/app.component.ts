import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'app-root',
  template: `
  <app-nav-bar></app-nav-bar>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  isLogged: boolean | undefined;
  v:string=""

  constructor(private router:Router,private authService:AuthServiceService){
  
  if(authService.token==null){
    this.router.navigate(['home/login']);
    
  }else{
    this.v=authService.token.slice(1,-1);
    console.log(this.v)
    authService.getbyTkn(this.v).subscribe()
    this.router.navigate(['home']);
  }
  }

  goToPage(pageName:String):void{
    this.router.navigate([`${pageName}`]);
  }
}
