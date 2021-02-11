import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from 'src/app/services/admin-login.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //by default login is false
  public loggedIn=false;

  // credentials={
  //   username:'',
  //   password:''
  // }

  constructor(private loginService:LoginService,private adminService:AdminLoginService) { }

  //navbar buttons change conditions
  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn()
    this.loggedIn=this.adminService.isLoggedIn()
  }

  //logout buttons
  logoutUser()
  {
    this.loginService.logout()
    location.reload()
  }

  islogin()
  {
    this.loginService.isLoggedIn()
    location.reload()
  }





}
