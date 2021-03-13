import { Link } from "react-router-dom";
import { React } from "react";

import Input from '../components/input.js'
import DisplayUserSelection from '../components/DisplayUserSelection'

const FinalSelections = (props) => {
    return (
        <div className="final-customization container">
            <Link to ='/' className= "infinite-math-small">
                <h1 className= "infinite-math-small"><span className="in-small">IN</span><span className='finite-small'>finite</span> Math</h1>    
            </Link>  
        <label className='final-title' htmlFor="level">Document Title:</label>
        <input
          type="text"
          className='doc-title-input'
          id="docTitle"
          value={props.generalSelection.docTitle}
          // onChange={props.handleInputTitle}
          onChange={props.handleInput}
          name="docTitle"
        />

        <Input
          label="Mix up questions:"
          name="order"
          type="checkbox"
          value={props.generalSelection.order}
          // onChange={props.handleOrder}
          onChange={props.handleInput}
          className="input final-title"
        />
        <Input
          label="Columns:"
          name="docStyle"
          type="checkbox"
          value={props.generalSelection.docStyle}
          // onChange={props.handleDocStyle}
          onChange={props.handleInput}
          className="input final-title"
        />
        
    <div>
      

        <Link to ='/display-assignment' className='general-button-link'>
            <button
              type='submit'
              className='general-button'
              onClick={props.handlePDFViewerTrigger}>
              Create your assignment

            </button>
            
        </Link>
    </div>
    </div>
    )
}

export default FinalSelections