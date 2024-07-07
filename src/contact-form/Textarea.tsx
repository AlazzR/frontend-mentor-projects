import "./Field.css";
import { type Textbox } from "./types";
import ErrorState from "./ErrorState";
import { ChangeEvent, useState } from "react";

export default function Textarea(props: Textbox) {
  const {
    value,
    errorMessage,
    showError,
    onValueChange,
    isRequired,
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
        value={value ?? ""}
      ></textarea>
      <ErrorState message={errorMessage} show={showError} />
    </div>
  );
}
