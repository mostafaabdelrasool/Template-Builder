import { Component, OnInit, Input } from "@angular/core";
import { CreateableTable, SummaryType, TabelSummary } from 'src/app/builder/model/field';
import { RenderService } from '../../render.service';
import { CellStatus } from 'src/app/share/edit-in-place/edit-in-place.component';
import { TableHeader } from './../../../builder/model/field';
import { ActivatedRoute, Router } from "@angular/router";
import { DialogsService } from "src/app/share/dialog-service/dialogs.service";
import { lastValueFrom } from "rxjs";

@Component({
  selector: "app-createable-table-render",
  templateUrl: "./createable-table-render.component.html",
  styleUrls: ["./createable-table-render.component.scss"]
})

export class CreateableTableRenderComponent implements OnInit {
  @Input() field: CreateableTable;
  modelName: string;
  data: any[] = [];
  currentItem: any;
  rowDefinition: TableHeader[];
  constructor(private renderService: RenderService, private route: ActivatedRoute,
    private router: Router, private dialogService: DialogsService) {
    this.renderService.dataRetrieved.subscribe(x => {
      if (this.renderService.featureName && x) {
        this.data = x[this.renderService.featureName];
      }
    });
  }
  ngOnInit() {
    if (this.field && this.field.header)
      this.rowDefinition = this.field.header.filter(x => x.binding);
    else
      this.rowDefinition = []
  }
  // getFieldValue() {
  //   if (this.modelName) {
  //     this.data = getPathData(this.renderService.data, this.modelName);
  //   } else {
  //     this.data = getPathData(this.renderService.data, this.renderService.featureName);
  //   }
  // }
  add() {
    if (this.field.editFormId) {
      this.navigateToForm(this.field.editFormId, "");
      //to get back to current form after submit
      this.renderService.setPreviosFormId(this.route.snapshot.queryParams.formId);
    }
  }
  edit(item) {
    if (item && this.field.editFormId) {
      this.navigateToForm(this.field.editFormId, item["id"]);
      //to get back to current form after submit
      this.renderService.setPreviosFormId(this.route.snapshot.queryParams.formId);
    }
    // item.isEdit = true;
    // item.status = CellStatus.Edit;
  }
  // save(item) {
  //   item.isEdit = false;
  //   item.status = CellStatus.Save;
  //   this._changeDetectionRef.detectChanges();
  // }
  // cancel(item) {
  //   item.isEdit = false;
  //   item.status = CellStatus.Cancel;
  // }
  async delete(item) {
    const source$ =this.dialogService.openYesNoDialog("Confirm Delete", "Are you sure to Delete?");
    const dialogResult = await lastValueFrom(source$);
    if (!dialogResult) {
      return;
    }
    const featureId = this.route.snapshot.queryParams.featureId;
    if (!featureId) {
      return
    }
    if (item) {
      this.renderService.deleteFeatureById(featureId, item.id).subscribe(() => {
        const index = this.data.indexOf(item);
        if (index != -1) {
          this.data.splice(index, 1);
          this.currentItem = undefined;
        }
      });

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
    this.currentItem = item;
    this.currentItem.index = index;
  }
  getHeaderColumns(index) {
    return this.field.header.filter(x => x.rowHeaderIndex === index);
  }
  navigateToForm(formId, itemId) {
    // changes the route without moving from the current view or
    // triggering a navigation event,
    let params = { formId: formId, featureId: this.renderService.featureId, id: itemId };
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: 'merge'
    });
    this.renderService.loadFormFeature.next(formId);
  }
}
