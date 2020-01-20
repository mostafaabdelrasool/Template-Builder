export class Fields {
  type: FieldType;
  model: string;
  isSelected?: Boolean;
  id: string;
  classes?: string[];
  name?: string
  style?: Style;
  containerId?: string;
  placeholder?: string;
  value?: string;
  min?: number;
  max?: number;
  step?: number;
  startDate?: Date
  endData?: Date
}
export enum FieldType {
  INPUT_TEXT, INPUT_NUMBER, DD, DIV, FORM, ACCORDION, CHECKBOX,
  DATEPICKER, TEXT_AREA, RADIO_BUTTON, SELECT, SLIDER, SLIDER_TOGGLE,
  CHILD_DIV
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
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  flexWrap?: string;
}