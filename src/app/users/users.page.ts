import { Component, OnInit } from '@angular/core';
import {MovieService} from "../services/movie.service";
import {Observable} from "rxjs";
import {User} from '../services/movie.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
   public users$: Observable<User[]>;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
   // this.movieService.getUsers().subscribe(res => console.log(res[0]))
     this.users$ =  this.movieService.getUsers();


  }

}
