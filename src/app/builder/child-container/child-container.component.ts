import { Component, OnInit, Input } from "@angular/core";
import { Containers } from '../model/containers';
import { ContainersComponent } from '../containers/containers.component';
import { AppService } from '../share/Render/app.service';

@Component({
  selector: "app-child-container",
  templateUrl: "./child-container.component.html",
  styleUrls: ["./child-container.component.scss"]
})

export class ChildContainerComponent extends ContainersComponent implements OnInit {
  @Input() container:Containers;
  constructor(public appService: AppService) {
    super(appService)
  }

  ngOnInit() {

  }
}
