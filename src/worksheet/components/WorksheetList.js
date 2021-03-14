import React from "react";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {cap} from '../../worksheet/problems/general'
import WorksheetItem from "./WorksheetItem";
import './WorksheetList.css'

const WorksheetList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="worksheet-list center">
        <Card>
          <h2>No worksheets found. Try creating one!</h2>
          <Button to="/concept-selection">Make a worksheet</Button>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ul className="worksheet-list">
        {props.items.map((worksheet) => (
          <WorksheetItem
            key={worksheet.id}
            id={worksheet.id}
            title={cap(worksheet.title)}
            docStyle={worksheet.docStyle}
            userSelection={worksheet.userSelection}
            questAnswerList={worksheet.questAnswerList}
            createdAt= {worksheet.createdAt}
            creatorId={worksheet.creator}
            onDelete={worksheet.onDeleteWorksheet}
            handleDuplicate={props.handleDuplicate}
            
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default WorksheetList;