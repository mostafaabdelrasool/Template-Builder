import { Component, OnInit } from "@angular/core";
import { AppService } from "../share/Render/app.service";
import { Fields } from "../model/field";
import { CardField } from "../model/containers";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-properties",
  templateUrl: "./properties.component.html",
  styleUrls: ["./properties.component.scss"],
  standalone: false,
})
export class PropertiesComponent implements OnInit {
  currentField: Fields;
  applyStyleInClass: boolean;
  boxShadow: {
    y?: string;
    x?: string;
    blur?: string;
    color?: string;
    spread?: string;
  };

  constructor(public appService: AppService, public dialog: MatDialog) {
    this.boxShadow = {};
  }

  ngOnInit() {
    this.appService.currentFieldSubject.subscribe((x: Fields) => {
      this.currentField = new Fields();
      setTimeout(() => {
        this.currentField = x;
        this.getBorderStyle();
      });
    });
  }

  getBorderStyle() {
    if (
      this.currentField &&
      this.currentField.style &&
      this.currentField.style.border
    ) {
      const splitBorder = this.currentField.style.border.split(" ");
      this.currentField.style.borderWidth = splitBorder[0];
      this.currentField.style.borderStyle = splitBorder[1];
      this.currentField.style.borderColor = splitBorder[2];
    }
  }

  updateStyle(event: any, styleName: any) {
    if (this.currentField && this.currentField.style) {
      this.currentField.style[styleName as keyof typeof this.currentField.style] = event;
      this.appService.updateFieldStyle(this.currentField);
    }
  }
  addNewCardAction() {
    if (this.currentField) {
      const length = (<CardField>this.currentField).cardActions?.length;
      (<CardField>this.currentField).cardActions?.push({
        title: "Action title " + length,
      });
    }
  }

  boxShawChange(type: string, event: any) {
    if (
      this.currentField &&
      this.currentField.style &&
      !this.currentField.style.boxShadow
    ) {
      this.currentField.style.boxShadow = "";
      let result = this.currentField.style.boxShadow.split(" ");
      switch (type) {
        case "x":
          result[0] = event;
          break;
        case "y":
          result[1] = event;
          break;
        case "b":
          result[2] = event;
          break;
        case "s":
          result[3] = event;
          break;
        case "c":
          result[4] = event;
          break;
        default:
          break;
      }
      if (this.currentField.style) {
        this.currentField.style.boxShadow = result.join(" ");
      }
      this.appService.updateFieldStyle(this.currentField);
    }
  }

  colorPickerChange(event: any, model: string) {
    if (this.currentField && this.currentField.style) {
      this.currentField.style[model as keyof typeof this.currentField.style] =
        event;
      this.appService.updateFieldStyle(this.currentField);
    }
  }

  fieldValueChanged(event: any) {
    const { name, value } = event.target;
    if (name.includes(".")) {
      return;
    }
    if (this.currentField && value) {
      this.appService.updateFieldProperty(this.currentField.id, value, name);
      this.currentField[name as keyof typeof this.currentField] = value as never;
    }
  }

    castContainerToCard(){
      return this.currentField as CardField
    }


}
