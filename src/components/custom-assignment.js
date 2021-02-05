 import {Link} from "react-router-dom";

const CustomAssignment = (props) => {
    return (
        <div>
            <Link to ='/' className= "infinite-math">
                <h1><span className="in">IN</span><span className='finite'>finite</span> Math</h1>    
            </Link>  
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