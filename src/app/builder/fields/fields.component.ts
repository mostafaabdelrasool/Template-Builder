import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, Type, AfterViewInit, OnDestroy } from "@angular/core";
import { Fields, InputField, FieldType, FieldCategory } from '../model/field';
import { AppService } from '../share/Render/app.service';
import { MatDialog } from '@angular/material';
import { RichTextSettingComponent } from './rich-text-setting/rich-text-setting.component';
import { FieldRenderSetting } from '../model/field-render-setting';

@Component({
  selector: "app-fields",
  templateUrl: "./fields.component.html",
  styleUrls: ["./fields.component.scss"],
})

export class FieldsComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() field: InputField;
  // performAction: boolean;
  fieldType: FieldType;
  @ViewChild('fieldtemplate', { static: true, read: ViewContainerRef }) entry: ViewContainerRef;
  componentRef: any;
  constructor(public appService: AppService, public dialog: MatDialog, private resolver: ComponentFactoryResolver) {
  }
  ngAfterViewInit(): void {
    if (this.field.category !== FieldCategory.Typograpghy) {
      this.createComponent()
    }
  }

  createComponent() {
    let renderSetting = FieldRenderSetting[FieldType[this.field.type]];
    let componentName = '';
    if (this.field.category === FieldCategory.Input) {
      componentName = FieldRenderSetting.INPUT_TEXT.componentName;
    } else {
      componentName = renderSetting.componentName;
    }
    const factories = Array.from(this.resolver['_factories'].keys());
    const factoryClass = <Type<any>>factories.find((x: any) => x.name === componentName);
    const factory = this.resolver.resolveComponentFactory(factoryClass);
    this.entry.clear();
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.changeDetectorRef.detectChanges();
  }
  handleAction() {
    this.componentRef.instance.openSetting();
  }
  openTextSetting() {
    let setting = { width: '50vw', height: 'auto', data: this.field };
    this.dialog.open(RichTextSettingComponent, setting);
  }


  ngOnInit() {

  }
  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
