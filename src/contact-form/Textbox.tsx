import ErrorState from "./ErrorState";
import "./Field.css";
import { type Textbox } from "./types";
import { ChangeEvent } from "react";

export default function Textbox(props: Textbox) {
  const {
    value,
    onValueChange,
    fieldName,
    fieldLabel,
    showError,
    errorMessage,
  } = props;

  const onChange = (el: ChangeEvent<HTMLInputElement>) => {
    const changedValue = el.target.value;
    onValueChange({
      fieldName,
      value: changedValue,
      showError: false,
    });
  };

  return (
    <div className="field" draggable="true">
      <label htmlFor={fieldName}>{fieldLabel}</label>
      <input
        className="field__textbox"
        name={fieldName}
        type="text"
        onChange={onChange}
        value={(value ?? "") as string}
      ></input>
      <ErrorState message={errorMessage} show={showError} />
    </div>
  );
}
