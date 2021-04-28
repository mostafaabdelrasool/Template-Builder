import { Component, OnInit } from '@angular/core';
import { UserApplicationService } from './user-application.service';
import { UserApplication } from './model/user-application';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-user-application',
  templateUrl: './user-application.component.html',
  styleUrls: ['./user-application.component.scss']
})
export class UserApplicationComponent implements OnInit {

  userApplication$: Observable<UserApplication[]>;
  constructor(private uappService: UserApplicationService) { }

  ngOnInit() {
    this.userApplication$ = this.uappService.getUserApplication();
  }
}
