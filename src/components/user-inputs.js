import { defaultProps, PropTypes, React } from "react";
import Input from "./input";
import "../App.css";
import ConceptCustomization from "./concept-customization";
import DisplayUserSelection from './display-user-selection'

const UserInput = (props) => {
  return (
    <div className="main-customize-container">
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
        </div>
        <div>
          <div className="concept-topic">
            Decimal Operations
            <div className="dropdown-content">
            </div>
          </div>
        </div>
        <div className= "buttonGroup">
        <button
                type="button"
                className="dropdown"
                onClick={() => props.handleConcept("concept", "Dividing Decimals Algorithm")}
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
        </div>
        <div>
          <div className="concept-topic">
            Fraction Operations

          </div>
          
        </div>
        <div className="buttonGroup">
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
        </div>
        <div>
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
        </div>
        <div>
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
        </div>
        <div>
          <div className="dropdown">
            {" "}
            Decimal Basics
            <div className="concept-topic"></div>
          </div>
        </div>
      </div>
      <div className="customize-qcontainer">
        {props.inputState.length < 2 ? (
          <div>
            <h1>
              Select a concept to the left and then you will be able to
              customize it to fit the needs of your students.
            </h1>
          </div>
        ) : (
          <div>
            <p className="customize-title">Customize your questions:</p>
            <ConceptCustomization
              options={props.inputState}
              handleInput={props.handleInput}
            ></ConceptCustomization>
          </div>
        )}
        <div className="quantity-addQ">
          <div>
            <Input
              label="Quantity:"
              name="quantity"
              type="number"
              value={props.inputState.quantity}
              // onChange={props.handleInputQuantity}
              onChange={props.handleInput}
              placeholder=""
              required
              className="input"
              min="1"
              max="50"
            />
          </div>
          <div>
            <label htmlFor="submit"></label>
            <button type="button" className= "addQ-button" id="submit" onClick={props.handleAddConcept}>
              + Questions
            </button>
          </div>
        </div>

      </div>



      <div className="input-final-container">




            <p className="customize-title">Finishing Touches</p>
      <div className="final-customization container">
          <label htmlFor="level">Document Title:</label>
          <input
            type="text"
            id="docTitle"
            value={props.inputState.docTitle}
            value={props.inputState.docTitle}
            // onChange={props.handleInputTitle}
            onChange={props.handleInput}
            name="docTitle"
          />

          <Input
            label="Mix up questions:"
            name="order"
            type="checkbox"
            value={props.inputState.order}
            // onChange={props.handleOrder}
            onChange={props.handleInput}
            className="input"
          />
          <Input
            label="Columns:"
            name="docStyle"
            type="checkbox"
            value={props.inputState.docStyle}
            // onChange={props.handleDocStyle}
            onChange={props.handleInput}
            className="input"
          />
          
      <div>
        {props.userSelection.length>0 ?
        <div> 
          <DisplayUserSelection 
            displayQuestionList = {props.displayQuestionList} 
            handleSelect = {props.handleSelect} 
            handleDeleteConcept = {props.handleDeleteConcept} 
            userSelection = {props.userSelection} 
            handlePDF = {props.handlePDF}
          /> </div>: <div><p>hi</p></div> }
      </div>
        <button type="button" onClick={props.handleDisplayQuestionList}>
          Create Worksheet
        </button> 
        </div>
      </div>
    </div>
  );
};

export default UserInput;
