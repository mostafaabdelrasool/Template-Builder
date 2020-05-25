import { Injectable, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";
import { FieldRenderSetting } from '../model/field-render-setting';
import { FieldType, Fields, FieldCategory } from '../model/field';

/**
 * @description
 * @class
 */
@Injectable()
export class FieldService {

  constructor( private resolver: ComponentFactoryResolver) {
    
  }
  createComponent(field:Fields,entry: ViewContainerRef) {
    let renderSetting = FieldRenderSetting[FieldType[field.type]];
    let componentName ;
    if (!renderSetting && field.category === FieldCategory.Input) {
      componentName = FieldRenderSetting.INPUT_TEXT.componentName;
    } else {
      componentName = renderSetting.componentName;
    }
    const factory = this.resolver.resolveComponentFactory(componentName);
    entry.clear();
    let componentRef = entry.createComponent(factory);
    componentRef.instance['field'] = field;
    componentRef.changeDetectorRef.detectChanges();
    return componentRef
  }
}
