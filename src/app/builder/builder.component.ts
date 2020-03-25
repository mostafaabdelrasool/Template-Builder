import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AppService } from './share/Render/app.service';
import { ActivatedRoute } from '@angular/router';
import { Form } from '../admin/model/forms';
import { BuilderService } from './builder.service';

@Component({
  selector: "app-builder",
  templateUrl: "./builder.component.html",
  styleUrls: ["./builder.component.scss"],
  encapsulation: ViewEncapsulation.None

})

export class BuilderComponent implements OnInit {

  constructor(public appService: AppService, private route: ActivatedRoute, private builderService: BuilderService) {

  }

  ngOnInit() {
    const id = this.route.snapshot.queryParams['id'];
    if (id) {
      this.builderService.getById(+id).subscribe((x: Form) => {
        if (x.formSetting) {
          this.appService.containers = JSON.parse(x.formSetting);
        } else {
          this.appService.containers =[this.appService.getDefaultContainer()];
        }
      });
    }
  }
}
