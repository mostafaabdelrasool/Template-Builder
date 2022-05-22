import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Form } from "src/app/admin/model/forms";
import { FormFunction } from "src/app/builder/model/form-load-type";
import { UserApplicationService } from "../user-application.service";
import { Feature } from './../../admin/model/feature';
import { Containers } from './../../builder/model/containers';
import { mapProps } from 'src/app/share/object-func';
import { RenderService } from 'src/app/page-renderer/render.service';

@Component({
  selector: "app-user-feature",
  templateUrl: "./user-feature.component.html",
  styleUrls: ["./user-feature.component.scss"]
})

export class UserFeatureComponent implements OnInit {
  sidebarOpened: true;
  currentRoute: string;
  features$: Observable<Feature[]>;
  formSetting: Containers[];
  currentForm: Form;
  currentFormFunction: FormFunction;
  panelOpenState : boolean;
  constructor(private uappService: UserApplicationService, private route: ActivatedRoute,
    private router: Router, renderService: RenderService) {
    renderService.loadFormFeature.subscribe(x => {
      const formId = this.route.snapshot.queryParams.formId;
      this.getFeatureForm(x || formId);
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
          } else {
            this.formSetting = [];
          }
          this.currentFormFunction = new FormFunction();
          if (x.formFunction) {
            mapProps(JSON.parse(x.formFunction), this.currentFormFunction);
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
}
