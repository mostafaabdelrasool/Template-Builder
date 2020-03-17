import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AppService } from './share/Render/app.service';
import { BuilderService } from './builder.service';
import { ActivatedRoute } from '@angular/router';
import { Form } from '../forms/model/forms';

@Component({
  selector: "app-builder",
  templateUrl: "./builder.component.html",
  styleUrls: ["./builder.component.scss"],
  encapsulation: ViewEncapsulation.None

})

export class BuilderComponent implements OnInit {

  constructor(public appService: AppService, private builderService: BuilderService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.builderService.getById(+this.route.snapshot.queryParams['id']).subscribe((x: Form) => {
      if(x.formSetting)
      this.appService.containers = JSON.parse(x.formSetting);
    })
  }
}
