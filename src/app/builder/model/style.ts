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