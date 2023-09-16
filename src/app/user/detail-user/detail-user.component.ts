import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent {

  getId: any;
  updateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUserByID(this.getId).subscribe((response: { [x: string]: any; }) => {
      this.updateForm.setValue({
        username: response['username'],
        email: response['email'],
      });
    });

    this.updateForm = this.formBuilder.group({
      username: [''],
      email: ['']
    });
  }

  onUpdate(): any {
    this.userService.updateUser(this.getId, this.updateForm.value).subscribe(
      ()=> {
        console.log('User updated successfully');
        this.ngZone.run(() => this.router.navigateByUrl('/list-user'));
      },
      (err)=> {
        console.log(err);
      }
    );
  }
}
