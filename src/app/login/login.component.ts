import { Component, OnInit } from '@angular/core';
import { Login, LoginResponse } from './login';
import { Router } from '@angular/router';
import { AuthenticationService } from '../core/data.api/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login
  constructor(private authenticationService: AuthenticationService, private router: Router,
     private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.login = new Login();
  }
  submit() {
    this.authenticationService.login(this.login.userName, this.login.password).subscribe((x: LoginResponse) => {
      this.router.navigate(['/admin']);
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
