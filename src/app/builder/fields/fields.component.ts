import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, Type, AfterViewInit, OnDestroy } from "@angular/core";
import { Fields, InputField, FieldType, FieldCategory } from '../model/field';
import { AppService } from '../share/Render/app.service';
import { MatDialog } from '@angular/material';
import { RichTextSettingComponent } from './rich-text-setting/rich-text-setting.component';
import { FieldRenderSetting } from '../model/field-render-setting';
import { FieldService } from './fields.service';

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
  constructor(public appService: AppService, public dialog: MatDialog, private fieldService: FieldService) {
  }
  ngAfterViewInit(): void {
    if (this.field.category !== FieldCategory.Typograpghy) {
      this.componentRef = this.fieldService.createComponent(this.field, this.entry);
    }
  }
  handleAction() {
    if (this.componentRef.instance.openSetting) {
      this.componentRef.instance.openSetting();
    }
  }
  openTextSetting() {
    let setting = { width: '50vw', height: 'auto', data: this.field };
    this.dialog.open(RichTextSettingComponent, setting);
  }


  ngOnInit() {
    this.appService.initField(this.field);
  }
  ngOnDestroy() {
    this.componentRef.destroy();
  }
}
