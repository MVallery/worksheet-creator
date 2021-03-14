import DeleteIcon from '@material-ui/icons/Delete';
 const DisplayUserSelection = (props) => {
    
    // const {userSelection} = props.userSelection
    var displayArray = [];
    // const tableGenerator = () => {
      for (var i=0; i<props.userSelection.length;i++) {
        let x=i //handleSelect needs it's own version of x so that index number stays the same
          displayArray.push(
            <tr>
            <td>{props.userSelection[i].concept}-{props.userSelection[i].specify}</td>
            <td>{props.userSelection[i].quantity}</td>
            <td>{props.userSelection[i].level}</td>
            <td><button className='trash-button' onClick={()=>{props.handleDeleteConcept(x)}}><DeleteIcon/></button></td>
          </tr>
          )
      }
      var table = (
        <div>
        <table>
          <tbody>
          <tr>
            <th colspan='4' className='current-selection'>Current Selections</th>
          </tr>
          <tr>
            <th>Concept</th>
            <th>Quantity</th>
            <th>Level</th>
            <th>Delete</th>
          </tr>

        {displayArray}
        </tbody>
        </table>
        </div>)
      return table
  //   }
  //  return
    // if (props.userSelection.length>0) {
    //   return tableGenerator()
    // } else {
    //   return null
    // }
  };

export default DisplayUserSelection