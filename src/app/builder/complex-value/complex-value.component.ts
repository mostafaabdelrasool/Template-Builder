import { Component, OnInit, Input, Inject } from "@angular/core";
import { Fields, ComplexValueCalculation, InputField, WhenToCalculate } from '../model/field';
import { AppService } from '../share/Render/app.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: "app-complex-value",
  templateUrl: "./complex-value.component.html",
  styleUrls: ["./complex-value.component.scss"]
})

export class ComplexValueComponent implements OnInit {
  valueCalc: ComplexValueCalculation;
  equationText: string = '';
  fields: Fields[];
  constructor(public appService: AppService, public dialogRef: MatDialogRef<ComplexValueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Fields) {

  }

  ngOnInit() {
    if (!this.data.complexValueCalculation) {
      this.valueCalc = new ComplexValueCalculation();
      this.valueCalc.equation = [];
      this.valueCalc.resultModel = this.data.model;
    } else {
      this.valueCalc = this.data.complexValueCalculation
      this.getEqText();
    }
    this.getFields();

  }
  getFields() {
    this.fields = this.appService.allFields.filter(x => x.id != this.data.id);
  }
  addFieldToEq(field: Fields) {
    //to not to add two field without operator
    if (this.valueCalc.equation.length === 0 || this.valueCalc.equation[this.valueCalc.equation.length - 1].operator) {
      this.valueCalc.equation.push({ fieldModel: field.model, fieldId: field.id, fieldName: field.name });
      this.equationText += field.name;
    }
  }
  addOperatorToEq(event) {
    if (this.valueCalc.equation.length > 0 && this.valueCalc.equation[this.valueCalc.equation.length - 1].fieldModel) {
      this.valueCalc.equation.push({ operator: event.target.innerText });
      this.equationText += event.target.innerText;
    }
    event.stopPropagation();
  }
  remove() {
    this.valueCalc.equation.splice(this.valueCalc.equation.length - 1, 1);
    this.getEqText();
  }
  getEqText() {
    this.equationText = this.valueCalc.equation.map(x => x.operator || x.fieldName).join('');
  }
  save() {
    this.valueCalc.equation.forEach(x => {
      if (x.fieldModel) {
        (<InputField>this.appService.allFields.find(f => f.id === x.fieldId)).complexValueCalculation = this.valueCalc
      }
    })
    this.data.complexValueCalculation = this.valueCalc;
    this.dialogRef.close();
  }
}
