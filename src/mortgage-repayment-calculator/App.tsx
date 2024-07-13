// Formula https://en.wikipedia.org/wiki/Mortgage_calculator
import { useState } from "react";
import MortgageAmount from "./MortgageAmount";
import MortgageTerm from "./MortgageTerm";
import MortgageTypesElement from "./MortgageTypes";
import { Field, OnChange } from "./types";
import InterestRate from "./InterestRate";
import "./Field.css";

function useFields() {
  const initialFields: Field[] = [
    {
      El: MortgageAmount,
      field: "mortgageAmount",
      val: null,
    },
    {
      El: MortgageTerm,
      field: "mortgageTerm",
      val: null,
    },
    {
      El: InterestRate,
      field: "interestRate",
      val: null,
    },
    {
      El: MortgageTypesElement,
      field: "mortgageType",
      val: "repayment",
    },
  ];

  return useState(initialFields);
}

export default function App() {
  const [fields, updateFields] = useFields();

  const updateField: OnChange = (field, val) => {
    return updateFields((pv) => {
      const copy = { ...pv };
      copy[field] = {
        ...copy[field],
        val: val,
      };
      return copy;
    });
  };

  return (
    <div>
      <div>
        <h1>Mortgage Calculator</h1>
        <button>Clear All</button>
        <div>
          {fields.map(({ El, field, val }) => {
            return <El onChange={updateField} field={field} val={val} />;
          })}
        </div>
        <button>Calculate Repayments</button>
      </div>
      <div>
        <div>
          <></>
          <h2>Results shown here</h2>
          <p>
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </div>
        <div>
          <h2>Your Results</h2>
          <p>
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
          <div>
            <div>
              <h3>Your monthly repayments</h3>
            </div>
            <div>
              <h3>Your monthly repaymentsTotal you'll repay over the term</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
