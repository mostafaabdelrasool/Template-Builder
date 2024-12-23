import { Component, OnInit, Inject, ViewEncapsulation } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PopupSetting, FieldType } from "../model";
import { TableApiService } from "../service/table.api.service";
import { SelectSetting } from "../model/popup.fields";
import { MatOptionSelectionChange } from "@angular/material/core";
@Component({
  selector: "app-editPopup",
  templateUrl: "./edit.popup.component.html",
  styleUrls: ["./edit.popup.component.scss"],
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class EditPopupComponent implements OnInit {
  data: any = {};
  dropDownsData = {};
  constructor(
    public dialogRef: MatDialogRef<EditPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public setting: PopupSetting,
    private tableApiService: TableApiService
  ) {}

  ngOnInit() {
    this.data = this.setting.data;
    this.setting.fields.forEach((x) => {
      if (x.type === FieldType.select && x.selectSetting) {
        this.fetchSelectData(x.selectSetting);
      }
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onOkClick(): void {
    this.dialogRef.close(this.data);
  }
  fetchSelectData(setting: SelectSetting) {
    // if (!this.tableApiService[setting.cashingObjectName]) {
    if (!setting.apiUrl) {
      return
    }
    this.tableApiService.fetchData(setting.apiUrl).subscribe((x) => {
      setting.data = <Array<any>>x;
      // if (setting.data.length > 0) {
      //   this.tableApiService[setting.cashingObjectName] = setting.data;
      // }
    });
    // } else {
    //   setting.data = this.tableApiService[setting.cashingObjectName];
    // }
  }

  setDate($event: MatOptionSelectionChange, data: any, model: string | undefined) {
    if (model) {
      data[model] = $event.source.value;
    }
  }

  getDataValue(data: any, model: string | undefined) {
    if (model) {
     return data[model];
    }
  }
}
