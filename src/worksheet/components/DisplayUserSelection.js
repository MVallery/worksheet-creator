import DeleteIcon from '@material-ui/icons/Delete';
import './DisplayUserSelection.css'
import { Link, useLocation } from "react-router-dom";
import './ConceptGeneral.css'

 const DisplayUserSelection = (props) => {
    let location = useLocation()
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
        <div className="display-user-selection-container">
          <div>
        <table>
          <tbody>
          <tr className='current-selection'>
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
        </div>
        <div className='create-assign-button-container'>
          {location.pathname ==='/concept-selection'? 
            <Link to ='/final-selections' className='create-assign-button'>
                  {/* <button type="button" className= "general-button" id="submit"> */}
                  Ready to Create Assignment
                  {/* </button> */}
            </Link>
          
          :null}
        </div>
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