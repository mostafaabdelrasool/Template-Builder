import {  Fields } from './field';

export class Containers extends Fields {
  fields?: Fields[];
}
export class CardField extends Containers{
  cardTitle?: string;
  cardSubTitle?: string;
  cardActions?:CardActions[]
}
export class CardActions{
  title:string;
  onClickEventName?:string;
}