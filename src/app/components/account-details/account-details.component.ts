import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Biodata } from '../model/biodata';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  biodata:Biodata;
  constructor(private us:UserService) {this.biodata=new Biodata()}

  ngOnInit(): void {
    this.AD();
  }
  // this.biodata=this.us.getUser();


  AD()
  {
    let userid:any=localStorage.getItem('userid');
    this.us.getUser(userid).subscribe(
      (data)=>{
     this.biodata=data;
     console.log(this.biodata);
      }
      ,(error)=>{

      }

    );
  }

}
