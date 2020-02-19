import { Injectable } from "@angular/core";
import { AppService } from './app.service';
import { SharedService } from 'src/app/share/shared.service';
import { ComponentCodeService } from 'src/app/code-generator/angular/component-code.service';
import { HtmlCodeService } from 'src/app/code-generator/angular/HtmlCodeService';
import JsonToTS from 'src/app/share/json-parser';
import { CssCodeService } from 'src/app/code-generator/angular/css-code.service';
import { Style } from '../../model/field';

/**
 * @description
 * @class
 */
@Injectable()
export class CodeService {

  constructor(public appService: AppService,
    private sharedService: SharedService, private htmlCodeService: HtmlCodeService,
    private componentCodeService: ComponentCodeService, private cssCodeService: CssCodeService) {

  }
  getAllCode() {
    let dependecies = [];
    const model = this.sharedService.model ?
      JsonToTS(this.sharedService.model, { rootName: this.sharedService.rootModelName }).map(x => {
        dependecies.push(this.getInterfaceName(x))
        return 'export ' + x;
      }).join('\n') : '';
    const data = {
      htmlCode: this.htmlCodeService.generate(this.appService.containers),
      tsCode: this.componentCodeService.generate(this.appService.containers, `import {${dependecies.join(',')}} from './${this.sharedService.instanceName}'`),
      modelCode: model,
      cssCode: this.sharedService.cssCode
    }
    return data;
  }
  private getInterfaceName(interfaceCode: string): string {
    const instanceName = interfaceCode.split('\n')[0].replace('interface', '').replace('{', '');
    return instanceName;
  }
  convertStyleTOCss(style: Style,className:string) {
    this.sharedService.cssCode += this.cssCodeService.addCssFromStyle(style,className);
  }

}
