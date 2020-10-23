import { Component, OnInit, Input, ViewChild, ViewContainerRef, AfterViewInit } from "@angular/core";
import { FieldDataSource } from 'src/app/builder/model/data-source';
import { Fields, InputField, SelectField } from 'src/app/builder/model/field';
import { setPathData, getPathData } from 'src/app/share/object-func';
import { RenderService } from '../render.service';

@Component({
  selector: "app-field-render",
  templateUrl: "./field-render.component.html",
  styleUrls: ["./field-render.component.scss"]
})

export class FieldRenderComponent implements OnInit {
  @Input() field: Fields;
  // @ViewChild('fieldtemplate', { static: true, read: ViewContainerRef }) entry: ViewContainerRef;
  // componentRef: any;
  @Input() parentValue: any;
  dataSub: any;
  constructor(public renderService: RenderService) {

  }

  ngOnInit() {
    if (this.field['dataSource']) {
      this.dataSub = this.renderService.getDataSourceData(this.field['dataSource']).subscribe(x => {
        if (x) {
          (<FieldDataSource>this.field['dataSource']).data = x;
        }
      });
    }
  }
  valueChange(modelName, event) {
    setPathData(this.renderService.data, modelName, event);
    if (this.field.category === 0) {
      this.calculateComplexValue()
    }

  }
  onSelectionChange(event) {
    this.valueChange(this.field.model, event.value)
    if ((<SelectField>this.field).onSelect) {
      const selectField = (<SelectField>this.field)
      const selectedData = this.getSelectedData(event.value, selectField.valueMember);
      if (selectField.onSelect.mapper) {
        selectField.onSelect.mapper.forEach(x => {
          const data = getPathData(selectedData, x.source);
          setPathData(this.renderService.data, x.destination, data);
        })
      }
      if (selectField.onSelect.code) {
        const functionCode = this.functionParse(selectField.onSelect.code);
        functionCode.apply(this, [selectedData, selectField])
      }
    }
  }
  functionParse(code) {
    return Function('"use strict";return (' + code + ')')();
  }
  calculateComplexValue() {
    const calc = (<InputField>this.field).complexValueCalculation;
    if (!calc) {
      return
    }
    let equation = [];
    calc.equation.forEach(x => {
      if (x.fieldModel) {
        const val = this.getFieldValue(x.fieldModel);
        equation.push(val || 0)
      } else if (x.operator) {
        equation.push(x.operator)
      } else {
        equation.push(x.number)
      }
    })
    const result = eval(equation.join(''));
    setPathData(this.renderService.data, calc.resultModel, result);
  }
  getSelectedData(value, valueMemeberName) {
    const selectField = (<SelectField>this.field)
    return selectField.dataSource.data.find(x => x[valueMemeberName] === value)
  }
  getFieldValue(modelName) {
    let value = null;
    if (this.field.bindContainer) {
      value = getPathData(this.parentValue, modelName);
    } else {
      value = getPathData(this.renderService.data, modelName);
    }
    return value;
  }
}
