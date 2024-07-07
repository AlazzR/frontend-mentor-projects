import "./Field.css";
import { type Options } from "./types";
import "./Options.css";
import ErrorState from "./ErrorState";
import { useState } from "react";

export default function Options(props: Options) {
  const {
    errorMessage,
    showError,
    options,
    onValueChange,
    fieldName,
    fieldLabel,
  } = props;
  const [selectedIndx, setSelectedIndx] = useState(-1);

  const onChange = (value: string, indx: number) => {
    const changedValue = value;
    setSelectedIndx(indx);
    onValueChange({
      fieldName,
      value: changedValue,
    });
  };

  return (
    <div className="field" draggable="true">
      <label htmlFor={fieldName}>{fieldLabel}</label>
      <div className="options">
        {options.map((option, indx) => {
          return (
            <div
              className="options__option"
              key={option}
              onClick={() => onChange(option, indx)}
            >
              <img
                src={
                  indx === selectedIndx
                    ? "./contact-form/icon-radio-selected.svg"
                    : "./contact-form/icon-success-check.svg"
                }
              ></img>
              <div
                className="options__value"
                data-index={indx.toString()}
                data-value={option}
              >
                {option}
              </div>
            </div>
          );
        })}
      </div>
      <ErrorState message={errorMessage} show={showError} />
    </div>
  );
}
