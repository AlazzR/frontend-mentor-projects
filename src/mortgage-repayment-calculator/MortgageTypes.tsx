import { FieldElement, MortgageTypes } from "./types";
import "./MortgateTypes.css";

export default function MortgageTypesElement(props: FieldElement) {
  const { field, onChange, val } = props;

  const options: Array<{ text: string; val: MortgageTypes }> = [
    {
      text: "Repayment",
      val: "repayment",
    },
    {
      text: "Interest Only",
      val: "interest-only",
    },
  ];

  return (
    <div className="field">
      <label className="field__label">Mortgage Types</label>
      <div className="options">
        {options.map((option) => {
          return (
            <div className="options__option">
              <div className="option__select">
                <div className={val === option.val ? "selected" : ""}></div>
              </div>
              <div>{option.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
