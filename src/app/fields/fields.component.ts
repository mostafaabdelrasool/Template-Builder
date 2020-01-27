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


 

  ngOnInit() {
  }
}
