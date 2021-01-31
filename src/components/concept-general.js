import {Router, Route, Link, Switch } from "react-router-dom";

import Input from './input'
const ConceptGeneral = (props) => {
    return(
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
                    <Link to ='/concept-selection'>
                        <button type="button" className= "addQ-button" id="submit" onClick={()=>props.handleAddConcept()}>
                        + Questions and Select more
                        </button>
                    </Link>
                    <Link to ='/final-selections'>
                        <button type="button" className= "addQ-button" id="submit" onClick={()=>props.handleAddConcept()}>
                        + Questions and finalize assignment
                        </button>
                    </Link>
                </div>
            </div>
    )
}

export default ConceptGeneral
