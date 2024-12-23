import { Component, OnInit, Input } from "@angular/core";
import { Fields } from "../../model/field";
import { AppService } from "../../share/Render/app.service";

@Component({
  selector: "app-typography",
  templateUrl: "./typography.component.html",
  styleUrls: ["./typography.component.scss"],
  standalone: false,
})
export class TypographyComponent implements OnInit {
  @Input() currentField: Fields;
  constructor(public appService: AppService) {}

  ngOnInit() {}
  updateStyle(event: string, styleName: string) {
    if (this.currentField.style && this.currentField.style[styleName as keyof typeof  this.currentField.style]) {
      this.currentField.style[styleName as keyof typeof  this.currentField.style] = event;
    }
    this.filedValueChanged();
  }

  filedValueChanged() {
    const style = { ...this.currentField.style };
    //this work around to detect child property change;
    this.currentField.style = undefined;
    this.currentField.style = style;
  }
  updateTextAlign(align: any) {
    if (this.currentField.style) {
      this.currentField.style.textAlign = align;
    }
    this.filedValueChanged();
  }
}
