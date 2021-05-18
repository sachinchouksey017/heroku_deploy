import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post('https://backend-bookstore.herokuapp.com/bookstore_user/login', data)
  }

}
