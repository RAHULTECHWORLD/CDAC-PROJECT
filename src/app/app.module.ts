import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { BackgroundComponent } from './components/background/background.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { BankLoginComponent } from './components/bank-login/bank-login.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ContectComponent } from './components/contect/contect.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ManageblogsComponent } from './components/admin/manageblogs/manageblogs.component';
import { CategoriesComponent } from './components/admin/categories/categories.component';
import { PagesComponent } from './components/admin/pages/pages.component';
import {MatButtonModule} from '@angular/material/button';
import { UloginComponent } from './ulogin/ulogin.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginService } from './services/login.service';
import { AuthGuard } from './services/auth.guard';
import { AuthIntercepter } from './services/auth.intercepter';
import { ALoginComponent } from './a-login/a-login.component';
import { ViewBalanceComponent } from './components/view-balance/view-balance.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { FundTransferComponent } from './components/fund-transfer/fund-transfer.component';
import { FixedDepositComponent } from './components/fixed-deposit/fixed-deposit.component';
import {MatTableModule} from '@angular/material/table';
import { DebitAmountComponent } from './components/debit-amount/debit-amount.component';
import { CreditAccountComponent } from './components/credit-account/credit-account.component';
import { DeleteAccountComponent } from './components/delete-account/delete-account.component';
import { ViewAccountDetailsComponent } from './components/view-account-details/view-account-details.component';
import { SignupComponent } from './components/signup/signup.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BackgroundComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    BankLoginComponent,
    AboutComponent,
    ServiceComponent,
    ContectComponent,
    AdminComponent,
    DashboardComponent,
    ManageblogsComponent,
    CategoriesComponent,
    PagesComponent,
    UloginComponent,
    ALoginComponent,
    ViewBalanceComponent,
    AccountDetailsComponent,
    FundTransferComponent,
    FixedDepositComponent,
    DebitAmountComponent,
    CreditAccountComponent,
    DeleteAccountComponent,
    ViewAccountDetailsComponent,
    SignupComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
    MatProgressBarModule,
    NgbModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule



  ],
  providers: [LoginService,AuthGuard,[{provide:HTTP_INTERCEPTORS,useClass:AuthIntercepter,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
