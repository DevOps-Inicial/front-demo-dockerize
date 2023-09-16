import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './user/list-user/list-user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-user', pathMatch: 'full'},
  { path: 'list-user', component: ListUserComponent },
  { path: 'add-user', component: CreateUserComponent },
  { path: 'edit-user/:id', component: DetailUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
