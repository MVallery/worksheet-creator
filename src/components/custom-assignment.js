 import {Link} from "react-router-dom";

const CustomAssignment = (props) => {
    return (
        <div>
            <div>
            <Link to="/concept-selection">
                <button>
                    
                </button>
                <button
                onClick= {props.handleClearSelections}>
                    Make another assignment
                    
                </button>
            </Link>
            </div>
      </div>
    )
}

export default CustomAssignment