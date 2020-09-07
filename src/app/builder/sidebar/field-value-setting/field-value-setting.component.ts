import { Component, OnInit, Input } from "@angular/core";
import { Fields, SelectField } from '../../model/field';
import { AppService } from '../../share/Render/app.service';

@Component({
  selector: "app-field-value-setting",
  templateUrl: "./field-value-setting.component.html",
  styleUrls: ["./field-value-setting.component.scss"]
})

export class FieldValueSettingComponent implements OnInit {
  @Input() currentField: Fields;
  constructor(public appService: AppService) { 

  }

  ngOnInit() {

  }
  getFieldDataStructure() {
    return (<SelectField>this.currentField).dataSource ?
      (<SelectField>this.currentField).dataSource.dataStructure : null;
  }
}
