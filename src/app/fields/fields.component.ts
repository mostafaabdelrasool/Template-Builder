import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Fields, FieldType } from '../model/field';
import { AppService } from '../share/Render/app.service';
import { Manager_Type } from '../model/manager';

@Component({
  selector: "app-fields",
  templateUrl: "./fields.component.html",
  styleUrls: ["./fields.component.scss"]
})

export class FieldsComponent implements OnInit {

  constructor(public appService: AppService) {
  }

  selectItem(field: Fields) {
    field.isSelected = true;
    this.appService.sidebarOpened = true;
    this.appService.currentManager = Manager_Type.STYLES;
    this.appService.currentField =undefined;
    setTimeout(() => {
    this.appService.currentField =field;
    }, 100);
    this.appService.fields.forEach(x => {
      if (x.id != field.id) {
        x.isSelected = false;
      }
    })
  }
  drop(event: CdkDragDrop<string[]>, item: Fields) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.appService.fields, event.previousIndex, event.currentIndex);
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
