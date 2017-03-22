import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptions } from '@angular/http';

import {User} from "./../../model/user";



@Injectable()
export class LoginService {

  constructor(private http: Http) { }


  login() {

    let url_verify = "proxy/login/verify";
    let url_login = "proxy/login";

    return this.http.get(url_login)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        //if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
         //localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
        //}
      });
  }

  verify() {
    let headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*','Accept': 'application/json','X-Requested-With': 'XMLHttpRequest' });
    let options = new RequestOptions({ headers: headers });


    let userName: "anda";
    let url_verify = "proxy/login/verify";
    let url_login = "proxy/login";
    let food = {userName: userName};

    let user:User = new User();


    user.username = "anda";
    user.password = "anda";
    user.firstName = "hola";
    user.lastName = "chau";

    let msg = JSON.stringify({
      user
    });

    console.log("Mensaje: " +msg);

    return this.http.post(url_verify,user,options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        //if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        // localStorage.setItem('currentUser', JSON.stringify(user));
        //}
      });
  }


}
