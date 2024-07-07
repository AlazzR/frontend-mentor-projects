import "./Field.css";
import { type Textbox } from "./types";
import ErrorState from "./ErrorState";
import { MouseEventHandler } from "react";

export default function Consent(props: Textbox) {
  const {
    value,
    errorMessage,
    showError,
    onValueChange,
    fieldName,
    fieldLabel,
  } = props;

  const onChange: MouseEventHandler<HTMLInputElement> = (el) => {
    onValueChange({
      fieldName,
      value: (el.target as HTMLInputElement).checked,
    });
  };

  return (
    <div className="field field--consent" draggable="true">
      <input
        type="checkbox"
        onClick={onChange}
        checked={value as boolean}
      ></input>
      <label htmlFor={fieldName}>{fieldLabel}</label>
      <ErrorState message={errorMessage} show={showError} />
    </div>
  );
}
