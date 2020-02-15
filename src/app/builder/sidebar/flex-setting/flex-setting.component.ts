import { Component, OnInit, Input } from "@angular/core";
import { Fields } from '../../model/field';
import { AppService } from '../../share/Render/app.service';

@Component({
  selector: "app-flex-setting",
  templateUrl: "./flex-setting.component.html",
  styleUrls: ["./flex-setting.component.scss"]
})

export class FlexSettingComponent implements OnInit {
  
  @Input() currentField: Fields;
  constructor(public appService: AppService) {
  }


  ngOnInit() {
   if (!this.currentField.style.fxFlex) {
    this.currentField.style.fxFlex={};
   }
  }
  updateStyle(event, styleName) {
    this.currentField.style.fxFlex[styleName] = event;
    this.filedValueChanged();
  }
  filedValueChanged() {
    const style = { ...this.currentField.style }
    //this work around to detect child property change;
    this.currentField.style = undefined;
    this.currentField.style = style
  }
  setFlexSetting(flexType, value) {
    this.currentField.style.fxFlex[flexType] = value;
    this.filedValueChanged();
  }
}
