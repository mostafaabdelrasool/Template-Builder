import { Component, OnInit } from "@angular/core";
import { NavigationEnd, ResolveStart, Router } from "@angular/router";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
  standalone: false,
})
export class AdminComponent implements OnInit {
  sidebarOpened: true;
  currentRoute: string;
  constructor(private router: Router) {
    router.events
      .pipe(filter((x) => x instanceof NavigationEnd))
      .subscribe((val) => {
        if (val && val.url)
          this.currentRoute = val.url.substring(1, val.url.length);
      });
  }

  ngOnInit() {}
}
