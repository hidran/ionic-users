import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface Dob {
  date: Date;
  age: number;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface User {
  gender: string;
  name: Name;
  email: string;
  login: Login;
  dob: Dob;
  phone: string;
  picture: Picture;
  nat: string;
}

export interface Users {
  results: User[];
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
   apiURL = 'https://randomuser.me/api/?results=100&inc=email,gender,name,nat,picture,dob,phone,login&noinfo';
  constructor(private http: HttpClient) {

  }
  getUsers() {
    return this.http.get<Users>(this.apiURL).pipe(
        map(res => res.results)
    );
  }
}
