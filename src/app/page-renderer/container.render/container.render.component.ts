import { Component, Input, OnInit } from "@angular/core";
import { Containers } from "src/app/builder/model/containers";

@Component({
  selector: "app-container-render",
  templateUrl: "./container.render.component.html",
  styleUrls: ["./container.render.component.scss"]
})

export class ContainerRenderComponent implements OnInit {
  @Input() container: Containers;
  constructor() {

  }

  ngOnInit() {

  }
}
