import { Component, OnInit, Input } from "@angular/core";
import { Fields, InputField } from '../model/field';
import { AppService } from '../share/Render/app.service';
import { MatDialog } from '@angular/material';
import { RichTextSettingComponent } from './rich-text-setting/rich-text-setting.component';

@Component({
  selector: "app-fields",
  templateUrl: "./fields.component.html",
  styleUrls: ["./fields.component.scss"],
})

export class FieldsComponent implements OnInit {
  @Input() field: InputField;
  performAction: boolean;
  constructor(public appService: AppService,public dialog: MatDialog) {
  }
  handleAction() {
    this.performAction = true;
    //to fire this set event 
    setTimeout(() => {
      this.performAction = false;
    });
  }
  openTextSetting(){
    let setting = { width: '50vw', height: 'auto', data: this.field };
    this.dialog.open(RichTextSettingComponent, setting);
  }
  

  ngOnInit() {
  }
}
