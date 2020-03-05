import { Component, OnInit, Input } from "@angular/core";
import { Fields, ComplexValueCalculation, InputField, WhenToCalculate } from '../model/field';
import { AppService } from '../share/Render/app.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: "app-complex-value",
  templateUrl: "./complex-value.component.html",
  styleUrls: ["./complex-value.component.scss"]
})

export class ComplexValueComponent implements OnInit {
  valueCalc: ComplexValueCalculation;
  equationText: string = '';
  constructor(public appService: AppService, public dialogRef: MatDialogRef<ComplexValueComponent>) {

  }

  ngOnInit() {
    this.valueCalc = new ComplexValueCalculation();
    this.valueCalc.equation = [];
    this.valueCalc.resultModel = this.appService.currentField.model

  }
  addFieldToEq(field: Fields) {
    //to not to add two field without operator
    if (this.valueCalc.equation.length === 0 || this.valueCalc.equation[this.valueCalc.equation.length - 1].operator) {
      this.valueCalc.equation.push({ fieldModel: field.model, fieldId: field.id });
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
    this.equationText = this.valueCalc.equation.map(x => x.operator || x.fieldModel).join('');
  }
  save() {
    this.valueCalc.equation.forEach(x => {
      if (x.fieldModel) {
        (<InputField>this.appService.allFields.find(f => f.id === x.fieldId)).complexValueCalculation = this.valueCalc
      }
    })
    this.dialogRef.close();
  }
}
