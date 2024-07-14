import { FieldElement } from "./types";

export default function MortgageAmount(props: FieldElement) {
  const { field, onChange, val } = props;
  return (
    <div className="field">
      <label className="field__label">Mortgage Amount</label>
      <div className="input-container left left-border right-border">
        <div className="input-container__logo left-border">$</div>
        <input
          className="input-container__input right-border"
          type="number"
          onChange={(event) => onChange(field, parseFloat(event.target.value))}
          value={val as number}
        ></input>
      </div>
    </div>
  );
}
