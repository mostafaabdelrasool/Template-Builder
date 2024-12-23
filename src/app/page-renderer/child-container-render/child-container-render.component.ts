import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
} from "@angular/core";
import { Containers } from "src/app/builder/model/containers";
import { FieldType } from "src/app/builder/model/field";
import { RenderService } from "../render.service";
import { FieldRenderSetting } from "src/app/builder/model/field-render-setting";

@Component({
  selector: "app-child-container-render",
  templateUrl: "./child-container-render.component.html",
  styleUrls: ["./child-container-render.component.scss"],
  standalone: false,
})
export class ChildContainerRenderComponent implements OnInit, AfterViewInit {
  @Input() container: Containers;
  @ViewChild("fieldtemplate", { static: true, read: ViewContainerRef })
  entry: ViewContainerRef;
  componentRef: any;
  constructor(
    public renderService: RenderService,
  ) {}
  
  ngOnInit() {}

  ngAfterViewInit(): void {
    this.componentRef = this.createComponent();
  }

  createComponent() {
    let renderSetting = FieldRenderSetting[FieldType[this.container.type]];
    let componentName = renderSetting.componentName;
    this.entry.clear();
    let componentRef = this.entry.createComponent(componentName);
    (componentRef.instance as typeof componentName)["container"] = this.container;
    componentRef.changeDetectorRef.detectChanges();
    return componentRef;
  }
}
