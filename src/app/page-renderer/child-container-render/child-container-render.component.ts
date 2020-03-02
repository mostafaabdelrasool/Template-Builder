import { Component, OnInit, Input } from "@angular/core";
import { Containers } from 'src/app/builder/model/containers';
import { RenderService } from '../render.service';

@Component({
  selector: "app-child-container-render",
  templateUrl: "./child-container-render.component.html",
  styleUrls: ["./child-container-render.component.scss"]
})

export class ChildContainerRenderComponent implements OnInit {
  @Input() container:Containers;
  constructor(public renderService: RenderService) {
  }
  ngOnInit() {

  }
}
