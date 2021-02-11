import { Component, OnInit } from '@angular/core';
import { Ftmodel } from '../model/ftmodel';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {
  transerDetail:Ftmodel;
  msg:any;

  constructor() {
    this.transerDetail=new Ftmodel();
  }

  ngOnInit(): void {
  }

  onSubmit()
  {

  }

}
