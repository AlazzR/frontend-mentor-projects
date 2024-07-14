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
          const isSelected = val === option.val;
          return (
            <div
              className={
                "options__option left-border right-border " +
                (isSelected ? "selected" : "")
              }
              onClick={() => onChange(field, option.val)}
              key={option.val}
            >
              <div className="option__select">
                <div className={isSelected ? "selected" : ""}></div>
              </div>
              <div>{option.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
