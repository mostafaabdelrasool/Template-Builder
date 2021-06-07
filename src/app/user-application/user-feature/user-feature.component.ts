import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { Form } from "src/app/admin/model/forms";
import { FormFunction } from "src/app/builder/model/form-load-type";
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
  currentFormFunction: FormFunction;
  routeSub: Subscription;
  constructor(private uappService: UserApplicationService, private route: ActivatedRoute,
    private router: Router) {
    this.routeSub=this.route.queryParamMap.subscribe(x => {
      const formId = x.get("formId");
      this.getFeatureForm(formId)
    })
  }

  ngOnInit() {
    const appId = this.route.snapshot.params.appId;
    const formId = this.route.snapshot.queryParams.formId;
    if (appId) {
      this.features$ = this.uappService.getApplicationFeatures(appId)
    }
    if (formId) {
      this.getFeatureForm(formId);
    }
  }

  getFeatureForm(formId: string) {
    if (formId && (!this.currentForm || this.currentForm.id != formId)) {
      this.uappService.getFeatureForm(formId).subscribe((x: Form) => {
        if (x) {
          if (x.formSetting) {
            this.formSetting = JSON.parse(x.formSetting);
          }
          if (x.formFunction) {
            this.currentFormFunction = JSON.parse(x.formFunction);
          } else {
            this.currentFormFunction = new FormFunction();
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
    let params = { formId: form.id, featureId: form.featureId };
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge'
    });
  }
  OnDestroy() {
    this.routeSub.unsubscribe();
  }
}
