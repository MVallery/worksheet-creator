 import {Link} from "react-router-dom";
import { React, useEffect, useRef, useContext } from "react";
import {AuthContext} from '../../shared/context/auth-context'
import {useHttpClient} from '../../shared/hooks/http-hook'
import './DisplayAssignment.css'
import './CustomizeGeneral.css'



const DisplayAssignment = (props) => {
    const auth = useContext(AuthContext);
    const initialRender = useRef(true);
    console.log(initialRender)
    const {isLoading, error, sendRequest, clearError} = useHttpClient();
    useEffect(()=> {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            props.handlePDFViewerTrigger('copy')
            console.log(props.createdWorksheetState)
        }

    }, [props.createdWorksheetState])
    useEffect(()=> {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            props.handlePDFViewerTrigger('new')

        }
    }, [props.userSelection])
    return (
        <div className="main-container">
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