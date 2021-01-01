import {defaultProps, PropTypes, React} from 'react'
import Input from './input'

const UserInput = (props) => {
    return(
        <div>
        <Input
            label="Quantity:"
            name="quantity"
            type="number"
            value={props.quantityState}
            onChange={props.handleInputQuantity}
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
            value={props.levelState}
            onChange={props.handleInputLevel}
            placeholder=""
            className="input"
        />
        <Input
            label="Order:"
            name="order"
            type="checkbox"
            value={props.order}
            onChange={props.handleOrder}
            className="input"
        />
        <Input
            label="Columns:"
            name="docStyle"
            type="checkbox"
            value={props.docStyle}
            onChange={props.handleDocStyle}
            className="input"
        />
</div>

    )

}


export default UserInput