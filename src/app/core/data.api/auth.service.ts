import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "src/app/model/user";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { LoginResponse } from "src/app/login/login";
import { Login } from "./../../login/login";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    const user = localStorage.getItem("user");
    if (user) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(user));
      this.currentUser = this.currentUserSubject.asObservable();
    }
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<any>(`${environment.apiUrl}api/Account/Login`, {
        username,
        password,
      })
      .pipe(
        map((data) => {
          // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
          // data.user.authdata = window.btoa(username + ':' + password);
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          data.user.token = data.token;
          this.currentUserSubject.next(data.user);
          return data;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    this.currentUserSubject.next(new User());
    this.router.navigate(["login"]);
  }

  register(login: Login): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${environment.apiUrl}api/Account/Register`, {
        userName: login.userName,
        password: login.password,
        email: login.email,
      })
      .pipe(
        map((data) => {
          // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
          // data.user.authdata = window.btoa(username + ':' + password);
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          data.user.token = data.token;
          this.currentUserSubject.next(data.user);
          return data;
        })
      );
  }
}
