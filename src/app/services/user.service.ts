import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Biodata } from '../components/model/biodata';
import { Signup } from '../components/model/signup';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  biodata:Biodata;


  constructor(private http:HttpClient) {
    this.biodata=new Biodata();
   }

getUser(userid:Number):Observable<Biodata>
{
  let baseUrl='http://localhost:8081/customer/customer/'+userid;
  return this.http.get<Biodata>(`${baseUrl}`);
}

getBalance(userid:Number):Observable<any>
{
  let header = new HttpHeaders()
    header.append('Content-Type', 'application/json');

  let baseUrl='http://localhost:8081/account/balance/'+userid;
  return this.http.get(baseUrl);
}


createBankAccount(registerUser:Signup):Observable<any>
{
  let header = new HttpHeaders()
  header.append('Content-Type', 'application/json');
  return this.http.post('http://localhost:8081/customer/customer', registerUser, { headers: header });

}


}
