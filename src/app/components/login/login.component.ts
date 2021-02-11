import { Component, OnInit } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { LoginService } from 'src/app/services/login.service';
import {Credentials} from 'src/app/components/model/credentials'
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customer:[];
  msg:any;
  //LOGIN OBJECT
  user:Credentials={
    email:"",
    password:""
  }
  constructor(private loginService:LoginService,private _router:Router) { }


 ngOnInit(): void {
  }


  onSubmit() {
    // console.log("Login Success");
    this.loginService.login(this.user).subscribe((res) => {
      if (res.customerid > 0) {
        console.log("Login Success");
        this.customer = res;
        localStorage.setItem('userid', res.customerid);
        localStorage.setItem('userName', res.firstname);
        localStorage.setItem('lastname',res.lastname);
        localStorage.setItem('email', res.email);

        this._router.navigate(['Usrlogin']);
      } else {
        console.log(res.error);
        this.msg="Customer Not Found";
      }
    },
      (msg) => console.log("network error")
    )
  }



/*
  ngOnInit(): void {
  }
  onSubmit(){
    console.log("Form is Submitted");
    console.log(this.user.email,this.user.password);
    //CHECK CONDITION FOR NOT NULL
    if((this.user.email!='' && this.user.password!='')&&(this.user.email!=null && this.user.password!=null))
    {

//TOKEN GENRATE
  this.loginService.generateToken(this.user).subscribe(

  (response:any)=>{
    //if token genrate success
    console.log(response.userid);
    this.loginService.loginUser(response.userid)
    window.location.href="/Usrlogin"

  }
  ,
  error=>{
    //if no token genrated
    console.log(error);

  }
  )


    }else{
      console.log("fields are empty");

    }
  }
*/

}

