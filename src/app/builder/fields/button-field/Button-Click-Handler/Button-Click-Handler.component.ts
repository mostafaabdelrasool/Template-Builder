import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Applications } from "src/app/admin/model/applications";
import { ButtonField, ELementClickAction, ElementClickType } from "src/app/builder/model/field";
import { Feature } from 'src/app/admin/model/feature';
import { Form } from 'src/app/admin/model/forms';
import { BuilderService } from "src/app/builder/builder.service";
import { Observable } from "rxjs";

@Component({
    selector: "app-Button-Click-Handler",
    templateUrl: "./Button-Click-Handler.component.html",
    styleUrls: ["./Button-Click-Handler.component.scss"],
    standalone: false
})

export class ButtonClickHandlerComponent implements OnInit {
  clickAction: ELementClickAction
  applications$: Observable<Applications[]>;
  features$: Observable<Feature[]>;
  form$: Observable<Form[]>;
  currentApplication: string = "";
  currentFeature: string = "";
  currentForm: string = "";
  constructor(@Inject(MAT_DIALOG_DATA) public data: ButtonField, private builderService: BuilderService) {
    if (data) {
      if (!data.clickAction) {
        this.clickAction = new ELementClickAction();
      } else {
        this.clickAction = { ...data.clickAction };
      }
    }

  }

  ngOnInit() {
    this.getApplications();
    if (this.clickAction.applicationId) {
      this.getFeatures(this.clickAction.applicationId);
    }
    if (this.clickAction.featureId) {
      this.getForms(this.clickAction.featureId);
    }
  }
  getApplications() {
    this.applications$ = this.builderService.getApplications();
  }
  getFeatures(appId: string) {
    this.features$ = this.builderService.getFeatures(appId);
  }
  getForms(featureId: string) {
    this.form$ = this.builderService.getForms(featureId)
  }

}
