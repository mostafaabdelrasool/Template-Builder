import { Component, OnInit, Input } from "@angular/core";
import { Fields } from "../../model/field";
import { AppService } from "../../share/Render/app.service";

@Component({
  selector: "app-flex-setting",
  templateUrl: "./flex-setting.component.html",
  styleUrls: ["./flex-setting.component.scss"],
  standalone: false,
})
export class FlexSettingComponent implements OnInit {
  @Input() currentField: Fields;
  constructor(public appService: AppService) {}

  ngOnInit() {
    if (this.currentField.style && !this.currentField.style.fxFlex) {
      this.currentField.style.fxFlex = {};
    }
  }
  updateStyle(event: any, styleName: string) {
    if (this.currentField.style && this.currentField.style.fxFlex) {
      this.currentField.style.fxFlex[
        styleName as keyof typeof this.currentField.style.fxFlex
      ] = event;
    }
    this.filedValueChanged();
  }
  filedValueChanged() {
    const style = { ...this.currentField.style };
    //this work around to detect child property change;
    this.currentField.style = undefined;
    this.currentField.style = style;
  }
  setFlexSetting(flexType: any, value: any) {
    if (this.currentField.style && this.currentField.style.fxFlex) {
      this.currentField.style.fxFlex[
        flexType as keyof typeof this.currentField.style.fxFlex
      ] = value;
    }
    this.filedValueChanged();
  }
}
