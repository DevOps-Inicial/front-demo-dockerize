import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private userService: UserService
  ) {
    this.userForm = this.formBuilder.group({
      username: [''],
      email: ['']
    });
  }

  onSubmit(): any {
    this.userService.createUser(this.userForm.value).subscribe(
      ()=> {
        console.log('User registered successfully');
        this.ngZone.run(()=> this.router.navigateByUrl('/list-user'));
      },
      (err) => {
        console.log(err);
      });
  }
}
