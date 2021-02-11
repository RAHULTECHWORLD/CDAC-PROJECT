import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-balance',
  templateUrl: './view-balance.component.html',
  styleUrls: ['./view-balance.component.css']
})
export class ViewBalanceComponent implements OnInit {

  balance:Number;
  constructor(private us:UserService) { }

  ngOnInit(): void {
    this.VB();
  }

  VB()
{
  let userid:any=localStorage.getItem('userid');
  this.us.getBalance(userid).subscribe(
     (res)=>{
       this.balance=res.Balance;
       console.log(this.balance);

     }
     ,(error)=>{

    }

  );
}

}


