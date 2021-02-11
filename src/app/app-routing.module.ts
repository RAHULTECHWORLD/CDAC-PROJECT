import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BankLoginComponent } from './components/bank-login/bank-login.component';
import { ContectComponent } from './components/contect/contect.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceComponent } from './components/service/service.component';
import { AuthGuard } from './services/auth.guard';
import { UloginComponent } from './ulogin/ulogin.component';
import {ALoginComponent} from './a-login/a-login.component';
import { ViewBalanceComponent } from './components/view-balance/view-balance.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { FixedDepositComponent } from './components/fixed-deposit/fixed-deposit.component';
import {CreditAccountComponent} from './components/credit-account/credit-account.component';
import {DebitAmountComponent} from './components/debit-amount/debit-amount.component';
import {DeleteAccountComponent} from './components/delete-account/delete-account.component';
import {ViewAccountDetailsComponent} from './components/view-account-details/view-account-details.component';
import { SignupComponent } from './components/signup/signup.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:"test",
  component:TestComponent,
  pathMatch:"full"
  },
  {
    path:"view",
  component:ViewAccountDetailsComponent,
  pathMatch:"full"

  },
  {
    path:"close",
  component:DeleteAccountComponent,
  pathMatch:"full"

  },
  {
    path:"debit",
  component:DebitAmountComponent,
  pathMatch:"full"

  },
  {
    path:"credit",
  component:CreditAccountComponent,
  pathMatch:"full"

  },
  {
    path:"fixD",
  component:FixedDepositComponent,
  pathMatch:"full"

  },
  {
    path:"fundT",
    component:FundTransferComponent,
    pathMatch:"full"
    }
    ,
  {
    path:"accD",
    component:AccountDetailsComponent,
    pathMatch:"full"
    },
  {
    path:"viewB",
    component:ViewBalanceComponent,
    pathMatch:"full"
    },

  {
    path:"aLogin",
    component:ALoginComponent,
    pathMatch:"full",
    canActivate:[AuthGuard]

  },
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  }
  ,
{
  path:"login",
  component:LoginComponent,
  pathMatch:"full"
}
,
{
  path:'home',
  component:HomeComponent,
  pathMatch:"full"
}
,
{
  path:"banklogin",
  component:BankLoginComponent,
  pathMatch:"full"

}
,
{
  path:"about",
  component:AboutComponent,
  pathMatch:"full"
}
,
{
  path:"services",
  component:ServiceComponent,
  pathMatch:"full"

}
,
{
  path:"contact",
  component:ContectComponent,
  pathMatch:"full"

}
,
{
  path:"Usrlogin",
  component:UloginComponent,
  pathMatch:"full",
  canActivate:[AuthGuard]
},
{
  path:"signup",
  component:SignupComponent,
  pathMatch:"full"
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
