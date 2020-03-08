import { Component, OnInit, Input } from "@angular/core";
import { CreateableTable } from 'src/app/builder/model/field';
import { RenderService } from '../../render.service';
import { setPathData, getPathData } from 'src/app/share/object-func';
import { SharedService } from 'src/app/share/shared.service';

@Component({
  selector: "app-createable-table-render",
  templateUrl: "./createable-table-render.component.html",
  styleUrls: ["./createable-table-render.component.scss"]
})

export class CreateableTableRenderComponent implements OnInit {
  @Input() field: CreateableTable;
  modelName: string
  constructor(public renderService: RenderService, public sharedService: SharedService) {

  }

  ngOnInit() {
    this.modelName = this.sharedService.instanceName + '.' + this.field.model;
    setPathData(this.renderService.data, this.modelName, []);
  }
  getFieldValue() {
    const value = getPathData(this.renderService.data, this.modelName);
    return value || null;
  }
  add() {
    let result = this.getFieldValue()
    result.push({})
  }
}
