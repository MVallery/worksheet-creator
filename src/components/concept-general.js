import {Router, Route, Link, Switch } from "react-router-dom";

import Input from './input'
const ConceptGeneral = (props) => {
    return(
            <div className= 'concept-general-container'>
                <div className="quantity-addQ">
                    <Input 
                    label={<span className= 'radio-title'>Quantity:</span>}
                    name="quantity"
                    type="number"
                    value={props.inputState.quantity}
                    // onChange={props.handleInputQuantity}
                    onChange={props.handleInput}
                    placeholder=""
                    required
                    className="quantity-input"
                    min="1"
                    max="50"
                    />
                </div>
                <div className= 'addQ-container'>
                    <label htmlFor="submit"></label>
                    <Link to ='/concept-selection' className='addQ-button-link'>
                        <button type="button" className= "addQ-button" id="submit" onClick={()=>props.handleAddConcept()}>
                        Add & <br/>Select More
                        </button>
                    </Link>
                    <Link to ='/final-selections' className='addQ-button-link'>
                        <button type="button" className= "addQ-button" id="submit" onClick={()=>props.handleAddConcept()}>
                        Add &<br/>Create Assignment
                        </button>
                    </Link>
                </div>
            </div>
    )
}

export default ConceptGeneral
