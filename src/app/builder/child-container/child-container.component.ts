import { Component, OnInit, Input, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver } from "@angular/core";
import { Containers } from '../model/containers';
import { ContainersComponent } from '../containers/containers.component';
import { AppService } from '../share/Render/app.service';
import { MatSnackBar } from '@angular/material';
import { FieldType } from '../model/field';
import { FieldRenderSetting } from '../model/field-render-setting';

@Component({
  selector: "app-child-container",
  templateUrl: "./child-container.component.html",
  styleUrls: ["./child-container.component.scss"]
})

export class ChildContainerComponent extends ContainersComponent implements OnInit, AfterViewInit {
  @Input() container: Containers;
  fieldType: FieldType;
  @ViewChild('fieldtemplate', { static: true, read: ViewContainerRef }) entry: ViewContainerRef;
  componentRef: any;
  constructor(public appService: AppService, snackBar: MatSnackBar, private resolver: ComponentFactoryResolver) {
    super(appService, snackBar)
  }

  ngOnInit() {
    this.appService.initField(this.container);
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
    componentRef.instance['field'] = this.container;
    componentRef.changeDetectorRef.detectChanges();
    return componentRef
  }
  handleAction() {
    this.componentRef.instance.openSetting();
  }
}
