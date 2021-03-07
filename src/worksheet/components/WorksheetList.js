import React from "react";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";

import WorksheetItem from "./WorksheetItem";

const WorksheetList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No worksheets found. Try creating one!</h2>
          <Button to="/concept-selection">Make a worksheet</Button>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ul className="place-list">
        {props.items.map((worksheet) => (
          <WorksheetItem
            key={worksheet.id}
            id={worksheet.id}
            title={worksheet.title}
            docStyle={worksheet.docStyle}
            userSelection={worksheet.userSelection}
            creatorId={worksheet.creator}
            onDelete={worksheet.onDeleteWorksheet}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default WorksheetList;