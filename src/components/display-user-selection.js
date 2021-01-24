

 const DisplayUserSelection = (props) => {
    
    // const {userSelection} = props.userSelection
    var displayArray = [];
    const tableGenerator = () => {
      for (var i=0; i<props.userSelection.length;i++) {
        let x=i //handleSelect needs it's own version of x so that index number stays the same
          displayArray.push(
            <tr>
            <td>{props.userSelection[i].concept}-{props.userSelection[i].specify}</td>
            <td>{props.userSelection[i].quantity}</td>
            {/* <td>{props.userSelection[i].specify}</td> */}
            <td>{props.userSelection[i].level}</td>
            <td><input 
                  type="checkbox"  
                  onChange={()=> props.handleSelect(x)}
                //   checked={userSelection[i].isChecked} 
                //   value={userSelection[i].isChecked}
                  /></td>
            {/* checked={userSelection[i].isChecked} onChange={()=> {handleSelect(i)}} */}
          </tr>
          )
      }
      var table = (
        <div>
        <p>Concepts included:</p>
        <table>
          <tbody>
          <tr>
            <th>Concept</th>
            <th>Quantity</th>
            <th>Level</th>
            <th><button onClick={props.handleDeleteConcept}>Delete</button></th>
          </tr>

        {displayArray}
        </tbody>
        </table>
        </div>)
      return table
    }
   
    if (props.displayQuestionList === false) {
      console.log(tableGenerator)
      return tableGenerator()
    } else {
      return null
    }
  };

export default DisplayUserSelection