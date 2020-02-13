import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User} from '../model/user.model'
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  form: FormGroup
  alertErrorMessage: string

  constructor(private authService: AuthService) {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  get token(){
    return localStorage.getItem('token')
  }

  ngOnInit() {
  }

  login(){
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }
    
    this.authService.login(user).subscribe( response => {
      localStorage.setItem('token', response.idToken)
      this.alertErrorMessage = ''
      this.form.reset()
    }, err => {
      console.log(err.error.error.message)
      this.alertErrorMessage = err.error.error.message
    })
  }

  logout(){
    localStorage.clear()
  }
}
