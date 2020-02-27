import { Component, OnInit, Input } from "@angular/core";
import { Fields } from '../model/field';
import { AppService } from '../share/Render/app.service';

@Component({
  selector: "app-fields",
  templateUrl: "./fields.component.html",
  styleUrls: ["./fields.component.scss"],
})

export class FieldsComponent implements OnInit {
  @Input() field: Fields;
  performAction: boolean;
  xxx = 'ss'
  constructor(public appService: AppService) {
  }
  handleAction() {
    this.performAction = true;
    //to fire this set event 
    setTimeout(() => {
      this.performAction = false;
    });
  }



  ngOnInit() {
  }
}
