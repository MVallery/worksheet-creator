import { React } from "react";
import { Link } from "react-router-dom";

const conceptButton = (props, concept) => {
  return (
      <button
        type="button"
        name="concept"
        value={concept}
        className="concept-button"
        onClick={e => props.handleInput(e)}
      >
        {concept}
      </button>
  );
};
const ConceptSelection = (props) => {
  return (
    <div className="concept-selection-container">

      <p className="concept-selection-title-desc">
        Select a concept below to customize your assignment.
      </p>
      <div className= 'concept-container'>
        <div className='buttonGroup'>
        <div className="concept-topic">Whole Number Operations</div>
        <Link to="/concept-customization">
          {conceptButton(props, "Adding Whole Numbers")}
          {conceptButton(props, "Subtracting Whole Numbers")}
          {conceptButton(props, "Multiplying Whole Numbers")}
          {conceptButton(props, "Dividing Whole Numbers")}
        </Link>
        </div>
        <div className='buttonGroup'>
        <div className="concept-topic">Decimal Operations</div>
        <Link to="/concept-customization">
          {conceptButton(props, "Adding Decimals")}
          {conceptButton(props, "Subtracting Decimals")}
          {conceptButton(props, "Multiplying Decimals")}
          {conceptButton(props, "Dividing Decimals")}
        </Link>
        </div>
      </div>

      <div className='concept-container'>
      <div className="buttonGroup">
        <div className="concept-topic">Fraction Operations</div>
          <Link to="/concept-customization">
            {conceptButton(props, "Adding Fractions")}
            {conceptButton(props, "Subtracting Fractions")}
            {conceptButton(props, "Multiplying Fractions")}
            {conceptButton(props, "Dividing Fractions")}
          </Link>
        </div>
        <div className="buttonGroup">
        <div className="concept-topic">Other Concepts</div>
          <Link to="/concept-customization">
            {conceptButton(props, "Order of Operations")}
            {conceptButton(props, "Input Output Tables")}
            {conceptButton(props, "Coordinate Grid")}
            {conceptButton(props, "Area and Perimeter")}

          </Link>
        </div>
      </div>

    </div>
  );
};

export default ConceptSelection;