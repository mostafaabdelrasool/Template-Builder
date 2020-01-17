import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Fields, FieldType } from '../model/field';
import { AppService } from '../share/Render/app.service';
import { Manager_Type } from '../model/manager';

@Component({
  selector: "app-fields",
  templateUrl: "./fields.component.html",
  styleUrls: ["./fields.component.scss"],
  encapsulation:ViewEncapsulation.None
})

export class FieldsComponent implements OnInit {
  @Input() fields: Fields[];
  constructor(public appService: AppService) {
  }

  selectItem(field: Fields) {
    field.isSelected = true;
    this.appService.sidebarOpened = true;
    this.appService.currentManager = Manager_Type.STYLES;
    this.appService.currentField = undefined;
    setTimeout(() => {
//this is a work around because angular doesn't detect change of child properties so i clear all and set again
      this.appService.currentField = field;
    }, 100);
  }
  drop(event: CdkDragDrop<string[]>, item: Fields) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.appService.currentContainer.fields, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  ngOnInit() {

  }
}
