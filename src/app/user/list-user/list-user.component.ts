import { Component, OnInit } from '@angular/core';
import { User } from '@user';
import { UserService } from '@service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit{

  gUsers : User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (response: any)=> {
        console.log(response);
        this.gUsers = response;
      });
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.userService.deleteUserByID(id).subscribe(() => {
        this.gUsers.splice(i, 1);
      });
    }
  }
}
