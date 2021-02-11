import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Biodata } from '../model/biodata';
import { Signup } from '../model/signup';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerUser:Signup;

  constructor(private _router:Router,private userService:UserService) {

    this.registerUser=new Signup();
   }

  ngOnInit(): void {
  }

onSubmit(form: NgForm) {

    console.log(this.registerUser);

    //  // adjust 0 before single digit date
    //  let date = ("0" + this.registerUser.dob["day"]).slice(-2);

    //  // current month
    //  let month = ("0" + (this.registerUser.dob["month"] + 1)).slice(-2);


    //  // current year
    //  let year = this.registerUser.dob["year"];

    // prints date in DD-MM-YYYY format
    // this.registerUser.dob = (year + "-" + month + "-" + date);
     console.log(this.registerUser.dob);

     this.userService.createBankAccount(this.registerUser).subscribe((res) => {

      if (res == "Customer Not Found") {
         console.log(res);
         this._router.navigate(['/signup']);
       }
       else if (res != null && res.customerid >0) {
         this._router.navigate(['/login']);

     } else {
        console.log(res.error());
        this._router.navigate(['/login']);
      }
    },
       () => console.log("network error")
     )
   }

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserService } from 'src/app/services/user.service';
// import { Biodata } from '../model/biodata';
// import { Signup } from '../model/signup';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-service',
//   templateUrl: './service.component.html',
//   styleUrls: ['./service.component.css']
// })
// export class ServiceComponent implements OnInit {
//   registerUser:Signup;

//   constructor(private _router:Router,private userService:UserService) {
//     this.registerUser=new Signup();

//    }

//   ngOnInit(): void {
//   }
//   onSubmit(form: NgForm) {

//     console.log(this.registerUser);

//     // adjust 0 before single digit date
//     let date = ("0" + this.registerUser.dob["day"]).slice(-2);

//     // current month
//     let month = ("0" + (this.registerUser.dob["month"] + 1)).slice(-2);

//     // current year
//     let year = this.registerUser.dob["year"];

//     // prints date in DD-MM-YYYY format
//     this.registerUser.dob = (year + "-" + month + "-" + date);
//     console.log(this.registerUser.dob);

//     this.userService.createBankAccount(this.registerUser).subscribe((res) => {
//       if (res == "Customer Not Found") {
//         console.log(res);
//       }
//       else if (res != null && res.customerid == 0) {
//         this._router.navigate(['/customerlogin']);

//       } else {
//         console.log(res.error());
//       }
//     },
//       () => console.log("network error")
//     )
//   }
// }

  }
