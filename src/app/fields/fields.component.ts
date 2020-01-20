import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Fields, FieldType } from '../model/field';
import { AppService } from '../share/Render/app.service';
import { Manager_Type } from '../model/manager';

@Component({
  selector: "app-fields",
  templateUrl: "./fields.component.html",
  styleUrls: ["./fields.component.scss"],
})

export class FieldsComponent implements OnInit {
  @Input() field: Fields;
  constructor(public appService: AppService) {
  }


  selectField(field: Fields) {
    field.isSelected = true;
    this.appService.sidebarOpened = true;
    this.appService.currentManager = Manager_Type.STYLES;
    this.appService.currentField = undefined;
    setTimeout(() => {
      //this is a work around because angular doesn't detect change of child properties so i clear all and set again
      this.appService.currentField = field;
    }, 100);
  }

  ngOnInit() {
  }
}
