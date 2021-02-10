import { defaultProps, PropTypes, React } from "react";
import { Router, Route, Link, Switch } from "react-router-dom";

const conceptButton = (props, concept) => {
  return (
      <button
        type="button"
        className="concept-button"
        onClick={() => props.handleConcept("concept", concept)}
      >
        {concept}
      </button>
  );
};
const ConceptSelection = (props) => {
  return (
    <div className="concept-selection-container">
     <Link to ='/' className= "infinite-math-small">
      <h1 className= "infinite-math-small"><span className="in-small">IN</span><span className='finite-small'>finite</span> Math</h1>    
     </Link>  
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
          {conceptButton(props, "Adding Decimals Algorithm")}
          {conceptButton(props, "Subtracting Decimals Algorithm")}
          {conceptButton(props, "Multiplying Decimals Algorithm")}
          {conceptButton(props, "Dividing Decimals Algorithm")}
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
            {conceptButton(props, "Area Perimeter")}

          </Link>
        </div>
      </div>

    </div>
  );
};

export default ConceptSelection;
