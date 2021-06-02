import { Component, HostListener, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ButtonField, ElementClickType } from "src/app/builder/model/field";
import { RenderService } from "../../render.service";

@Component({
  selector: "app-button-field-render",
  templateUrl: "./button-field-render.component.html",
  styleUrls: ["./button-field-render.component.scss"]
})

export class ButtonFieldRenderComponent implements OnInit {
  @Input() field: ButtonField;
  constructor(private renderService: RenderService, private route: ActivatedRoute) {

  }

  ngOnInit() {

  }
  @HostListener('click')
  clickInside() {
    if (this.field.clickAction) {
      const featureId = this.route.snapshot.queryParams.featureId;
      if (!featureId) {
        return
      }
      switch (+this.field.clickAction.type) {
        case ElementClickType.AddFeature:
          this.renderService.addFeature(featureId).subscribe(x => { }, x => {
            debugger
          });
          break;

        default:
          break;
      }
    }
  }
}
