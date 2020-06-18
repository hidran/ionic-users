import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User, UsersService} from "../services/users.service";

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.page.html',
  styleUrls: ['./user-data.page.scss'],
})
export class UserDataPage implements OnInit {
 public user: User;
  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

 async ngOnInit() {

   // this.userId =  this.route.snapshot.params['id']
     const id =  this.route.snapshot.paramMap.get('id');
      this.user = await  this.usersService.getUserById(id);
      console.log(this.user)

  }

}
