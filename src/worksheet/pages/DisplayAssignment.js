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
        <div className="main-container display-assignment-container"> 
            
            <Link className="general-button-link" to="/concept-selection">
                 <button className='general-button'
                    onClick= {props.handleClearSelections}>
                        Make another assignment
                </button>

            </Link>
            <Link className="general-button-link" to= '/display-assignment'>
                  <button className='general-button' onClick={props.handlePDFViewerTrigger}>Make another version of this assignment</button>
            </Link>


            
      </div>
    )
}

export default DisplayAssignment