import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { UserApplicationService } from "../user-application.service";
import { Feature } from './../../admin/model/feature';

@Component({
  selector: "app-user-feature",
  templateUrl: "./user-feature.component.html",
  styleUrls: ["./user-feature.component.scss"]
})

export class UserFeatureComponent implements OnInit {
  sidebarOpened: true;
  currentRoute: string;
  features$: Observable<Feature[]>;
  constructor(private uappService: UserApplicationService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    const appId = this.route.snapshot.params.appId;
    if (appId)
      this.features$ = this.uappService.getApplicationFeatures(appId)
  }

}
