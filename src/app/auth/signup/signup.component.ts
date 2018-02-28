import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  minAgeInYears = 18;
  maxDate: Date;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - this.minAgeInYears);
  }

  onSubmit(form){
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }

}
