import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TableHeader, CreateableTable } from "../../model/field";
import { CreateableTableSettingComponent } from "./createable-table-setting/createable-table-setting.component";
import { mapProps } from "src/app/share/object-func";

@Component({
  selector: "app-createable-table",
  templateUrl: "./createable-table.component.html",
  styleUrls: ["./createable-table.component.scss"],
  standalone: false,
})
export class CreateableTableComponent implements OnInit {
  @Input() field: CreateableTable;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    if (this.field.style) {
      this.field.style.height = "auto";
    }
    this.field.hasAction = true;
    if (!this.field.header) {
      this.field.header = new Array<TableHeader>();
    }
  }
  openSetting() {
    const field = JSON.parse(JSON.stringify(this.field));
    let setting = { width: "90vw", height: "auto", data: field };
    const dialogRef = this.dialog.open(
      CreateableTableSettingComponent,
      setting
    );
    dialogRef.afterClosed().subscribe((result: CreateableTable) => {
      if (result) {
        mapProps(result, this.field);
      }
    });
  }
  getHeaderColumns(index: number) {
    return this.field.header.filter((x) => x.rowHeaderIndex === index);
  }
}
