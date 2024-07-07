import "./FieldGroup.css";
import { Field } from "./types";

export default function FieldGroup(props) {
  return (
    <div className="field-group">
      {props.fields.map((field: Field) => {
        const {
          El,
          fieldName,
          value,
          fieldLabel,
          isRequired,
          options,
          errorMessage,
          showError,
        } = field;
        return (
          <El
            key={fieldName}
            fieldLabel={fieldLabel}
            fieldName={fieldName}
            value={value}
            options={options}
            isRequired={isRequired}
            onValueChange={props.onChange}
            errorMessage={errorMessage}
            showError={showError}
          ></El>
        );
      })}
    </div>
  );
}
