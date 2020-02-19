import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../share/Render/app.service';
import { Fields } from '../model/field';
import { CardField } from '../model/containers';
import { SharedService } from 'src/app/share/shared.service';
import { objectKeys } from 'src/app/share/object-func';
import { CodeService } from '../share/Render/code-service.service';
import { MatDialog } from '@angular/material';
import { CodePreviewComponent } from 'src/app/code-generator/code-preview/code-preview.component';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit {
  @Input() currentField: Fields;
  applyStyleInClass: boolean;
  boxShadow: { y?: string, x?: string, blur?: string, color?: string, spread?: string };
  modelProps: string[];
  constructor(public appService: AppService, public sharedService: SharedService,
    public codeService: CodeService, public dialog: MatDialog) {
    this.boxShadow = {};
  }

  ngOnInit() {
    this.currentField.classes = this.currentField.classes || [];
    if (this.sharedService.model) {
      this.modelProps = objectKeys(JSON.parse(this.sharedService.model));
      if (this.sharedService.instanceName) {
        this.modelProps = this.modelProps.map(x =>
          this.sharedService.instanceName + '.' + x
        )
      }
    }
  }
  addClass = className => {
    return this.currentField.classes.push(className);
  }
  updateStyle(event, styleName) {
    this.currentField.style[styleName] = event;
    this.filedValueChanged();
  }
  filedValueChanged() {
    const style = { ...this.currentField.style }
    //this work around to detect child property change;
    this.currentField.style = undefined;
    this.currentField.style = style
  }
  setFlexSetting(flexType, value) {
    this.currentField.style[flexType] = value;
    this.filedValueChanged();
  }
  addNewCardAction() {
    const length = (<CardField>this.currentField).cardActions.length;
    (<CardField>this.currentField).cardActions.push({ title: 'Action title ' + length })
  }
  addFieldEvent() {
    this.currentField.fieldEvent.push({ name: '', type: '' });
  }
  boxShawChange(type, event) {
    if (!this.currentField.style.boxShadow) {
      this.currentField.style.boxShadow = ''
    }
    let result = this.currentField.style.boxShadow.split(' ');
    switch (type) {
      case 'x':
        result[0] = event
        break;
      case 'y':
        result[1] = event
        break;
      case 'b':
        result[2] = event
        break;
      case 's':
        result[3] = event
        break;
      case 'c':
        result[4] = event
        break;
      default:
        break;
    }
    this.currentField.style.boxShadow = result.join(' ');
    this.filedValueChanged();
  }
  openCssCode() {
    if (this.currentField.applyStyleInClass) {
      this.codeService.convertStyleTOCss(this.currentField.style,"className");
      const dialogRef = this.dialog.open(CodePreviewComponent, {
        width: '90vw',
        height: '90vh',
        data: this.codeService.getAllCode()
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  }
}
