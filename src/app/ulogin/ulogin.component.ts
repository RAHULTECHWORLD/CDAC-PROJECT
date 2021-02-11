import { Component, OnInit } from '@angular/core';
import { Biodata } from '../components/model/biodata';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class UloginComponent implements OnInit {

  printUser:any=localStorage.getItem("userName");

  constructor(private userService:UserService,private us:UserService) {


   }

  ngOnInit(): void {
  }
}

