import { ReactElement } from "react";

export type MortgageTypes = "repayment" | "interest-only";

export type OnChange = (field: string, val: number | MortgageTypes) => void;

export type Field = {
  El: (props: FieldElement) => ReactElement;
  field: string;
  val: number | MortgageTypes | null;
};

export type FieldElement = {
  field: string;
  val: MortgageTypes | number | null;
  onChange: OnChange;
};
