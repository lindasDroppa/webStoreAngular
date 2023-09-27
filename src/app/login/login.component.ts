import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { LoginSuccess } from '../loginsucess';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  formGroup!: FormGroup;
  sigmupuser:any[]=[];
  signupObj:any ={
    name:'',surname:'',email:'',password:''
  };

formGroupR!: FormGroup;
  loginuser:any[]=[];
  loginObj:any ={
    email:'',password:''
  };

  
      
  viewModel='login';

  constructor (private authService:AuthServiceService,private router:Router){
  
    this.authService.isLogged.subscribe(result=>{
      if(result==true){
        console.log("logged")
        this.router.navigate(['home']);
      }else{
        alert("Invalid credentilas");
      }
    }
      );
      
  }
  changeViewMode(value:string){
    this.viewModel=value;
  }

 

  ngOnInit(): void {
   this.initForm();
    this.initFormR();
  }
  initForm(){
    this.formGroupR = new FormGroup({
      name:new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
     })
  }
  initFormR(){
    this.formGroup = new FormGroup({
      email: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
     })
  }


  loginProcess(){
    if(this.formGroup.valid){
      
     this.authService.loginUser(this.formGroup.value).subscribe(result=>{
      if(result.token!=null){
        
        localStorage.clear();
        alert("Login Success");
      
      
       localStorage.setItem('user',JSON.stringify(new LoginSuccess(result.name,result.token,result.email,result.id)));
        localStorage.setItem('name',JSON.stringify(result.name));
        localStorage.setItem('token',JSON.stringify(result.token));
        this.authService.logged.next(true);
        this.router.navigate(['home']);
        console.log(this.formGroup.value)

      }else{
        alert("Unsuccesful Try Again");
        
        localStorage.clear();
        
      }
     })
    }
  }

  createUser(){
    if(this.formGroupR.valid){
    let checked =this.authService.signUpAccount(this.formGroupR.value);
        
       if(2>1){
      
        console.log(JSON.stringify(checked));

        alert("Account created Login");
        
        
       }else{
        alert("User Exist");
       }
      
    
        
    }

    //  this.authService.signUpAccount(signupObj);
    }

  

}
