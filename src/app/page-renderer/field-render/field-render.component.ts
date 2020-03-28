import { Component, OnInit, Input } from "@angular/core";
import { Fields, InputField, FieldType, SelectField } from 'src/app/builder/model/field';
import { setPathData, getPathData } from 'src/app/share/object-func';
import { FieldDataSource } from 'src/app/builder/model/data-source';
import { HttpClient } from '@angular/common/http';
import { RenderService } from '../render.service';

@Component({
  selector: "app-field-render",
  templateUrl: "./field-render.component.html",
  styleUrls: ["./field-render.component.scss"]
})

export class FieldRenderComponent implements OnInit {
  @Input() field: Fields;
  constructor(private http: HttpClient, public renderService: RenderService) {

  }

  ngOnInit() {
    if (this.field['dataSource']) {
      const dataSource = <FieldDataSource>this.field['dataSource'];
      if (dataSource.url) {
        this.http.get(dataSource.url).subscribe(x => {
          dataSource.data = x;
        });
      } else {
        dataSource.data = dataSource.staticData
      }

    }
  }
  valueChange(modelName, event) {
    setPathData(this.renderService.data, modelName, event);
    if (this.field.category === 0) {
      this.calculateComplexValue()
    }

  }
  onSelectionChange(event) {
    this.valueChange(this.field.model,event.value)
    if ((<SelectField>this.field).onSelect) {
      const selectField = (<SelectField>this.field)
      const selectedData=this.getSelectedData(event.value,selectField.valueMember);
      if (selectField.onSelect.mapper) {
        selectField.onSelect.mapper.forEach(x => {
          const data = getPathData(selectedData, x.source);
          setPathData(this.renderService.data, x.destination, data);
        })
      }
      if (selectField.onSelect.code) {
       const functionCode= this.functionParse(selectField.onSelect.code);
       functionCode.apply(this,[selectedData,selectField])
      }
    }
  }
  functionParse(code){
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
      } else if(x.operator) {
        equation.push(x.operator)
      }else{
        equation.push(x.number)
      }
    })
    const result = eval(equation.join(''));
    setPathData(this.renderService.data, calc.resultModel, result);
  }
  getSelectedData(value,valueMemeberName){
    const selectField = (<SelectField>this.field)
    return selectField.dataSource.data.find(x=>x[valueMemeberName]===value)
  }
  getFieldValue(modelName) {
    const value = getPathData(this.renderService.data, modelName);
    return value || null;
  }
}
