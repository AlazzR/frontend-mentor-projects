import { FieldElement } from "./types";

export default function MortgageTerm(props: FieldElement) {
  const { field, onChange, val } = props;
  return (
    <div className="field">
      <label className="field__label">Mortgage Term</label>
      <div className="input-container right">
        <input className="input-container__input"></input>
        <div className="input-container__logo">years</div>
      </div>
    </div>
  );
}
