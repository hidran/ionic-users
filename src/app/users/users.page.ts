import { Component, OnInit } from '@angular/core';
import {UsersService} from "../services/users.service";
import {Observable} from "rxjs";
import {User} from '../services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  public users$: Promise<User[]>;

  constructor(private userService: UsersService) { }

  ngOnInit() {
   // this.movieService.getUsers().subscribe(res => console.log(res[0]))
    this.users$ =  this.userService.getUsers();

  }

}
