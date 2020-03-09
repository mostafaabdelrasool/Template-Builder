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
  onSelectionChange(item,value) {
    this.valueChange(this.field.model,value)
    if ((<SelectField>this.field).onSelect) {
      const selectField = (<SelectField>this.field)
      if (selectField.onSelect.mapper) {
        selectField.onSelect.mapper.forEach(x => {
          const data = getPathData(item, x.source);
          setPathData(this.renderService.data, x.destination, data);
        })
      }
    }
  }
  calculateComplexValue() {
    const caclc = (<InputField>this.field).complexValueCalculation;
    let equation = [];
    caclc.equation.forEach(x => {
      if (x.fieldModel) {
        const val = this.getFieldValue(x.fieldModel);
        equation.push(val || 0)
      } else {
        equation.push(x.operator)
      }
    })
    const result = eval(equation.join(''));
    setPathData(this.renderService.data, caclc.resultModel, result);
  }
  getFieldValue(modelName) {
    const value = getPathData(this.renderService.data, modelName);
    return value || null;
  }
}
