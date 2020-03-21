import { Component, OnInit } from "@angular/core";
import { TableSetting } from 'src/app/share/table/model';
import { BaseComponent } from 'src/app/core/base-component';
import { DataService } from 'src/app/core/data.api/data.service';
import { Postion } from '../model/positions';
import { PositionSetting } from '../setting/position.setting';
import { Observable } from 'rxjs';

@Component({
  selector: "app-positions",
  templateUrl: "./positions.component.html",
  styleUrls: ["./positions.component.scss"]
})

export class PositionsComponent extends BaseComponent<Postion> implements OnInit {
  position$: Observable<Postion[]>;
  tableSetting: TableSetting
  constructor(public dataService: DataService) {
    super("Position", dataService)
    this.dataService._controller = "api/Position";
    this.position$ = this.dataSubject.asObservable();
  }

  ngOnInit() {
    this.tableSetting = PositionSetting.TableSetting;
    this.load();
  }
}
