export class Fields {
  type: FieldType;
  model: string;
  isSelected?: Boolean;
  id: string;
  classes?: string[];
  name?: string
  style?: Style
}
export enum FieldType {
  INPUT_TEXT, INPUT_NUMBER, DD, DIV, FORM, ACCORDION
}
export interface Style {
  position?: string;
  display?: string;
  width?: string;
  height?: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  maxWidth?: string;
  maxHeight?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  flexDirection?:string;
  alignItems?:string;
  justifyContent?:string;
}