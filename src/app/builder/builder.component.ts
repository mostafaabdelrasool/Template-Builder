import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AppService } from './share/Render/app.service';
import { ActivatedRoute } from '@angular/router';
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
  }
}
