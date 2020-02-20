import { Containers } from './containers';

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
  startDate?: Date;
  endData?: Date;
  isContainer?: boolean;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  radioButtonGroup?: any[];
  fieldEvent?: FieldEvent[];
  applyStyleInClass?: boolean;
  fullWidth?: boolean;
  container?: Containers;
  tableSetting?: TableSetting
}
export class ButtonField extends Fields {
  buttonType: ButtonFieldTypes;
  buttonColor: string;
}
export class TableSetting {
  header: TableHeader[]
  url: any;
}
export class TableHeader {
  name: string;
  binding:string;
  isSelected: Boolean
}
export enum ButtonFieldTypes {
  BASIC = 'mat-button', RASIED = 'mat-raised-button', STROCK = 'mat-stroked-button',
  FLAT = 'mat-flat-button', ICON = 'mat-icon-button', FAB = 'mat-fab', MINI_FAB = 'mat-mini-fab'
}
export enum ButtonFieldCOLOR {
  Basic = 'basic', Primary = 'primary', Accent = 'accent', Warn = 'warn'
}
export enum FieldType {
  INPUT_TEXT, INPUT_NUMBER, DD, DIV, FORM, ACCORDION, CHECKBOX,
  DATEPICKER, TEXT_AREA, RADIO_BUTTON_GROUP, SELECT, SLIDER, SLIDER_TOGGLE,
  CHILD_DIV, RADIO_BUTTON, CARD, BUTTON, BUTTON_GROUP, TITLE, SUBTITLE, TEXT, INPUT_EMAIL, INPUT_PASSWORD, TABLE, LIST, DROPDOWNLIST
}
export interface FieldEvent {
  name: string;
  type: string;
}
export enum AngularFieldEventType {
  Click = "click", Change = "change"
}
export class Style {
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
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
  border?: string;
  boxShadow?: string;
  borderRadius?: string;
  minHeight?: string;
  fontFamily?: string;
  fontSize?: string;
  lineHeight?: string;
  fontColor?: string;
  textAlign?: string;
  fontWeight?: string;
  fxFlex?: FxFlex = {};
}
export interface FxFlex {
  fxFill?: boolean;
  fxLayoutGap?: string;
  fxFlexAlign?: string;
  fxLayout?: string;
  fxLayoutAlignH?: string;
  fxLayoutAlignV?: string;
  wrap?: string;
  fxFlex?: string;
}