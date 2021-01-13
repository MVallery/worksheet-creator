import {defaultProps, PropTypes, React} from 'react'

const userSelection = (props) => {
    <div>
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
    </div>

}
