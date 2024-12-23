import { Component, OnInit, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import {
  Fields,
  ComplexValueCalculation,
  InputField,
  WhenToCalculate,
  FieldEquation,
} from "../model/field";
import { AppService } from "../share/Render/app.service";

@Component({
  selector: "app-complex-value",
  templateUrl: "./complex-value.component.html",
  styleUrls: ["./complex-value.component.scss"],
  standalone: false,
})
export class ComplexValueComponent implements OnInit {
  valueCalc: ComplexValueCalculation;
  equationText: string = "";
  fields: Fields[];
  addedNumber: string;
  constructor(
    public appService: AppService,
    public dialogRef: MatDialogRef<ComplexValueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Fields
  ) {
    // this.addedNumberChanged
    //   .pipe(distinctUntilChanged(),
    //     debounceTime(300))
    //   .subscribe((x) => {
    //     this.addNumberToEquation(x)
    //   })
  }

  ngOnInit() {
    if (!this.data.complexValueCalculation) {
      this.valueCalc = new ComplexValueCalculation();
      this.valueCalc.equation = [];
    } else {
      this.valueCalc = this.data.complexValueCalculation;
      this.getEqText();
    }
    this.getFields();
    this.valueCalc.resultModel = this.data.model;
  }
  getFields() {
    this.fields = [];
    this.appService.allFields.forEach((x) => {
      if (x.id != this.data.id) {
        this.fields.push(x);
      }
      let eq = this.valueCalc.equation.find(
        (e) => e.fieldModel && e.fieldId === x.id
      );
      if (eq) {
        eq.fieldModel = x.model;
        eq.fieldName = x.name;
      }
    });
  }
  addFieldToEq(field: Fields) {
    this.valueCalc.equation.push({
      fieldModel: field.model,
      fieldId: field.id,
      fieldName: field.name,
    });
    this.equationText += field.model;
  }
  addOperatorToEq(event: any) {
    this.valueCalc.equation.push({ operator: event.target.innerText });
    this.equationText += event.target.innerText;
  }
  remove() {
    this.valueCalc.equation.splice(this.valueCalc.equation.length - 1, 1);
    this.getEqText();
  }
  getEqText() {
    this.equationText = this.valueCalc.equation
      .map((x) => x.operator || x.fieldModel || x.number)
      .join("");
  }
  save() {
    this.valueCalc.equation.forEach((x) => {
      if (x.fieldModel) {
        (<InputField>(
          this.appService.allFields.find((f) => f.id === x.fieldId)
        )).complexValueCalculation = this.valueCalc;
      }
    });
    this.data.complexValueCalculation = this.valueCalc;
    this.dialogRef.close();
  }
  addedNumberChange(event: any) {
    if (event.keyCode == 13) {
      const val = event.target.value;
      this.valueCalc.equation.push({ number: val });
      this.equationText += val;
      this.addedNumber = "";
    }
  }
}
