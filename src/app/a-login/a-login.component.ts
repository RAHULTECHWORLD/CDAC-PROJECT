import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-login',
  templateUrl: './a-login.component.html',
  styleUrls: ['./a-login.component.css']
})
export class ALoginComponent implements OnInit {

  printUser:any=localStorage.getItem("userName");

  constructor() { }

  ngOnInit(): void {
  }

}
