import { Component, OnInit } from "@angular/core";
import { TableSetting } from 'src/app/share/table/model';
import { BaseComponent } from 'src/app/core/base-component';
import { DataService } from 'src/app/core/data.api/data.service';
import { Postion } from '../model/positions';
import { PositionSetting } from '../setting/position.setting';

@Component({
  selector: "app-positions",
  templateUrl: "./positions.component.html",
  styleUrls: ["./positions.component.scss"]
})

export class PositionsComponent extends BaseComponent<Postion> implements OnInit {
  postion: Postion[]=[];
  tableSetting: TableSetting
  constructor(public dataService: DataService) {
    super("Group", dataService)
    this.dataService._controller = "api/Form";
  }

  ngOnInit() {
    this.tableSetting = PositionSetting.TableSetting;
  }
}
