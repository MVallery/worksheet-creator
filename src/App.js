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
  // const [questionList, setQuestionList] = useState([])
  const [displayQuestionList, setDisplayQuestionList] = useState(false)
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
    var displayArray = []

    for (var i=0; i<userSelection.length;i++) {
      displayArray.push(
        <div><p>{userSelection[i].concept + " " + userSelection[i].quantity + " " + userSelection[i].level}</p></div>
      )
      // <div><p>{userConcept + ': Number of Questions: ' + userQuantity + '     Question Level: '  + userLevel}</p></div>
    }
      
    return displayArray
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
  const handleDisplayQuestionList = (e) => {
    setDisplayQuestionList(true)
  }
  const handleCreateWorksheet = (e) => {
    var questionList = []//should this be a state?
    var answerKey = []
    for (var i=0; i<userSelection.length; i++) {
      var n = 0
      if (userSelection[i].concept === "add-whole"){
        for (var x=0; x<userSelection[i].quantity; x++){
          n+=1;
          var question = addsub.addWhole(userSelection[i].level)
          questionList.push(<div><p>{n + ") " + question.questionText}</p></div>)
          questionList.push(<div><p>{question.answerChoices[0]}</p></div>)
          questionList.push(<div><p>{question.answerChoices[1]}</p></div>)
          questionList.push(<div><p>{question.answerChoices[2]}</p></div>)
          questionList.push(<div><p>{question.answerChoices[3]}</p></div>)
          answerKey.push(<div><p>{n + ") " + question.answerChoices[4]}</p></div>)
        }

      } else if (userSelection[i].concept === "order-ops"){
        for (var x=0; x<userSelection[i].quantity; x++){
          var question = o.orderOps(userSelection[i].level)
          questionList.push(<div><p>{n + ") " + question.questionText}</p></div>)
          questionList.push(<div><p>{question.answerChoices[0]}</p></div>)
          questionList.push(<div><p>{question.answerChoices[1]}</p></div>)
          questionList.push(<div><p>{question.answerChoices[2]}</p></div>)
          questionList.push(<div><p>{question.answerChoices[3]}</p></div>)
        }

      } else {
        console.log("concept not triggering if")
      }
    }
    console.log(questionList)

    return [questionList, answerKey]
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
      {/* {handleCreateWorksheet()} */}
      <div id = "display-user-selection">

      </div>
    </div>
    <button type="button"  onClick={handleDisplayQuestionList}>Create Worksheet</button>
    {displayQuestionList ? handleCreateWorksheet()[0]: null}


    {displayQuestionList ? handleCreateWorksheet()[1]: null}
    </div>



  );
}

export default App;
