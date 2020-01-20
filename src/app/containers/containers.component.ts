import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AppService } from '../share/Render/app.service';
import { Containers } from '../model/containers';
import { Manager_Type } from '../model/manager';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HighlightColors } from '../share/Render/highlight.directive';
import { FieldType } from '../model/field';

@Component({
  selector: "app-containers",
  templateUrl: "./containers.component.html",
  styleUrls: ["./containers.component.scss"],
})

export class ContainersComponent implements OnInit {
  color: HighlightColors;
  divType:FieldType;
  constructor(public appService: AppService) {
    this.color=HighlightColors.BLACK;
    this.divType=FieldType.DIV
  }
  selectItem(event,container: Containers) {
    // if (event.target.tagName!=='DIV') {
    //  //if user click on child element it will fire this event also because it has a click event
    //   return ;
    // }
    container.isSelected = true;
    this.appService.sidebarOpened = true;
    this.appService.currentManager = Manager_Type.STYLES;
    this.appService.currentField = undefined;
    setTimeout(() => {
      this.appService.currentField = container;
      this.appService.currentContainer = container;
    }, 100);
    event.stopPropagation();
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.appService.containers, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  dropField(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.appService.currentContainer.fields, event.previousIndex, event.currentIndex);
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
