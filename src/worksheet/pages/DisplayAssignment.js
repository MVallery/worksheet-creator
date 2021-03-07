 import {Link} from "react-router-dom";
import { React } from "react";


const DisplayAssignment = (props) => {
    return (
        <div>
            <Link to ='/' className= "infinite-math-small">
                <h1 className= "infinite-math-small"><span className="in-small">IN</span><span className='finite-small'>finite</span> Math</h1>    
            </Link>  
            <div>
            <Link to="/concept-selection">
                 <button className='addQ-button'
                    onClick= {props.handleClearSelections}>
                        Make another assignment
                </button>

            </Link>
            <Link to= '/custom-assignment'>
                  <button onClick={props.handlePDFViewerClick}>Make another version of this assignment</button>
            </Link>
            </div>
      </div>
    )
}

export default DisplayAssignment