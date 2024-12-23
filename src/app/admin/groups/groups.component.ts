import { Component, OnInit } from "@angular/core";
import { Group } from '../model/groups';
import { BaseComponent } from 'src/app/core/base-component';
import { DataService } from 'src/app/core/data.api/data.service';
import { TableSetting } from 'src/app/share/table/model';
import { GroupSetting } from '../setting/group.setting';
import { Observable } from 'rxjs';

@Component({
    selector: "app-groups",
    templateUrl: "./groups.component.html",
    styleUrls: ["./groups.component.scss"],
    standalone: false
})

export class GroupsComponent extends BaseComponent<Group> implements OnInit {
  groups$: Observable<Group[]>;
  tableSetting: TableSetting
  constructor(public override dataService: DataService) {
    super("Group", dataService)
    this.dataService._controller = "api/Group";
    this.groups$ = this.dataSubject.asObservable();
  }

  ngOnInit() {
    this.tableSetting = GroupSetting.TableSetting;
    this.load();
  }
}
