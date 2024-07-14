// Formula https://en.wikipedia.org/wiki/Mortgage_calculator
import { useState } from "react";
import MortgageAmount from "./MortgageAmount";
import MortgageTerm from "./MortgageTerm";
import MortgageTypesElement from "./MortgageTypes";
import { Field, OnChange } from "./types";
import InterestRate from "./InterestRate";
import "./Field.css";
import "./App.css";

function useFields() {
  const initialFields: Field[] = [
    {
      El: MortgageAmount,
      field: "mortgageAmount",
      val: "",
    },
    {
      El: MortgageTerm,
      field: "mortgageTerm",
      val: "",
    },
    {
      El: InterestRate,
      field: "interestRate",
      val: "",
    },
    {
      El: MortgageTypesElement,
      field: "mortgageType",
      val: "",
    },
  ];

  return useState(initialFields);
}

const calculateMonthlyRepayments = (fields: Field[]) => {
  const fieldsMapper = {};
  fields.forEach(({ field, val }) => {
    fieldsMapper[field] = val;
  });
  const mortgageAmount = fieldsMapper["mortgageAmount"] as number;
  const mortgageTerm = fieldsMapper["mortgageTerm"] as number;
  const interestRate = fieldsMapper["interestRate"] as number;
  // const mortgageType = fieldsMapper["mortgageType"] as MortgageTypes;

  if (interestRate === 0) return mortgageAmount / (12 * mortgageTerm);
  const monthlyInterestRate = interestRate / 1200;
  const nominator = mortgageAmount * monthlyInterestRate;
  const denominator = 1 - Math.pow(1 + monthlyInterestRate, -12 * mortgageTerm);

  return nominator / denominator;
};

export default function App() {
  const [fields, updateFields] = useFields();
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  const [monthlyRepayments, setMonthlyRepayments] = useState<string>("");
  const [totalMonthlyRepayments, setTotalMonthlyRepayments] =
    useState<string>("");

  const updateField: OnChange = (field, val) => {
    return updateFields((pv) => {
      const copy = [...pv];
      const currentFieldObj = copy.find((obj) => obj.field === field) as Field;
      currentFieldObj.val = val;
      return copy;
    });
  };

  const clearAll = () => {
    updateFields((pv) => {
      const copy = [...pv];
      copy.forEach((field) => {
        field.val = "";
      });
      return copy;
    });
    setIsCalculated(false);
    setMonthlyRepayments("");
    setTotalMonthlyRepayments("");
  };

  const calculateFn = () => {
    let allFieldsHaveValue = true;
    fields.forEach((field) => {
      allFieldsHaveValue =
        allFieldsHaveValue && !!(field.val || field.val === 0);
    });

    setIsCalculated(allFieldsHaveValue);

    if (!allFieldsHaveValue) return;
    const mortgageTerm = fields.find((f) => f.field === "mortgageTerm")!
      .val as number;
    const monthlyRepayment = calculateMonthlyRepayments(fields);
    const total = (12 * mortgageTerm * monthlyRepayment).toFixed(2);
    setMonthlyRepayments(monthlyRepayment.toFixed(2));
    setTotalMonthlyRepayments(total);
  };

  return (
    <div className="form">
      <main>
        <header>
          <h1>Mortgage Calculator</h1>
          <button className="clear-all" onClick={clearAll}>
            Clear All
          </button>
        </header>

        <div>
          {fields.map(({ El, field, val }) => {
            return (
              <El key={field} onChange={updateField} field={field} val={val} />
            );
          })}
        </div>
        <div className="calculate" onClick={calculateFn}>
          <img src="./mortgage-repayment-calculator/icon-calculator.svg"></img>
          <div>Calculate Repayments</div>
        </div>
      </main>

      <summary className={isCalculated ? "" : "hide-on-small-screen"}>
        <div className={"waiting-calculation " + (isCalculated ? "hide" : "")}>
          <div className="result-img"></div>
          <h2>Results shown here</h2>
          <p>
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </div>
        <div className={"result " + (isCalculated ? "" : "hide")}>
          <div>
            <h2>Your Results</h2>
            <p>
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              “calculate repayments” again.
            </p>
            <div className="result__summary">
              <div>
                <p>Your monthly repayments</p>
                <p className="result__value">${monthlyRepayments}</p>
              </div>
              <div>
                <p>Total you'll repay over the term</p>
                <p className="result__value">${totalMonthlyRepayments}</p>
              </div>
            </div>
          </div>
        </div>
      </summary>
    </div>
  );
}
