import { Component, OnInit, Input, AfterContentInit, ChangeDetectorRef } from "@angular/core";
import { CreateableTable, SummaryType, TabelSummary } from 'src/app/builder/model/field';
import { RenderService } from '../../render.service';
import { setPathData, getPathData } from 'src/app/share/object-func';
import { SharedService } from 'src/app/share/shared.service';
import { CellStatus } from 'src/app/share/edit-in-place/edit-in-place.component';
import { TableHeader } from './../../../builder/model/field';

@Component({
  selector: "app-createable-table-render",
  templateUrl: "./createable-table-render.component.html",
  styleUrls: ["./createable-table-render.component.scss"]
})

export class CreateableTableRenderComponent implements OnInit, AfterContentInit {
  @Input() field: CreateableTable;
  modelName: string;
  data: any[] = [];
  currentItem: any;
  rowDefinition: TableHeader[];
  constructor(public renderService: RenderService, public sharedService: SharedService, private _changeDetectionRef: ChangeDetectorRef) {

  }
  ngAfterContentInit(): void {
    this.modelName = this.field.model;
    setPathData(this.renderService.data, this.modelName, []);
  }
  ngOnInit() {
    if (this.field && this.field.header)
      this.rowDefinition = this.field.header.filter(x => x.binding);
    else
      this.rowDefinition = []
  }
  getFieldValue() {
    this.data = getPathData(this.renderService.data, this.modelName);
  }
  add() {
    let row = { isEdit: true, status: CellStatus.Edit };
    this.field.header.forEach(x => row[x.binding] = '');
    this.data.push(row)
  }
  edit(item) {
    item.isEdit = true;
    item.status = CellStatus.Edit;
  }
  save(item) {
    item.isEdit = false;
    item.status = CellStatus.Save;
    this._changeDetectionRef.detectChanges();
  }
  cancel(item) {
    item.isEdit = false;
    item.status = CellStatus.Cancel;
  }
  delete(item) {
    if (item) {
      const index = this.data.indexOf(item);
      if (index != -1) {
        this.data.splice(index, 1);
        this.currentItem = undefined;
      }
    }
  }
  getResultSummaryCol(summary: TabelSummary) {
    let result = 0;
    let sum = 0;
    let modelVal = this.data.filter(x => x[summary.model] && !isNaN(x[summary.model])).map(x => +x[summary.model]);
    modelVal.forEach(x => sum += x);
    switch (+summary.type) {
      case SummaryType.Sum:
        result = sum;
        break;
      case SummaryType.Average:
        if (modelVal.length > 0) {
          result = sum / modelVal.length;
        }
        break;
      case SummaryType.Min:
        result = Math.min(...modelVal);
        break;
      case SummaryType.Max:
        result = Math.max(...modelVal);
        break;
      default:
        break;
    }
    return result;
  }
  setCurrentItem(item, index) {
    this.currentItem = item ;
    this.currentItem.index = index;
  }
  getHeaderColumns(index) {
    return this.field.header.filter(x => x.rowHeaderIndex === index);
  }
}
