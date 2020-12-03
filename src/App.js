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
    for (var i=0; i<userSelection.length;i++) {
      <div>
        <p>{userSelection[i].concept} {userSelection[i].quantity} {userSelection[i].level}</p>
      </div>
      
    }
  }
  const handleInputLevel = (e) => {
    e.preventDefault();
    setLevelState(e.target.value);

  }
  const handleInputQuantity = (e) => {
    e.preventDefault();
    setQuantityState(e.target.value);
  }
  const handleAddConcept = () => {
    var tempList = JSON.parse(JSON.stringify(questionList));
    var conceptSelection = {
      concept: conceptState,
      level: levelState,
      quantity: quantityState,
    }
    var newList = tempList.push(conceptSelection)
    setQuestionList(newList)
  }




  return (
    <div className="main">
      <h1 className= "title-banner">Math Worksheet Creator</h1>
      <p>Create your own math worksheet by selecting your choice of concepts, 
        and then determine how many questions you would like for that concept. 
        You can also adjust the difficulty of the questions as needed.</p>
      <form action="">
        <label for= "concept-dropdown">Select your concept</label>
        <select id= "concept-dropdown" name="concept" value={conceptState}>
          <option value="">--Please select a concept --</option>
          <option value="add-whole">Adding Whole Numbers</option>
          <option value="sub-whole">Subtracting Whole Numbers</option>
          <option value="add-dec">Adding Decimals</option>
          <option value="sub-dec">Subtracting Decimals</option>
          <option value="order-ops-whole">Order of Operations Whole Numbers</option>
          <option value="order-ops-dec">Order of Operations Decimals</option>
        </select>
        <input type="number" id="quantity" onChange={handleInputQuantity} value={quantityState} name="quantity" min="1" max="50">

        </input>
        <label for="level">Level of difficulty:</label>
        <input type="number" id="level" onChange={handleInputLevel} name="level" min="1" max="3"></input>
        <input type="submit" value={levelState} onSubmit={handleAddConcept}></input>
      </form>

    <div>
      <p>Concepts Added:</p>
      {displayUserSelection}
    </div>




    </div>



  );
}

export default App;
