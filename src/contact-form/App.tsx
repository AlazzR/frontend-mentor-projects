import "./App.css";
import FieldGroup from "./FieldGroup";
import Textbox from "./Textbox";
import EmailAddress from "./EmailAddress";
import Options from "./Options";
import Consent from "./Consent";
import { FormEventHandler, useState } from "react";
import { ChangeEvent, Field } from "./types";
import Textarea from "./Textarea";

const evaluateIsEmpty = (field: Field) => {
  if (!field) return true;
  if (!field.isRequired) return false;
  if (field.type === "boolean") return !field.value;
  if (field.type === "email")
    return !field.value || !(field.value as string).includes("@");
  return !field.value || (field.value as string).length === 0;
};

export default function App() {
  const fields: Field[] = [
    {
      fieldLabel: "First Name",
      fieldName: "firstName",
      value: null,
      isRequired: true,
      showError: false,
      errorMessage: "This field is required",
      type: "textbox",
      El: Textbox,
      isEmpty() {
        return evaluateIsEmpty(this);
      },
    },
    {
      fieldLabel: "Last Name",
      fieldName: "lastName",
      value: null,
      isRequired: false,
      showError: false,
      errorMessage: "This field is required",
      type: "textbox",
      El: Textbox,
      isEmpty() {
        return evaluateIsEmpty(this);
      },
    },
    {
      fieldLabel: "Email Address",
      fieldName: "emailAddress",
      value: null,
      isRequired: true,
      showError: false,
      errorMessage: "Please enter a valid email address",
      type: "email",
      El: EmailAddress,
      isEmpty() {
        return evaluateIsEmpty(this);
      },
    },
    {
      fieldLabel: "Message",
      fieldName: "message",
      value: null,
      isRequired: true,
      showError: false,
      errorMessage: "Please select a query type",
      type: "textarea",
      El: Textarea,
      isEmpty() {
        return evaluateIsEmpty(this);
      },
    },
    {
      fieldLabel: "Query Type",
      fieldName: "queryType",
      value: null,
      isRequired: true,
      options: ["General Enquiry", "Support Request"],
      showError: false,
      errorMessage: "This field is required",
      type: "textbox",
      El: Options,
      isEmpty() {
        return evaluateIsEmpty(this);
      },
    },
    {
      fieldLabel: "I consent to being contacted by the team",
      fieldName: "consent",
      value: null,
      isRequired: true,
      showError: false,
      errorMessage: "To submit this form, please consent to being contacted",
      type: "boolean",
      El: Consent,
      isEmpty() {
        return evaluateIsEmpty(this);
      },
    },
  ];

  const [formData, updateFormData] = useState(fields);

  const onChange = (data: ChangeEvent) => {
    const { fieldName, value, showError } = data;
    updateFormData((previousState) => {
      const newFields = [...previousState];
      const field = previousState.find(
        (field) => field.fieldName === fieldName
      );
      field!.value = value;
      field!.showError = showError;
      return newFields;
    });
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    updateFormData((pv) => {
      const newFields = [...pv];
      const emptyFields = pv.filter((field) => field.isEmpty());
      emptyFields.forEach((f) => {
        f.showError = true;
      });
      return newFields;
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Contact Us</h1>
      {
        <FieldGroup
          fields={formData.filter((field) =>
            ["firstName", "lastName"].includes(field.fieldName)
          )}
          onChange={onChange}
        />
      }
      {formData
        .filter((field) => !["firstName", "lastName"].includes(field.fieldName))
        .map((field) => (
          <FieldGroup fields={[field]} onChange={onChange} />
        ))}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
