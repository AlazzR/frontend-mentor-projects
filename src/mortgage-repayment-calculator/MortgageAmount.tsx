import { FieldElement } from "./types";

export default function MortgageAmount(props: FieldElement) {
  const { field, onChange, val } = props;
  return (
    <div className="field">
      <label className="field__label">Mortgage Amount</label>
      <div className="input-container left">
        <div className="input-container__logo">$</div>
        <input className="input-container__input"></input>
      </div>
    </div>
  );
}
