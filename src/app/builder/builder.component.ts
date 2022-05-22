import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Form } from "../admin/model/forms";
import { BuilderService } from "./builder.service";
import { FormFunction } from "./model/form-load-type";
import { AppService } from './share/Render/app.service';

@Component({
  selector: "app-builder",
  templateUrl: "./builder.component.html",
  styleUrls: ["./builder.component.scss"],
  encapsulation: ViewEncapsulation.None

})

export class BuilderComponent implements OnInit {

  constructor(public appService: AppService, private builderService: BuilderService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    const formId = this.route.snapshot.queryParams['id'];
    if (formId) {
      this.builderService.getById(formId).subscribe((x: Form) => {
        this.appService.setFormSetting(x.formSetting);
        if (x.formFunction) {
          this.builderService.currentFormFunction = JSON.parse(x.formFunction);
        } else {
          this.builderService.currentFormFunction = new FormFunction();
        }
        this.builderService.currentForm = x;
      })
    }else{
      this.appService.setFormSetting(null);
    }
  }
}
