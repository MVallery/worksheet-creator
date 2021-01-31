import {Router, Route, Link, Switch } from "react-router-dom";
import Input from './input.js'
import DisplayUserSelection from './display-user-selection'

const FinalSelections = (props) => {
    return (
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
      <div> 
        <DisplayUserSelection 
          displayQuestionList = {props.displayQuestionList} 
          handleSelect = {props.handleSelect} 
          handleDeleteConcept = {props.handleDeleteConcept} 
          userSelection = {props.userSelection} 
          handlePDF = {props.handlePDF}
        /> </div> 
        <Link to ='/custom-assignment'>
            <button
                onClick={props.handleDisplayQuestionList}>
                Create your assignment

            </button>
            
        </Link>
    </div>
    </div>
    )
}

export default FinalSelections