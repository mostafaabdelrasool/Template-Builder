import { TabFieldRenderComponent } from "../child-container-render/tab-field-render/tab-field-render.component";
import { ListFieldRenderComponent } from './../child-container-render/list-field-render/list-field-render.component';
import { ContainerRenderComponent } from './../container.render/container.render.component';

export const FieldRenderSetting = {
  TABS: {
    componentName: TabFieldRenderComponent
  },
  LIST: {
    componentName: ListFieldRenderComponent
  },
  CHILD_DIV: {
    componentName: ContainerRenderComponent
  }

}
