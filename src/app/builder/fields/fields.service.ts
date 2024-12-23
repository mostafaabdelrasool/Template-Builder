import {
  Injectable,
  ViewContainerRef,
} from "@angular/core";
import { FieldRenderSetting } from "../model/field-render-setting";
import { FieldType, Fields, FieldCategory } from "../model/field";

/**
 * @description
 * @class
 */
@Injectable()
export class FieldService {
  constructor() {}
  createComponent(field: Fields, entry: ViewContainerRef) {
    let renderSetting = FieldRenderSetting[FieldType[field.type]];
    let componentName;
    if (!renderSetting && field.category === FieldCategory.Input) {
      componentName = FieldRenderSetting[FieldCategory.Input].componentName;
    } else {
      componentName = renderSetting.componentName;
    }
    entry.clear();
    let componentRef = entry.createComponent(componentName);
    (componentRef.instance as typeof componentName)["field"] = field;
    componentRef.changeDetectorRef.detectChanges();
    return componentRef;
  }
}
