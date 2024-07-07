/* eslint-disable @typescript-eslint/no-explicit-any */
export type ChangeEvent = {
  value: string | boolean | null;
  fieldName: string;
  showError?: boolean;
};

export type Textbox = {
  fieldName: string;
  fieldLabel: string;
  value: string | null | boolean;
  isRequired: boolean;
  showError?: boolean;
  errorMessage: string;
  onValueChange: (data: ChangeEvent) => void;
};

export type Textarea = Textbox;

export type Options = Textbox & {
  options: string[];
};

export type Field = {
  fieldName: string;
  fieldLabel: string;
  value: string | null | boolean;
  options?: string[];
  isRequired: boolean;
  showError?: boolean;
  errorMessage: string;
  El: any;
  type: "textbox" | "textarea" | "email" | "boolean";
  isEmpty: () => boolean;
};
