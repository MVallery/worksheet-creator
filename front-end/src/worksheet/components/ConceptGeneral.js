import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";

import "./ConceptGeneral.css";
import { FormControl } from "@material-ui/core";

const ConceptGeneral = (props) => {
  const [errorState, setErrorState] = useState(true);
  let error =
    props.inputState.specify.quantity < 1 ||
    props.inputState.specify.quantity > 50
      ? true
      : false;

  const errorFormValidation = () => {
    let errorCheck = true;
    let errorList = [];
    let specify = props.inputState.specify;
    let newSpecifyArray = [];
    !specify.quantity ? errorList.push(true) : errorList.push(false);
    if (props.specifyArray.includes("level") && !specify.level) {
      errorList.push(true);
    } else {
      errorList.push(false);
    }
    if (props.specifyArray.includes("probStyle") && !specify.probStyle) {
      errorList.push(true);
    } else {
      errorList.push(false);
    }
    newSpecifyArray = props.specifyArray.filter(
      (specify) => specify !== "level" && specify !== "probStyle"
    );
    for (let i in newSpecifyArray) {
      if (
        !specify[newSpecifyArray[i]] || !Object.values(specify[newSpecifyArray[i]]).includes(true)
      ) {
        errorList.push(true);
      } else {
        errorList.push(false);
      }
    }
    errorCheck = errorList.includes(true) ? true : false;
    setErrorState(errorCheck);
  };

  useEffect(() => {
    errorFormValidation();
  }, [props.inputState]);
  return (
    <div className="concept-general-container">
      <div className="quantity-addQ">
        <FormControl>
          <div style={{ display: "flex", flexDirection: "column", width: '100px'}}>
            <TextField
              variant="filled"
              id="filled-basic"
              label={<span className="">Quantity</span>}
              name="quantity"
              type="number"
              error={error}
              inputProps={{ min: 1, max: 50 }}
              value={props.inputState.specify.quantity}
              onChange={props.handleSpecifyInput}
              placeholder="1-50"
              required
              className="quantity-input"
              min="1"
              max="50"
            />

          </div>
        </FormControl>
      </div>

      <div className="addQ-container">
        <label htmlFor="submit"></label>
        <Link to="/concept-selection" className="general-button-link">
          {errorState === false ? (
            <button
              type="button"
              className="general-button"
              id="submit"
              onClick={() => props.handleAddConcept()}
            >
              Add & <br />
              Select More
            </button>
          ) : (
            <button
              type="button"
              disabled
              className="general-button"
              id="submit"
              onClick={() => props.handleAddConcept()}
            >
              Add & <br />
              Select More
            </button>
          )}
        </Link>
        <Link to="/final-selections" className="general-button-link">
          {errorState === false ? (
            <button
              type="button"
              className="general-button"
              id="submit"
              onClick={() => props.handleAddConcept()}
            >
              Add &<br />
              Create Assignment
            </button>
          ) : (
            <button
              type="button"
              className="general-button"
              id="submit"
              disabled
              onClick={() => props.handleAddConcept()}
            >
              Add &<br />
              Create Assignment
            </button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default ConceptGeneral;
