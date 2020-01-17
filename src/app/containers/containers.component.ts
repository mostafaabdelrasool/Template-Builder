import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AppService } from '../share/Render/app.service';
import { Containers } from '../model/containers';
import { Manager_Type } from '../model/manager';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: "app-containers",
  templateUrl: "./containers.component.html",
  styleUrls: ["./containers.component.scss"],
  encapsulation:ViewEncapsulation.None

})

export class ContainersComponent implements OnInit {

  constructor(public appService: AppService) {
  }
  selectItem(event,container: Containers) {
    if (event.target.tagName!=='DIV') {
     //if user click on child element it will fire this event also because it has a click event
      return ;
    }
    container.isSelected = true;
    this.appService.sidebarOpened = true;
    this.appService.currentManager = Manager_Type.STYLES;
    this.appService.currentField = undefined;
    setTimeout(() => {
      this.appService.currentField = container;
      this.appService.currentContainer = container;
    }, 100);
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
