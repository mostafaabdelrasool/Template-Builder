import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/core/data.api/auth.service";
import { Login, LoginResponse } from "../login";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})

export class RegisterComponent implements OnInit {

  login: Login
  constructor(private authenticationService: AuthenticationService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.login = new Login();
  }
  submit() {
    if (this.login.password != this.login.confirmPassword) {
      this.openSnackBar("Confirm password not the same as password", "close")
      return;
    }
    this.authenticationService.register(this.login).subscribe((x: LoginResponse) => {
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
