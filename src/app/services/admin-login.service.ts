import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from '../components/model/credentials';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  //url="http://localhost:8081/api/check"
  tk:number;

  constructor(private http:HttpClient) { }

  login(user: Credentials): Observable<any> {
    let header = new HttpHeaders()
    header.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:8081/employee/validate', user, { headers: header });
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
}
