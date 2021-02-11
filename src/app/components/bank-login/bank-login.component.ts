import { Component, OnInit } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { LoginService } from 'src/app/services/login.service';
import {Credentials} from 'src/app/components/model/credentials'
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { AdminLoginService } from 'src/app/services/admin-login.service';

@Component({
  selector: 'app-bank-login',
  templateUrl: './bank-login.component.html',
  styleUrls: ['./bank-login.component.css']
})
export class BankLoginComponent implements OnInit {

  admin :[];
  msg:any;

  user:Credentials={
    email:"",
    password:""
  }
  constructor(private adminService:AdminLoginService,private _router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log("Login Success");
    this.adminService.login(this.user).subscribe((res) => {
      if (res.employeeid > 0) {
        console.log("Login Success");
        this.admin = res;
        localStorage.setItem('userid', res.employeeid);
        localStorage.setItem('userName', res.firstname);
        localStorage.setItem('lastname',res.lastname);
        localStorage.setItem('email', res.email);

        this._router.navigate(['aLogin']);
      } else {
        console.log(res.error);
        this.msg="Customer Not Found";
      }
    },
      (msg) => console.log("network error")
    )
  }


}
