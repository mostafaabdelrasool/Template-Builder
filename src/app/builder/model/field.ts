import { Containers } from './containers';
import { FieldDataSource } from './data-source';

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
  isContainer?: boolean;
  radioButtonGroup?: any[];
  fieldEvent?: FieldEvent[];
  applyStyleInClass?: boolean;
  fullWidth?: boolean;
  // container?: Containers;
  hasAction?: boolean;
  value?: string;
  category?: FieldCategory;
  complexValueCalculation?: ComplexValueCalculation
}
export class ButtonField extends Fields {
  buttonType: ButtonFieldTypes;
  buttonColor: string;
}
export enum FieldCategory {
  Input, Container, Button, Typograpghy
}
export class InputField extends Fields {
  hint: string;
  validations: [];
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  startDate?: Date;
  endData?: Date;
  clearButton?: boolean;
}
export class ComplexValueCalculation {
  when: WhenToCalculate;
  equation: FieldEquation[];
  name: string;
  resultModel?:string
}
export class FieldEquation {
  fieldModel?: string;
  operator?: string;
  fieldId?:string;
  fieldName?:string;
}
export enum WhenToCalculate {
  OnChange, OnSelect, OnClick, OnInit
}
export class TableField extends Fields {
  header: TableHeader[]
  dataSource: FieldDataSource;
}
export class TabField extends Fields {
  tabs: TabsConatiner[]
}
export class TabsConatiner {
  tabName: string;
  container: Containers;
}
export class TableHeader {
  name: string;
  binding: string;
  isSelected: Boolean
}
export class SelectField extends Fields {
  dispalyMember: string;
  valueMember: string;
  dataSource: FieldDataSource;
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
  CHILD_DIV, RADIO_BUTTON, CARD, BUTTON, BUTTON_GROUP, TITLE, SUBTITLE, TEXT, INPUT_EMAIL, INPUT_PASSWORD,
  TABLE, LIST, DROPDOWNLIST, TABS,CALC_Label
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
  color?: string;
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