import { Component, OnInit, Input, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver } from "@angular/core";
import { Containers } from 'src/app/builder/model/containers';
import { FieldType } from "src/app/builder/model/field";
import { FieldRenderSetting } from "../model/field.render.setting";
import { RenderService } from '../render.service';

@Component({
  selector: "app-child-container-render",
  templateUrl: "./child-container-render.component.html",
  styleUrls: ["./child-container-render.component.scss"]
})

export class ChildContainerRenderComponent implements OnInit, AfterViewInit {
  @Input() container:Containers;
  @ViewChild('fieldtemplate', { static: true, read: ViewContainerRef }) entry: ViewContainerRef;
  componentRef: any;
  constructor(public renderService: RenderService, private resolver: ComponentFactoryResolver) {
  }
  ngOnInit() {

  }
  ngAfterViewInit(): void {
    this.componentRef = this.createComponent();
  }
  createComponent() {
    let renderSetting = FieldRenderSetting[FieldType[this.container.type]];
    let componentName = renderSetting.componentName;
    const factory = this.resolver.resolveComponentFactory(componentName);
    this.entry.clear();
    let componentRef = this.entry.createComponent(factory);
    componentRef.instance['container'] = this.container;
    componentRef.changeDetectorRef.detectChanges();
    return componentRef
  }
}
