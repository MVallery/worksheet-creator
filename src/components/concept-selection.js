import {defaultProps, PropTypes, React} from 'react'
import {Router, Route, Link, Switch } from "react-router-dom";


const ConceptSelection = (props) => {
    return(
    <div className="concept-dropdown-container">
    <p className="customize-title">Math Concepts</p>

  <div>

    <div className="concept-topic">
      Whole Number Operations
      {/* <div className="dropdown-content">
      </div> */}
    </div>
  </div>
  <div className="buttonGroup">
  <Link to ='/concept-customization'>

        <button
          type="button"
          className="dropdown"
          onClick={() => props.handleConcept("concept", "Adding Whole Numbers")}
        >
          Adding Whole Numbers
        </button>
    
        <button
          type="button"
          className="dropdown"
          onClick={() => props.handleConcept("concept", "Subtracting Whole Numbers")}
        >
          Subtracting Whole Numbers
        </button>
        <button
          type="button"
          className="dropdown"
          onClick={() => props.handleConcept("concept", "Multiplying Whole Numbers")}
        >
          Multiplying Whole Numbers
        </button>
        <button
          type="button"
          className="dropdown"
          onClick={() => props.handleConcept("concept", "Dividing Whole Numbers")}
        >
          Dividing Whole Numbers
        </button>
        </Link>

  </div>
  <div>
    <div className="concept-topic">
      Decimal Operations
      <div className="dropdown-content">
      </div>
    </div>
  </div>
  <div className= "buttonGroup">
  <Link to ='/concept-customization'>

  <button
          type="button"
          className="dropdown"
          onClick={() => props.handleConcept("concept", "Adding Decimals Algorithm")}
        >
          Adding Decimals
        </button>
        <button
          type="button"
          className="dropdown"
          onClick={() => props.handleConcept("concept", "Subtracting Decimals Algorithm")}
        >
          Subtracting Decimals
        </button>
        <button
          type="button"
          className="dropdown"
          onClick={() => props.handleConcept("concept", "Dividing Decimals Algorithm")}
        >
          Dividing Decimals
        </button>
        <button
          type="button"
          className="dropdown"
          onClick={() => props.handleConcept("concept", "Multiplying Decimals Algorithm")}
        >
          Multiplying Decimals
        </button>
        </Link>
  </div>
  <div>
    <div className="concept-topic">
      Fraction Operations

    </div>
    
  </div>
  <div className="buttonGroup">
  <Link to ='/concept-customization'>

  <button
          type="button"
          className="dropdown"
          onClick={() => props.handleConcept("concept", "Adding Fractions")}
        >
          Adding Fractions
        </button>
        <button
          type="button"
          className="dropdown"
          onClick={() => props.handleConcept("concept", "Subtracting Fractions")}
        >
          Subtracting Fractions
        </button>
        <button
          type="button"
          className="dropdown"
          onClick={() => props.handleConcept("concept", "Dividing Fractions")}
        >
          Dividing Fractions
        </button>
        <button
          type="button"
          className="dropdown"
          onClick={() => props.handleConcept("concept", "Multiplying Fractions")}
        >
          Multiplying Fractions
        </button>
        </Link>
  </div>
  <div>
  <Link to ='/concept-customization'>

    <div
      // className="conceptList"
      onClick={() => props.handleConcept("concept", "Order of Operations")}
      className="dropdown"
    >
      Order of Operations
      <div className="concept-topic">
        {/* <button type = "button" className='conceptList' 
              onClick = {() => props.handleConcept('concept', 'order-ops-whole')}>Order of Operations</button> */}
      </div>
    </div>
    </Link>

  </div>
  <div>
  <Link to ='/concept-customization'>

    <div
      type="button"
      className="conceptList"
      onClick={() => props.handleConcept("concept", "Input Output Tables")}
      className="dropdown"
    >
      {" "}
      Tables
      <div className="concept-topic">
        {/* <button type = "button" className='conceptList' 
              onClick = {() => props.handleConcept('concept', 'table')}>Input Output Tables</button> */}
      </div>
    </div>
    </Link>
  </div>
  <div>
    <div className="dropdown">
      {" "}
      Decimal Basics
      <div className="concept-topic"></div>
    </div>

  </div>

</div>)
}


export default ConceptSelection