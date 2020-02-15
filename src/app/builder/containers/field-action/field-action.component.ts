import { Component, OnInit, Input } from "@angular/core";
import { Fields, FieldType } from '../../model/field';
import { AppService } from '../../share/Render/app.service';

@Component({
  selector: "app-field-action",
  templateUrl: "./field-action.component.html",
  styleUrls: ["./field-action.component.scss"]
})

export class FieldActionComponent implements OnInit {
  
  @Input() field: Fields;
  constructor(public appService: AppService) {
  }

  ngOnInit() {

  }
  handleFieldAction(event, field) {
    const action = event.target.innerText;
    const index = this.appService.currentContainer.fields.findIndex(x => x.id === field.id);
    switch (action) {
      case 'delete':
        this.appService.currentContainer.fields.splice(index, 1);
        break;
        case 'file_copy':
          const newField={...field,id:new Date().toString()}
          this.appService.currentContainer.fields.splice(index,0, newField);
          break;
        
      default:
        break;
    }
  }
  getType(type){
   return FieldType[type].toLowerCase()
  }
}
