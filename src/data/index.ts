//code display

export const codeDisplay = `<CodeDisplay :text="Your text" />`;

export const codeDisplayData = [
  {
    name: "text",
    description: "Paste your code there",
    type: "string",
    default: "",
  },
  {
    name: "copyText",
    description: "Get your code copyable",
    type: "boolean",
    default: "false",
  },
];

//button view

export const buttonViewData = [
  {
    name: "color",
    description: "Defines the component's color theme",
    type: "enum",
    enumTooltip:
      "primary | secondary | tertiary | success | warning | danger | info",
    default: "secondary",
  },
  {
    name: "text",
    description: "The text content displayed inside the component",
    type: "string",
    default: "",
  },
  {
    name: "rounded",
    description: "Applies rounded corners to the component",
    type: "boolean",
    default: "false",
  },
  {
    name: "size",
    description: "Controls the size of the component",
    type: "enum",
    enumTooltip: "small | default | large",
    default: "default",
  },
];

export const themesDisplay = `<Button color="primary" text="primary" /> 
<Button color="secondary" text="secondary" />
<Button color="tertiary" text="tertiary" />
<Button color="success" text="success" />
<Button color="warning" text="warning" />
<Button color="danger" text="danger" />
<Button color="info" text="info" />`;

export const radiusDisplay = `<Button color="primary" text="default" />
<Button rounded color="primary" text="rounded" />`;

export const sizeDisplay = `<Button size="small" color="secondary" text="small" />
<Button size="default" color="secondary" text="default" />
<Button size="large" color="secondary" text="large" />`;

//color view

export const colors = {
  light: {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
    warning: "bg-warning",
    danger: "bg-danger",
    info: "bg-info",
    success: "bg-success",
  },
  dark: {
    "primary-dark": "bg-primary-dark",
    "secondary-dark": "bg-secondary-dark",
    "tertiary-dark": "bg-tertiary-dark",
    "warning-dark": "bg-warning-dark",
    "danger-dark": "bg-danger-dark",
    "info-dark": "bg-info-dark",
    "success-dark": "bg-success-dark",
  },
  font: {
    light: "bg-[hsl(26,68%,20%)] text-font-color",
    dark: "bg-font-color text-[hsl(26,68%,20%)]",
  },
};
