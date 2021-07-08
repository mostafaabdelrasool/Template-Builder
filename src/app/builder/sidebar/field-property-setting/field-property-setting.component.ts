import { Component, OnInit, Input } from "@angular/core";
import { Fields, InputField, FieldType } from '../../model/field';
import { AppService } from '../../share/Render/app.service';
import { FieldDataSource } from '../../model/data-source';
import { getPathData, objectKeys } from 'src/app/share/object-func';
import { BuilderService } from "../../builder.service";

@Component({
  selector: "app-field-property-setting",
  templateUrl: "./field-property-setting.component.html",
  styleUrls: ["./field-property-setting.component.scss"]
})

export class FieldPropertySettingComponent implements OnInit {
  @Input() currentField: Fields;
  modelProps: string[];
  constructor(public appService: AppService, private builderService: BuilderService) {
  }

  ngOnInit() {
    this.getModelProps();
  }
  typeValueChanged(event) {
    let input = (<InputField>this.currentField)
    input.typeName = event.value;
    if (event.value === 'datetime') {
      input.type = FieldType.DATEPICKER;
      input.typeName = '';
    } else {
      input.type = FieldType.INPUT_TEXT;
    }
    this.appService.updateFieldStyle(this.currentField);
  }
  bindToContainer() {
    if (this.currentField.bindContainer) {
      const parentContainer = this.appService.allContainers.find(x => x.id === this.currentField.containerId);
      if (parentContainer) {
        const ds = <FieldDataSource>parentContainer['dataSource'];
        if (ds) {
          this.modelProps = ds.dataStructure.map(d => d['name'])
        } else {
          //if container bind to main model not to DS
          if (this.builderService.currentForm) {
            var parentContainerData = getPathData(JSON.parse(this.builderService.currentForm.dataStructure), parentContainer.model);
            if (parentContainerData && parentContainerData.length > 0) {
              this.modelProps = objectKeys(parentContainerData[0]);
            }
          }
        }
      }
    } else {
      this.getModelProps();
    }
  }
  getModelProps() {
    if (this.builderService.currentForm && this.builderService.currentForm.dataStructure) {
      this.modelProps = objectKeys(JSON.parse(this.builderService.currentForm.dataStructure));
    }
  }

  fieldValueChanged(value , name) {
    this.appService.updateFieldProperty(this.currentField.id, value, name);
    this.currentField[name] = value;
  }

}
