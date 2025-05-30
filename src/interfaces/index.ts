export interface TableRow {
  name: string;
  description: string;
  type: string;
  default: string;
  enumTooltip?: string;
}

export interface ButtonInterface {
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "warning"
    | "danger"
    | "info"
    | "success"
    | "transparent";
  text?: string;
  rounded?: boolean;
  size?: string;
}
