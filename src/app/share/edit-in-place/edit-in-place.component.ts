import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit } from "@angular/core";

@Component({
  selector: "app-edit-in-place",
  templateUrl: "./edit-in-place.component.html",
  styleUrls: ["./edit-in-place.component.scss"]
})

export class EditInPlaceComponent implements OnInit, AfterContentInit {
  private _status: CellStatus;
  @Input() data: any;
  @Output() dataChange = new EventEmitter<any>();
  @Input() type: string;
  @Input() hideActions: boolean;
  _tempData: any;
  constructor() { }
  ngAfterContentInit(): void {
    if (!this.status) {
      this.status = CellStatus.read;
    }
  }

  ngOnInit() {
  }

  public get status(): CellStatus {
    return this._status
  }
  @Input()
  public set status(v: CellStatus) {
    this._status = v;
    if (v === CellStatus.Save) {
      this.saveChanges();
    } else {
      this._tempData = this.data;
    }
  }
  changeEditStatus(status) {
    this.status = status;
    if (status === CellStatus.Save) {
      this.saveChanges();
    } else if (status === CellStatus.Edit) {
      this._tempData = this.data;
    }
  }

  private saveChanges() {
    this.data = this._tempData;
    this.dataChange.emit(this._tempData);
    this.status = CellStatus.read;
  }
}
export enum CellStatus {
  Edit = 1,
  Save = 2,
  Cancel = 3,
  read = 4
}

