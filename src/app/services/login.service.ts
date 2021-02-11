import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from '../components/model/credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //url="http://localhost:8081/api/check"
  tk:number;

  constructor(private http:HttpClient) { }

  login(user: Credentials): Observable<any> {
    let header = new HttpHeaders()
    header.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:8081/customer/validate', user, { headers: header });
  }

  isLoggedIn()
  {
    let id=localStorage.getItem("userid");
    if(id==undefined || id===''|| id==null)
    {
      return false;
    }
    else{
      return true;
    }
  }

  gettoken(){
    return localStorage.getItem("userid")
  }

  logout(){
    localStorage.removeItem('userid');
    localStorage.removeItem('username');
    localStorage.removeItem('lastname');
    localStorage.removeItem('email');
    return true;
  }


  /*
  //calling the server to genrate token to dologin
  generateToken(credentials:any){
    //token genrate
    return this.http.post(`${this.url}`,credentials);

  }


  //user_login
  loginUser(token)
  {
    localStorage.setItem("token",token)
    return true;
  }

  //CHECK WETHER TOKEN IS AVAILABLE THERE OR NOT
  isLoggedIn()
  {
    let token=localStorage.getItem("token");
    if(token==undefined || token===''|| token==null)
    {
      return false;
    }
    else{
      return true;
    }
  }

  //LOG OUT REMOVE TOKEN
  logout(){
    localStorage.removeItem('token');
    return true;
  }

  //GET TOKEN WHO IS LOGGED IN THERE
  gettoken(){
    return localStorage.getItem("token")
  }
  */
}
