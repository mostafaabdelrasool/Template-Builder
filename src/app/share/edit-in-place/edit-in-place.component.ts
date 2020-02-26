import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-edit-in-place",
  templateUrl: "./edit-in-place.component.html",
  styleUrls: ["./edit-in-place.component.scss"]
})

export class EditInPlaceComponent implements OnInit {
  private _status: CellStatus;
  @Input() data: any;
  @Output() dataChange = new EventEmitter<any>();
  @Input() type: string;
  _tempData: any;
  constructor() { }

  ngOnInit() {
    this.status = CellStatus.read;
  }

  public get status(): CellStatus {
    return this._status
  }
  @Input()
  public set status(v: CellStatus) {
    this._status = v;
    if (v === CellStatus.Save) {
      this.data = this._tempData;
    } else {
      this._tempData = this.data;
    }
  }
  changeEditStatus(status) {
    this.status = status;
    if (status === CellStatus.Save) {
      this.data = this._tempData;
      this.dataChange.emit(this._tempData);
      this.status=CellStatus.read
    } else if (status === CellStatus.Edit) {
      this._tempData = this.data;
    }
  }
}
export enum CellStatus {
  Edit = 1,
  Save = 2,
  Cancel = 3,
  read = 4
}

