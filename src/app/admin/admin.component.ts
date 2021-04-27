import { Component, OnInit } from '@angular/core';
import { ResolveStart, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  sidebarOpened: true;
  currentRoute: string;
  constructor(private router: Router) {
    router.events.subscribe((val: ResolveStart) => {
      if (val && val.url)
        this.currentRoute = val.url.substring(1, val.url.length);
    });
  }

  ngOnInit() {
  }

}
