import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit } from "@angular/core";
import { EditType } from './edit.type';

@Component({
    selector: "app-edit-in-place",
    templateUrl: "./edit-in-place.component.html",
    styleUrls: ["./edit-in-place.component.scss"],
    standalone: false
})

export class EditInPlaceComponent implements OnInit, AfterContentInit {
  private _status: CellStatus;
  @Input() data: any;
  @Output() dataChange = new EventEmitter<any>();
  @Input() type: EditType;
  @Input() hideActions: boolean;
  _tempData: any;
  constructor() { }
  ngAfterContentInit(): void {
    if (!this.status) {
      this.status = CellStatus.read;
    }
  }

  ngOnInit() {
    if (!this.type) {
      this.type = EditType.Text;
    }
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
      if (this.data && this.type == EditType.Datepicker) {
       this._tempData=new Date(this.data);
      } else {
        this._tempData = this.data;
      }
    }
  }
  changeEditStatus(status: any) {
    this.status = status;
    if (status === CellStatus.Save) {
      this.saveChanges();
    } else if (status === CellStatus.Edit) {
      this._tempData = this.data;
    }
  }

  private saveChanges() {
    let data = this._tempData;
    if (data && this.type == EditType.Datepicker) {
      data = new Date(data).toDateString();
    }
    this.data = data;
    this.dataChange.emit(data);
    this.status = CellStatus.read;
  }
}
export enum CellStatus {
  Edit = 1,
  Save = 2,
  Cancel = 3,
  read = 4
}

