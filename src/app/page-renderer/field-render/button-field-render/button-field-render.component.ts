import { Component, HostListener, Input, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { ButtonField, ElementAfterClick, ElementClickType } from "src/app/builder/model/field";
import { RenderService } from "../../render.service";
import { Location } from '@angular/common'

@Component({
  selector: "app-button-field-render",
  templateUrl: "./button-field-render.component.html",
  styleUrls: ["./button-field-render.component.scss"]
})

export class ButtonFieldRenderComponent implements OnInit {
  @Input() field: ButtonField;
  constructor(private renderService: RenderService, private route: ActivatedRoute,
    private _snackBar: MatSnackBar, private location: Location,
    private router: Router) {

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
          this.renderService.addFeature(featureId).subscribe(x => {
            this._snackBar.open("Saved Successfully", "Close");
            this.handleAferClick();
          });
          break;
        case ElementClickType.Navigate:
          this.navigateToForm(this.field.clickAction.formId ,this.field.clickAction.featureId)
          break;
        default:
          break;
      }
    }
  }
  handleAferClick() {
    if (!this.field.clickAction) {
      return;
    }
    switch (+this.field.clickAction.afterClick) {
      case ElementAfterClick.BackToPrevious:
        this.location.back();
        break;

      default:
        break;
    }
  }
  navigateToForm(formId :string ,featureId :string) {
    // changes the route without moving from the current view or
    // triggering a navigation event,
    let params = { formId: formId, featureId: featureId };
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge'
    });
  }
}
