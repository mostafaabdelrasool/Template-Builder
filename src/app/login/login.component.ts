import { Component, OnInit } from '@angular/core';
import { Login, LoginResponse } from './login';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AuthenticationService } from '../core/data.api/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login
  constructor(private authenticationService: AuthenticationService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.login = new Login();
  }
  submit() {
    this.authenticationService.login(this.login.userName, this.login.password).subscribe((x: LoginResponse) => {
      this.router.navigate(['/submission']);
    }, x => {
      this.openSnackBar("Wrong User or password", "close")
    })
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}