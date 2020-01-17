import { Component, OnInit } from "@angular/core";
import { AppService } from '../share/Render/app.service';
import { Containers } from '../model/containers';
import { Manager_Type } from '../model/manager';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: "app-containers",
  templateUrl: "./containers.component.html",
  styleUrls: ["./containers.component.scss"]
})

export class ContainersComponent implements OnInit {

  constructor(public appService: AppService) {
  }
  selectItem(container: Containers) {
    container.isSelected = true;
    this.appService.sidebarOpened = true;
    this.appService.currentManager = Manager_Type.STYLES;
    this.appService.currentContainer = undefined;
    setTimeout(() => {
      this.appService.currentContainer = container;
    }, 100);
    this.appService.containers.forEach(x => {
      if (x.id != container.id) {
        x.isSelected = false;
      }
    })
  }
  drop(event: CdkDragDrop<string[]>, item: Containers) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.appService.containers, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  ngOnInit() {

  }
}
