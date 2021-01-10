import {defaultProps, PropTypes, React} from 'react'
import Input from './input'

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

                </select>
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
        <Input
            label="Level"
            name="level"
            type="number"
            value={props.inputState.level}
            // onChange={props.handleInputLevel}
            onChange={props.handleInput}

            placeholder=""
            className="input"
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
</div>

    )

}


export default UserInput