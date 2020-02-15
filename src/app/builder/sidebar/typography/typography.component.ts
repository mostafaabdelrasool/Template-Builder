import { Component, OnInit, Input } from "@angular/core";
import { Fields } from '../../model/field';
import { AppService } from '../../share/Render/app.service';

@Component({
  selector: "app-typography",
  templateUrl: "./typography.component.html",
  styleUrls: ["./typography.component.scss"]
})

export class TypographyComponent implements OnInit {
  
  @Input() currentField: Fields;
  constructor(private appService: AppService) {
  }

  ngOnInit() {

  }
  updateStyle(event, styleName) {
    this.currentField.style[styleName] = event;
    this.filedValueChanged();
  }
  filedValueChanged() {
    const style = { ...this.currentField.style }
    //this work around to detect child property change;
    this.currentField.style = undefined;
    this.currentField.style = style
  }
  updateTextAlign(align){
    this.currentField.style.textAlign = align;
    this.filedValueChanged()
  }
}
