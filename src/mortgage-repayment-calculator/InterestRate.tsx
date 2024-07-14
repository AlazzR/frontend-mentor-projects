import { FieldElement } from "./types";

export default function InterestRate(props: FieldElement) {
  const { field, onChange, val } = props;
  return (
    <div className="field">
      <label className="field__label">Interest Rate</label>
      <div className="input-container right left-border right-border">
        <input
          className="input-container__input left-border"
          type="number"
          onChange={(event) => onChange(field, parseFloat(event.target.value))}
          value={val as number}
        ></input>
        <div className="input-container__logo right-border">%</div>
      </div>
    </div>
  );
}
