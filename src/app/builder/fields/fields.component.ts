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
  constructor(public appService: AppService) {
  }


 

  ngOnInit() {
  }
}
