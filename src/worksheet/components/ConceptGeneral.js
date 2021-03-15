import {Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import './ConceptGeneral.css'

const ConceptGeneral = (props) => {
    return(
            <div className= 'concept-general-container'>
                <div className="quantity-addQ">
                    <TextField 
                    variant='filled'
                    id = 'filled-basic'
                    label={<span className= ''>Quantity</span>}
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
                    <Link to ='/concept-selection' className='general-button-link'>
                        <button type="button" className= "general-button" id="submit" onClick={()=>props.handleAddConcept()}>
                        Add & <br/>Select More
                        </button>
                    </Link>
                    <Link to ='/final-selections' className='general-button-link'>
                        <button type="button" className= "general-button" id="submit" onClick={()=>props.handleAddConcept()}>
                        Add &<br/>Create Assignment
                        </button>
                    </Link>
                </div>
            </div>
    )
}

export default ConceptGeneral