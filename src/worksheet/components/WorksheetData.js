const React = require("react");
// const {DeleteIcon} = require("@material-ui/icons/Delete");

const WorksheetData = (props) => {
  var displayArray = [];

  for (var i = 0; i < props.userSelection.length; i++) {
    displayArray.push(
      <tr>
        <td>{props.userSelection[i].concept}</td>
        <td>{props.userSelection[i].quantity}</td>
        <td>empty
          {/* <button className="trash-button">
            <DeleteIcon />
          </button> */}
        </td>
      </tr>
    );
  }
  var table = (
    <React.Fragment>
    <div>
      <table>
        <tbody>
          <tr>
            <th colspan="4" className="current-selection">
              {props.title}
            </th>
          </tr>
          <tr>
            <th>Concept</th>
            <th>Quantity</th>
            <th>Delete</th>
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