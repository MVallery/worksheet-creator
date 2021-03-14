 import {Link} from "react-router-dom";
import { React, useEffect, useContext } from "react";
import {AuthContext} from '../../shared/context/auth-context'
import {useHttpClient} from '../../shared/hooks/http-hook'



const DisplayAssignment = (props) => {
    const auth = useContext(AuthContext);
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    useEffect(()=> {
        props.handlePDFViewerTrigger()
    }, [props.userSelection])
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
            <Link to= '/display-assignment'>
                  <button onClick={props.handlePDFViewerTrigger}>Make another version of this assignment</button>
            </Link>


            </div>
      </div>
    )
}

export default DisplayAssignment