import "./Field.css";
import { type Textbox } from "./types";
import ErrorState from "./ErrorState";
import { ChangeEvent } from "react";

export default function EmailAddress(props: Textbox) {
  const {
    errorMessage,
    showError,
    value,
    onValueChange,
    fieldName,
    fieldLabel,
  } = props;

  const onChange = (el: ChangeEvent<HTMLInputElement>) => {
    const changedValue = el.target.value;
    onValueChange({
      fieldName,
      value: changedValue,
    });
  };

  return (
    <div className="field">
      <label htmlFor={fieldName}>{fieldLabel}</label>
      <input
        className="field__textbox field__email"
        name={fieldName}
        type="text"
        onChange={onChange}
        value={(value ?? "") as string}
      ></input>
      <ErrorState message={errorMessage} show={showError} />
    </div>
  );
}
