import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  setLoginData(data) {
    localStorage.setItem('username', data.username);
    localStorage.setItem('password', data.password);
  }

  setUserDetails(data){
    console.log(data);
  }
}
