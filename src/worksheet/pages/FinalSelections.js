import { Link } from "react-router-dom";
import { React } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import BackArrow from '../../app-files/images/previous-button.svg'

import Input from "../components/input.js";
import DisplayUserSelection from "../components/DisplayUserSelection";
import "./FinalSelections.css";
import "./CustomizeGeneral.css";

const FinalSelections = (props) => {
  return (
    <div className="main-container final-selection-container ">
      <div className="concept-back-arrow">
        <Link to="/concept-selection">
          <button onClick={props.handleClearInput}>
            <img className="back-arrow" src={BackArrow} alt="back"></img>
          </button>
        </Link>
        <h1>General Customization</h1>
      </div>
      <div className="selection-container">
        <TextField
          variant="filled"
          id="filled-basic"
          label={<span className="">Document Title</span>}
          name="docTitle"
          type="text"
          value={props.generalSelection.docTitle}
          onChange={props.handleInput}
          placeholder=""
          required
          className="doc-title-input"
          min="1"
          max="50"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="mixed"
              value={props.generalSelection.mixed}
              // checked={!!props.generalSelection['order']}
              onChange={props.handleInput}
              color="primary"
            />
          }
          className="checkbox-space"
          label={<span className="checkbox"> Mix Up Concepts</span>}
        />{" "}
        <br />
        <FormControlLabel
          control={
            <Checkbox
              name="docStyle"
              value={props.generalSelection.docStyle}
              onChange={props.handleInput}
              color="primary"
            />
          }
          label={
            <span className="checkbox"> Columns (Fit more on a page)</span>
          }
        />{" "}
        <br />
      </div>
      <div>
        <Link to="/display-assignment" className="general-button-link">
          <button
            type="submit"
            className="general-button"
            onClick={props.handlePDFViewerTrigger}
          >
            Create your assignment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FinalSelections;


  /* <label className="final-title" htmlFor="level">
        Document Title:
      </label> */

  /* <input
        type="text"
        className="doc-title-input"
        id="docTitle"
        value={props.generalSelection.docTitle}
        // onChange={props.handleInputTitle}
        onChange={props.handleInput}
        name="docTitle"
      /> */

  /* <Input
        label="Mix up questions:"
        name="mixed"
        type="checkbox"
        value={props.generalSelection.mixed}
        // onChange={props.handleOrder}
        onChange={props.handleInput}
        className="input final-title"
      /> */

  /* <Input
        label="Columns:"
        name="docStyle"
        type="checkbox"
        value={props.generalSelection.docStyle}
        // onChange={props.handleDocStyle}
        onChange={props.handleInput}
        className="input final-title"
      /> */

