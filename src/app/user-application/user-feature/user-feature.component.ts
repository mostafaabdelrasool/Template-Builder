import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Form } from "src/app/admin/model/forms";
import { UserApplicationService } from "../user-application.service";
import { Feature } from './../../admin/model/feature';
import { map } from 'rxjs/operators';

@Component({
  selector: "app-user-feature",
  templateUrl: "./user-feature.component.html",
  styleUrls: ["./user-feature.component.scss"]
})

export class UserFeatureComponent implements OnInit {
  sidebarOpened: true;
  currentRoute: string;
  features$: Observable<Feature[]>;
  formSetting: string;
  currentForm: Form;
  constructor(private uappService: UserApplicationService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    const appId = this.route.snapshot.params.appId;
    if (appId)
      this.features$ = this.uappService.getApplicationFeatures(appId)
  }

  getFeatureForm(featureId: string) {
    if (featureId) {
      this.uappService.getFeatureForm(featureId).subscribe((x: Form) => {
        if (x) {
          if (x.formSetting) {
            this.formSetting = JSON.parse(x.formSetting);
          }
          this.currentForm = x;
        }
      });
    }
  }
}
