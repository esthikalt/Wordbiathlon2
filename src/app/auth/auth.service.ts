import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthData } from "./auth-data.model";
import { Subject } from "rxjs";

@Injectable({ providedIn: "root" })

export class AuthService {

  private name;
  private isAuthenticated = false;
  private token:any = null;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient){}

  getName(){
    return this.name;
  }

  getToken(){
    return this.token;
  }

  getIsAuth(){
    return this.isAuthenticated;
  }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  createUser(email: string, password: string, name: string){
    const authData:AuthData = {email: email, password: password, name: name};
    this.http.post("http://localhost:3000/api/user/signup", authData)
    .subscribe(response => {
      console.log(response);
    });
  }

  login(email: string, password: string, name:string){
    const authData:AuthData = {email: email, password: password, name: name};
    this.http.post<{token: string}>("http://localhost:3000/api/user/login", authData)
      .subscribe(response => {
      const token = response.token;
      this.token = token;
      if(token) {
        this.name = name;
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
      }
      })
  }

  logout(){
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
  }
}
