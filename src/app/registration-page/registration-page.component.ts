import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      emailid: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    let formData ={
      firstname: this.registrationForm.get('firstname').value,
      lastname: this.registrationForm.get('lastname').value,
      emailid: this.registrationForm.get('emailid').value,
      username: this.registrationForm.get('username').value,
      password: this.registrationForm.get('password').value
    }
    this.userService.setUserDetails(formData);
    
  }

}
