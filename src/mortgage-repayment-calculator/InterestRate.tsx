import { FieldElement } from "./types";

export default function InterestRate(props: FieldElement) {
  const { field, onChange, val } = props;
  return (
    <div className="field">
      <label className="field__label">Interest Rate</label>
      <div className="input-container right">
        <input className="input-container__input"></input>
        <div className="input-container__logo">%</div>
      </div>
    </div>
  );
}
