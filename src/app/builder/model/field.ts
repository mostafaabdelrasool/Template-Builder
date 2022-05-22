import { Containers } from './containers';
import { FieldDataSource } from './data-source';
import { Style } from './style';

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
  label?: string;
  isContainer?: boolean;
  radioButtonGroup?: any[];
  fieldEvent?: FieldEvent[];
  applyStyleInClass?: boolean;
  fullWidth?: boolean;
  // container?: Containers;
  hasAction?: boolean;
  value?: string;
  category?: FieldCategory;
  complexValueCalculation?: ComplexValueCalculation;
  bindContainer?: boolean
}
export class ButtonField extends Fields {
  buttonType: ButtonFieldTypes;
  buttonColor: string;
  clickAction?: ELementClickAction;
}
export class ELementClickAction {
  type: ElementClickType;
  featureId?: string;
  formId?: string;
  applicationId? :string;
  afterClick: ElementAfterClick;
}
export enum ElementClickType {
  Submit, UpdateFeature, DeleteFeature, Navigate
}
export enum ElementAfterClick {
  BackToPrevious, ClearCurrentForm, Navigate
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
  typeName?: string
}
export class ComplexValueCalculation {
  when: WhenToCalculate;
  equation: FieldEquation[];
  name: string;
  resultModel?: string
}
export class FieldEquation {
  fieldModel?: string;
  operator?: string;
  fieldId?: string;
  fieldName?: string;
  number?: number
}
export enum WhenToCalculate {
  OnChange, OnSelect, OnClick, OnInit
}
export class TableField extends Fields {
  header: TableHeader[]
  dataSource: FieldDataSource;
}
export class CreateableTable extends Fields {
  header: TableHeader[];
  summaries?: TabelSummary[];
  rowsHeader: [TableHeader[]];
  editFormId : string;
  deleteFeatureAction : boolean
}
export class TabelSummary {
  model: string;
  type: SummaryType
}
export enum SummaryType {
  Sum, Average, Min, Max
}
export class TabField extends Fields {
  tabs: TabsConatiner[]
}
export class TabsConatiner {
  tabName: string;
  container: Containers;
}
export class FormField extends Fields {
  fields: Fields[];
}
export class TableHeader {
  name: string;
  binding: string;
  isSelected?: Boolean;
  columnType?: string;
  rowSpan?: number;
  columnSpan?: number;
  actions?: [{ tooltip?: string, onClickCode?: string, actionType?: number, icon?: string }];
  rowHeaderIndex = 0;
}
export class SelectField extends Fields {
  dispalyMember: string;
  valueMember: string;
  dataSource: FieldDataSource;
  onSelect?: OnSelectEvent
}
export class ListField extends Fields {
  fields: Fields[];
  dataSource: FieldDataSource;
}
export class OnSelectEvent {
  destinationPath: string;
  mapper?: [{ source: string, destination: string }];
  code?: string;
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
  TABLE, LIST, DROPDOWNLIST, TABS, CALC_Label, CREATABLE_TABLE
}
export interface FieldEvent {
  name: string;
  type: string;
}
export enum AngularFieldEventType {
  Click = "click", Change = "change"
}
