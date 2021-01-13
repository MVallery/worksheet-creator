import {defaultProps, PropTypes, React} from 'react'
import Input from './input'
import "../App.css";

const UserInput = (props) => {
    console.log(props.inputState.docTitle)
    return(
        <div>
            <p>
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
            </p>


        {/* <Input
            label="Level"
            name="level"
            type="number"
            value={props.inputState.level}
            // onChange={props.handleInputLevel}
            onChange={props.handleInput}

            placeholder=""
            className="input"
        /> */}
        <div className='customize-qcontainer'>
            Customize your questions:
            <div className='concept-dropdown-container'>
                <label htmlFor="concept-dropdown"></label>
                <select
                    id="concept-dropdown"
                    name="concept"
                    value={props.inputState.concept}
                    onChange={props.handleInput}
                    // onChange={props.handleInputConcept}
                    >
                    <option value="">--Select a concept --</option>
                    <option value="add-whole">Add Whole Numbers Application</option>
                    <option value="sub-whole">Subtract Whole Numbers Application</option>
                    <option value="mult-whole">Multiply Whole Numbers Application</option>
                    <option value="div-whole">Divide Whole Numbers Application</option>
                    <option value="add-dec">Add Decimals Application</option>
                    <option value="sub-dec">Subtracting Decimals Application</option>
                    <option value="add-dec-alg">Add Decimals Algorithm</option>
                    <option value="sub-dec-alg">Subtracting Decimals Algorithm</option>
                    <option value="div-dec-alg">Dividing Decimals Algorithm</option>
                    <option value="mult-dec-alg">Multiplying Decimals Algorithm</option>
                    <option value="order-ops-whole">Order of Operations Whole Numbers</option>
                    <option value="order-ops-dec">Order of Operations Decimals</option>
                    <option value="order-ops-neg">Order of Operations Integers</option>
                    <option value="table">Input Output Tables</option>
                    <option value="add-fract">Add Fractions</option>

                </select>



        <div className='radio-button-container'>
            <div className= 'radio-button'>
        Number Type:<br/>
        <input type="radio" id="whole" name="specify" onChange= {props.handleInput} value='whole'/>
        <label for="male">Whole</label><br/>
        <input type="radio" id="decimal" name="specify" onChange= {props.handleInput} value='decimal'/>
        <label for="female">Decimal</label><br/>
        <input type="radio" id="fraction" name="specify" onChange= {props.handleInput} value='fraction'/>
        <label for="other">Fraction</label>
        </div>
        <div className= 'radio-button'>
        Problem Level:<br/>
        <input type="radio" id="1" name="level" onChange= {props.handleInput} value={1}/>
        <label for="1">1</label><br/>
        <input type="radio" id="2" name="level" onChange= {props.handleInput} value={2}/>
        <label for="2">2</label><br/>
        <input type="radio" id="3" name="level" onChange= {props.handleInput} value={3}/>
        <label for="3">3</label>
        </div>
        </div>


        {console.log(props.inputState.level)}
        <div className="quantity-addQ">
            <div>
                <Input
                    label="Quantity:"
                    name="quantity"
                    type="number"
                    value={props.inputState.quantity}
                    // onChange={props.handleInputQuantity}
                    onChange={props.handleInput}

                    placeholder= ""
                    required
                    className="input"
                    min="1"
                    max="50"
                />
            </div>
            <div>
                <label htmlFor="submit"></label>
                    <button type="button" id="submit" onClick={props.handleAddConcept}>
                        Add Questions
                    </button>
            </div>
        </div>
    </div>
    </div>




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
</div>

    )

}


export default UserInput