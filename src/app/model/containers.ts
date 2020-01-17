import { Style, Fields } from './field';

export interface Containers {
  isSelected?: boolean;
  type: ContainerType,
  id: string;
  classes?: string[];
  name?: string;
  style?: Style;
  fields: Fields[];
}
export enum ContainerType {
  DIV, FORM, ACCORDION
}