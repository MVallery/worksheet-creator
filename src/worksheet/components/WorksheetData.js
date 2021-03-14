import React, { useState, useContext } from "react";
import {Link} from "react-router-dom"
import {CSSTransition} from 'react-transition-group'

import './WorksheetData.css';
import { AuthContext } from "../../shared/context/auth-context";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const WorksheetData = (props) => {
  const auth = useContext(AuthContext);
  const [dropdownDisplay, setDropdownDisplay] = React.useState(null);
  const [expandWorksheetData, setExpandWorksheetData] = React.useState(false);

  const handleClick = (e) => {
    setDropdownDisplay(e.currentTarget);
  };

  const handleEdit = () => {
    setDropdownDisplay(null);
  }
  const handleDelete = () => {
    setDropdownDisplay(null);
  }
  const handleClose = () => {
    setDropdownDisplay(null);
  }

  const handleExpandWorksheetData = () => {
    setExpandWorksheetData(!expandWorksheetData)
  }
  if (props.userSelection.length===0) {
    return null
  }
  var displayArray = [];
  let specify = [];
  for (var i = 0; i < props.userSelection.length; i++) {
    for (let k in props.userSelection[i]){
      if (props.userSelection[k] === true) {
        specify.push(props.userSelection[k])
      }
    }
    displayArray.push(
      <div className="ws-data__concept-container">
        <p className="ws-data__concept">{props.userSelection[i].concept}</p>
        <p className="ws-data__specify">{specify} working on it, this could be a long list, with a few things, in it. </p>
        <p className="ws-data__quantity">{props.userSelection[i].quantity}</p>
      </div>


          
    );
  }
  let questTotal = props.userSelection.map(concept => concept.quantity)
   .reduce((a,b) => {return Number(a) + Number(b);});

  var table = (
    <React.Fragment>
    <div className= "ws-data__container">
      <div className= "ws-data__title-container">
        <h3 className="ws-data__title">{props.title}<p></p></h3>
        <p className="ws-data__totalQ">Total Questions: {questTotal} </p>
        <p className= "ws-data__totalQ">Created: {props.createdAt}</p>
        <button onClick={handleClick} className="ws-data__dropdown">
            <MoreVertIcon />
        </button>
        {auth.userId === props.creatorId && (
          <React.Fragment>
            <Menu
              id="simple-menu"
              key={props.key}
              anchorEl={dropdownDisplay}
              keepMounted
              open={Boolean(dropdownDisplay)}
              onClose={handleClose}
              getContentAnchorEl={null}
            >
              <MenuItem onClick={handleEdit}>Edit</MenuItem>
              <MenuItem onClick={()=>{props.handleDuplicate('copy',props.userSelection, props.title, props.questAnswerList)}}>Download again</MenuItem>
              <MenuItem onClick={()=>{props.handleDuplicate('new',props.userSelection, props.title, props.questAnswerList)}}>New Version</MenuItem>
              
              <MenuItem onClick={handleDelete}>Delete</MenuItem>

            </Menu>
            </React.Fragment>
            )}
      
      </div>





      <CSSTransition 
      in={expandWorksheetData} 
      timeout={200} 
      classNames="slide-down" 
      mountOnEnter
      unmountOnExit
    >
      <div>
    <div className="ws-data__sub-title-container">
                <p className="ws-data__concept">Concept</p>
                <p className="ws-data__specify">Specify</p>
                <p className="ws-data__quantity">Quantity</p>
          </div>
          <div className="ws-data__content-container">
            {displayArray}
          </div>



      {/* <aside onClick={handleExpandWorksheetData}>
          
      </aside> */}
      </div>
    </CSSTransition>

    <button className="ws-data__expandWorksheetData" onClick={handleExpandWorksheetData}>{expandWorksheetData?<ExpandLessIcon/>:<ExpandMoreIcon/>}</button>
    </div>
    </React.Fragment>
  );
  return table;
};

export default WorksheetData;