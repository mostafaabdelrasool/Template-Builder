import { Component, OnInit, Input } from "@angular/core";
import { Fields, FieldType } from '../../model/field';
import { AppService } from '../../share/Render/app.service';
import { MatDialog } from '@angular/material';
import { ComplexValueComponent } from '../../complex-value/complex-value.component';

@Component({
  selector: "app-field-action",
  templateUrl: "./field-action.component.html",
  styleUrls: ["./field-action.component.scss"]
})

export class FieldActionComponent implements OnInit {

  @Input() field: Fields;
  constructor(public appService: AppService, public dialog: MatDialog) {
  }

  ngOnInit() {

  }
  handleFieldAction(event, field:Fields) {
    const action = event.target.innerText;
    const index = this.appService.currentContainer.fields.findIndex(x => x.id === field.id);
    switch (action) {
      case 'delete':
        this.appService.deleteField(field,index)
        break;
      case 'file_copy':
        this.appService.copyField(field, index);
        break;
      case 'functions':
        this.openComplexValueSetting();
        break;
        case 'keyboard_arrow_up':
          this.selectParentContainr(field);
          break;
      default:
        break;
    }
  }
  getType(type) {
    return FieldType[type].toLowerCase()
  }
  openComplexValueSetting() {
    let setting = { width: '40vw', height: 'auto', data: this.field };
    const dialogRef = this.dialog.open(ComplexValueComponent, setting);
  }
  selectParentContainr(field:Fields){
    const parent =this.appService.allContainers.find(x=>x.id===field.containerId);
    if (parent) {
      this.appService.selectField(parent);
    }else{
      //root container
      this.appService.selectField(this.appService.containers[0]);
    }
   
  }
}
