 import {Link} from "react-router-dom";
import { React, useEffect, useRef } from "react";

import './DisplayAssignment.css'
import './CustomizeGeneral.css'



const DisplayAssignment = (props) => {
    const initialRender = useRef(true);
    useEffect(()=> {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            props.handlePDFViewerTrigger('copy')
        }

    }, [props.createdWorksheetState])

    return (
        <div className="display-assignment-container"> 
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