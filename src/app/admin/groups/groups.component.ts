import { Component, OnInit } from "@angular/core";
import { Group } from '../model/groups';
import { BaseComponent } from 'src/app/core/base-component';
import { DataService } from 'src/app/core/data.api/data.service';
import { TableSetting } from 'src/app/share/table/model';
import { GroupSetting } from '../setting/group.setting';

@Component({
  selector: "app-groups",
  templateUrl: "./groups.component.html",
  styleUrls: ["./groups.component.scss"]
})

export class GroupsComponent extends BaseComponent<Group> implements OnInit {
  groups: Group[]=[];
  tableSetting: TableSetting
  constructor(public dataService: DataService) {
    super("Group", dataService)
    this.dataService._controller = "api/Form";
  }

  ngOnInit() {
    this.tableSetting = GroupSetting.TableSetting;
  }
}
