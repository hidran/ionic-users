import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersPage } from './users.page';
import {UserDetailComponent} from "../user-detail/user-detail.component";

const routes: Routes = [
  {
    path: '',
    component: UsersPage,

  },
  {
    path: ':id/detail',
    component: UserDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersPageRoutingModule {}
