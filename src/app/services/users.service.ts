import { Users, User } from './../interfaces/user-interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiURL = 'https://randomuser.me/api/?seed=usersapp&results=100&inc=email,gender,name,nat,picture,dob,phone,login&noinfo';
  constructor(private http: HttpClient, private storage: Storage) {

  }

  async getUsers() {
    const users = await this.storage.get('users');
    console.log(users);
    if (users) {
      return users;
    }

    return this.http.get<Users>(this.apiURL).pipe(
      map(res => res.results),
      tap(resUsers => {

        this.storage.set('users', resUsers);
      })
    ).toPromise();
  }
  async getUserById(id: string): Promise<User> {

    const usercached = await this.storage.get('user-' + id);
    if (usercached) {
      return usercached;
    }
    const users = await this.getUsers();
    const userData = users.filter(user => user.login.uuid === id)[0];
    if (userData) {
      this.storage.set('user-' + id, userData);
    }
    return userData || [];
  }
}

const SERVERURL = 'http://localhost:3000/';
 const albumURL = 'albums/'; 
 const photo = 'photos/'; 
 function getAlbum(id) { 
   let album = fetch(SERVERURL + albumURL + id).then((res) => { 
     return res.json(); }).then((data) => { return data; }).catch(); 
     return album;
     } 
     let alb = getAlbum(1); 
     alb.then((res) => { console.log(res); });