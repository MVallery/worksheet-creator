import React, { useState, useContext } from "react";

import './WorksheetData.css';
import { AuthContext } from "../../shared/context/auth-context";

import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const WorksheetData = (props) => {
  const auth = useContext(AuthContext);
  const [dropdownDisplay, setDropdownDisplay] = React.useState(null);
  
  const handleClick = (e) => {
    setDropdownDisplay(e.currentTarget);
  };

  const handleClose = () => {
    setDropdownDisplay(null);
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
      <tr>
        <td>{props.userSelection[i].concept}</td>
        <td>
          {specify}
          working on it, this could be a long list, with a few things, in it.
        </td>
        <td>{props.userSelection[i].quantity}</td>

      </tr>
    );
  }
  let questTotal = props.userSelection.map(concept => concept.quantity)
   .reduce((a,b) => {return Number(a) + Number(b);});
  console.log(props.createdAt)

  var table = (
    <React.Fragment>
    <div className= "worksheet-data__table-container">
      <table className="worksheet-data__table">
        <tbody>
          <tr>
            <th colspan="4" className="worksheet-data__th">
              {props.title}     <span className="worksheet-data__totalQ">Total Questions: {questTotal}      Created: {props.createdAt} </span>
          <button onClick={handleClick} className="worksheet-data__dropdown">
            <MoreVertIcon />
          </button>
          {auth.userId === props.creatorId && (
            <Menu
              id="simple-menu"
              anchorEl={dropdownDisplay}
              keepMounted
              open={Boolean(dropdownDisplay)}
              onClose={handleClose}
              getContentAnchorEl={null}
            >
              <MenuItem onClick={handleClose}>Edit</MenuItem>
              <MenuItem onClick={handleClose}>Duplicate</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>

            </Menu>
            )}

            </th>
          </tr>
          <tr >
            <th className="worksheet-data__th2">Concept</th>
            <th className="worksheet-data__th2">Specify</th>
            <th className="worksheet-data__th2">Quantity</th>
          </tr>

          {displayArray}
        </tbody>
      </table>
    </div>
    </React.Fragment>
  );
  console.log(table);
  return table;
};

export default WorksheetData;