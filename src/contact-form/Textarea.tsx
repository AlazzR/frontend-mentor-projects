import "./Field.css";
import { type Textbox } from "./types";
import ErrorState from "./ErrorState";
import { ChangeEvent } from "react";

export default function Textarea(props: Textbox) {
  const {
    value,
    errorMessage,
    showError,
    onValueChange,
    fieldName,
    fieldLabel,
  } = props;

  const onChange = (el: ChangeEvent<HTMLTextAreaElement>) => {
    const changedValue = el.target.value;
    onValueChange({
      fieldName,
      value: changedValue,
    });
  };

  return (
    <div className="field" draggable="true">
      <label htmlFor={fieldName}>{fieldLabel}</label>
      <textarea
        className="field__textarea"
        name={fieldName}
        onChange={onChange}
        value={(value ?? "") as string}
      ></textarea>
      <ErrorState message={errorMessage} show={showError} />
    </div>
  );
}
