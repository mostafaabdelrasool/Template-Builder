import { Component, HostListener, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  ButtonField,
  ElementAfterClick,
  ElementClickType,
} from "src/app/builder/model/field";
import { RenderService } from "../../render.service";
import { Location } from "@angular/common";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-button-field-render",
  templateUrl: "./button-field-render.component.html",
  styleUrls: ["./button-field-render.component.scss"],
  standalone: false,
})
export class ButtonFieldRenderComponent implements OnInit {
  @Input() field: ButtonField;
  constructor(
    private renderService: RenderService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {}
  @HostListener("click")
  clickInside() {
    if (this.field.clickAction) {
      const featureId = this.route.snapshot.queryParams["featureId"];
      if (!featureId) {
        return;
      }
      switch (+this.field.clickAction.type) {
        case ElementClickType.Submit:
          if (this.route.snapshot.queryParams["id"]) {
            this.renderService
              .updateFeature(featureId, this.renderService.data)
              .subscribe((x) => {
                this._snackBar.open("Saved Successfully", "Close");
                this.handleAferClick();
              });
          } else {
            this.renderService.addFeature(featureId).subscribe((x) => {
              this._snackBar.open("Saved Successfully", "Close");
              this.handleAferClick();
            });
          }

          break;
        case ElementClickType.Navigate:
          if (this.field.clickAction.formId && this.field.clickAction.featureId) {
            this.navigateToForm(
              this.field.clickAction.formId,
              this.field.clickAction.featureId
            );
          }
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
        this.renderService.loadFormFeature.next(
          this.renderService.getPreviosFormId()
        );
        this.renderService.setPreviosFormId('');
        break;

      default:
        break;
    }
  }
  navigateToForm(formId: string, featureId: string) {
    this.renderService.initData(featureId);
    // changes the route without moving from the current view or
    // triggering a navigation event,
    let params = { formId: formId, featureId: featureId };
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
    });
    //set previous formId to use it after submit data to go back to it and load it's setting
    this.renderService.setPreviosFormId(this.route.snapshot.queryParams['formId']);
    this.renderService.loadFormFeature.next(formId);
  }
}
