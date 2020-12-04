import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import * as addsub from './app-files/add-sub'
import * as o from './app-files/order-of-ops'

function App() {
  useEffect(() => {
    o.orderOps({specify:"decimal", level:"2" })

    addsub.addWhole({specify:"whole", specify2:"add", level:"2" })
  }, []);
  const [userSelection, setUserSelection] =useState([])
  const [questionList, setQuestionList] = useState([])
  const [quantityState, setQuantityState] = useState("")
  const [levelState, setLevelState] = useState("")
  const [conceptState, setConceptState] = useState("")
  
  const displayUserSelection = () => {
    // for (var i=0; i<userSelection.length;i++) {
    //   for (var item in userSelection[i]) {
    //     document.getElementById("display-user-selection").innerHTML += 
  
    //     <div><p>{JSON.parse(JSON.stringify(userSelection[item]))}</p></div>
    //     console.log(JSON.stringify(userSelection[item]))
    //   }
    // }

    for (var i=0; i<userSelection.length;i++) {
      var userQuantity = userSelection[i].quantity 
      // console.log("QUANTITY: ", userSelection[i].quantity)
      var userLevel = userSelection[i].level
      var userConcept = userSelection[i].concept
      document.getElementById("display-user-selection").innerHTML = 
      // <div><p>{JSON.stringify(userSelection[i].concept) + JSON.stringify(userSelection[i].quantity) + JSON.stringify(userSelection[i].level)}</p></div>
      <div><p>{userConcept + ': Number of Questions: ' + userQuantity + '     Question Level: '  + userLevel}</p></div>

      
    }
  }
  const handleInputLevel = (e) => {
    e.preventDefault();
    setLevelState(e.target.value);
    console.log("this is level: "+ levelState)

  }
  const handleInputQuantity = (e) => {
    e.preventDefault();
    setQuantityState(e.target.value);
    console.log("this is quantity: " + quantityState)
  }
  const handleInputConcept = (e) => {
    e.preventDefault();
    setConceptState(e.target.value);
    console.log("this is concept: "+ conceptState)
  }
  const handleAddConcept = (e) => {
    e.preventDefault();
    var tempList = JSON.parse(JSON.stringify(userSelection));
    var conceptSelect = conceptState
    var quantitySelect = quantityState
    var levelSelect = levelState
    var conceptSelection = {
      concept: conceptSelect,
      level: levelSelect,
      quantity: quantitySelect,
    }
    // var  newList= []
    tempList.push(conceptSelection);
    setUserSelection(tempList)
    console.log(userSelection)
    console.log("This is concept state" + conceptState)
  }




  return (
    <div className="main">
      <h1 className= "title-banner">Math Worksheet Creator</h1>
      <p>Create your own math worksheet by selecting your choice of concepts, 
        and then determine how many questions you would like for that concept. 
        You can also adjust the difficulty of the questions as needed.</p>
      <form action={handleAddConcept}>
        <label htmlFor= "concept-dropdown">Select your concept</label>
        <select id= "concept-dropdown" name="concept" value={conceptState} onChange= {handleInputConcept}>
          <option value="">--Please select a concept --</option>
          <option value="add-whole">Adding Whole Numbers</option>
          <option value="sub-whole">Subtracting Whole Numbers</option>
          <option value="add-dec">Adding Decimals</option>
          <option value="sub-dec">Subtracting Decimals</option>
          <option value="order-ops-whole">Order of Operations Whole Numbers</option>
          <option value="order-ops-dec">Order of Operations Decimals</option>
        </select>
        <label for="quantity">Quantity:</label>

        <input 
              type="number" 
              id="quantity" 
              onChange={handleInputQuantity} 
              value={quantityState} 
              name="quantity" 
              min="1" max="50"
              />

        
        <label htmlFor="level">Level of difficulty:</label>
        <input type="number" id="level" value={levelState} onChange={handleInputLevel} name="level" min="1" max="3"/>
        <label htmlFor="submit">Add Question</label>

        <button type="button"id ="submit"  onClick={handleAddConcept}>Add Question</button>
      </form>

    <div>
      <p>Concepts Added:</p>
      {displayUserSelection()}
      <div id = "display-user-selection">

      </div>
    </div>




    </div>



  );
}

export default App;
