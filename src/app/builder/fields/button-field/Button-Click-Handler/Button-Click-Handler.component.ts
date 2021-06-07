import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { Applications } from "src/app/admin/model/applications";
import { ButtonField, ELementClickAction, ElementClickType } from "src/app/builder/model/field";
import { Feature } from 'src/app/admin/model/feature';
import { Form } from 'src/app/admin/model/forms';
import { BuilderService } from "src/app/builder/builder.service";

@Component({
  selector: "app-Button-Click-Handler",
  templateUrl: "./Button-Click-Handler.component.html",
  styleUrls: ["./Button-Click-Handler.component.scss"]
})

export class ButtonClickHandlerComponent implements OnInit {
  clickAction: ELementClickAction
  applications: Applications[];
  features: Feature[];
  form: Form[];
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

  }
  getApplications() {
    if (this.clickAction.type == ElementClickType.Navigate && !this.applications) {
      this.builderService.getApplications().subscribe((x: Applications[]) => {
        this.applications = x;
      })
    }
  }
  getFeatures(appId) {
    this.builderService.getFeatures(appId).subscribe(x => {
      this.features = x;
    })
  }
  getForms(featureId) {
    this.builderService.getForms(featureId).subscribe(x => {
      this.form = x;
    })
  }

}
