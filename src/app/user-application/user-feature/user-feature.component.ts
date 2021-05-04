import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Form } from "src/app/admin/model/forms";
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
  formSetting: string;
  currentForm: Form;
  constructor(private uappService: UserApplicationService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const appId = this.route.snapshot.params.appId;
    if (appId)
      this.features$ = this.uappService.getApplicationFeatures(appId)
  }

  getFeatureForm(formId: string) {
    if (formId && (!this.currentForm || this.currentForm.id != formId)) {
      this.uappService.getFeatureForm(formId).subscribe((x: Form) => {
        if (x) {
          if (x.formSetting) {
            this.formSetting = JSON.parse(x.formSetting);
          }
          this.currentForm = x;
          this.navigateToForm(x);
        }
      });
    }
  }
  navigateToForm(form: Form) {
    // changes the route without moving from the current view or
    // triggering a navigation event,
    let params = { formId: form.id };
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge',
    });
  }
}
