import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConceptGeneral from "../components/ConceptGeneral";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import Checkbox from '@material-ui/core/Checkbox';
import BackArrow from '../../app-files/images/previous-button.svg'
import uuid from 'react-uuid'
import Input from '../../shared/components/FormElements/Input'
import DisplayUserSelection from '../components/DisplayUserSelection'
import './ConceptCustomization.css'
import './CustomizeGeneral.css'
import {
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";


const ConceptCustomization = (props) => {
  const [errorState, setErrorState] = useState(true)

  const conceptSpecify = (props, name, specifyTitle, specifyArray) => {
    let error= true

    const specifyFor = (props, name, arr) => {

      var newArray = [];
      let arrayList = []
      for (var i = 0; i < arr.length; i++) {
        newArray.push(
          <div>
            <FormControlLabel key={uuid()} control= {
              // <Input element='checkbox' name={name} value={arr[i]} checked={!!props.inputState[arr[i]]} onChange={props.handleInput} color='primary'validators={[VALIDATOR_REQUIRE()]}
              // errorText="Please enter a valid email."/>
            <Checkbox name={name} value={arr[i]} checked={!!props.inputState[arr[i]]} onChange={props.handleInput}color='primary'/>
            } label={<span className="checkbox">{arr[i]}</span>} /> <br />
            {/* value={arr[i]} */}
          </div>
        );
      }
      for(var item in arr) {
        if (props.inputState[arr[item]]===true) {
          error = false
          // setErrorState(false)
          console.log(error)
        }
      }
      return newArray;
    };



    console.log(props.inputState)
    console.log(error)
    // console.log(errorState)
    return (
      <div className='radio-title-button-container'>
        <span className='radio-title'>{specifyTitle}:</span><br />
          <div className="radio-button">
          <FormControl required error={error} component="fieldset">
            <FormGroup >
             {/* aria-label={name} name={name} valueSelected={props.value} onChange={props.handleInput} */}
            {/* <FormLabel component="legend" className='radio-title'>{specifyTitle}</FormLabel> */}
              {specifyFor(props, name, specifyArray)}
            </FormGroup>
            {error ? <FormHelperText>Please select at least one</FormHelperText>:null}
            
          {/* //   :null
          // } */}
        </FormControl>
          </div>
      </div>
    );
  };
  
  const conceptProbStyle = (props, name, probTitle, probStyleArray) => {
    return (
      <div className='radio-title-button-container'>
        <span className='radio-title'>{probTitle}:</span><br />
        <FormControl component="fieldset">
          <RadioGroup  aria-label={name} name= {name} value={props.value} onChange={props.handleInput}>
          {/* <FormLabel component="legend">{levelTitle}</FormLabel> */}
              <FormControlLabel key={uuid()} color= 'secondary' value='Vertical'  control= {<Radio color='primary'/>} label={probStyleArray[0]} />
              <FormControlLabel key={uuid()} value='Horizontal' control= {<Radio color='primary'/>} label= {probStyleArray[1]}  />
            </RadioGroup>
        </FormControl> 
      </div>
    );
  };
  const conceptLevel = (props, levelTitle, levelArray) => {
    return (
      <div className='radio-title-button-container'>
        <span className='radio-title'>{levelTitle}:</span><br />
        <FormControl component="fieldset">
          <RadioGroup  aria-label="level" name="level" valueSelected={props.value} onChange={props.handleInput}>
          {/* <FormLabel component="legend">{levelTitle}</FormLabel> */}
              <FormControlLabel key={uuid()} color= 'secondary' value='1'  control= {<Radio color='primary'/>} label={'1: '+levelArray[0]} />
              <FormControlLabel key={uuid()} value='2' control= {<Radio color='primary'/>} label={'2: '+levelArray[1]}  />
              <FormControlLabel key={uuid()} value='3' control= {<Radio color='primary'/>} label={'3: '+levelArray[2]}  />
            </RadioGroup>
        </FormControl> 
      </div>
    );
  };
  
  const customizeContainer = (props, title, func1, func2, func3, func4, func5) =>{
      return (
          <div className="main-container concept-customization-container">
  
          <div className='concept-back-arrow'>
              <Link to='/concept-selection'>
              <button onClick= {props.handleClearInput}>
                <img className="back-arrow" src={BackArrow} alt="back"></img>
              </button>
              </Link>
              <p className='concept-title'>{title}</p>
          </div>
          <div className='radio-button-container'>
              {func1}
              {func2}
              {func3}
              {func4}
              {func5}
          </div>
          <ConceptGeneral
            inputState={props.inputState}
            handleInput={props.handleInput}
            handleAddConcept={props.handleAddConcept}
            // errorState = {errorState}
          />
          <div className="user-selection">
            {props.userSelection.length > 0 ? (
              <DisplayUserSelection
                handleDeleteConcept={props.handleDeleteConcept}
                userSelection={props.userSelection}
              />
            ) : null}</div>
          </div>
      )
  }
  // useEffect(()=> {
  //   setErrorState(error)
  // }, [error])

  if (props.inputState['Algorithm']){
    var algorithm = conceptProbStyle(props, "probStyle", "Algorithm Style", [
      "Vertical","Horizontal", ])        
  } if (props.inputState['Application']){
    var application = conceptSpecify(props, "specify", "Application Level", [
      "1: One step", "2: Multi-step", ])   
  }
  if (props.inputState.concept === "Adding Whole Numbers") {    
    return (
        customizeContainer(props,'Adding Whole Numbers', 
            conceptSpecify(props, "specify", "Include", [
                "1 digit numbers", "2 digit numbers", "3 digit numbers",
                "4 digit numbers", "5 digit numbers", "6 digit numbers", 
                '7 digit numbers']),
            conceptSpecify(props, "specify", "Problem Type", [
              "Algorithm","Application", ]),   
            <div className='dynamic-customize-container'>
              {algorithm} {application}    
            </div>
                  )
    );
  } else if (props.inputState.concept === "Subtracting Whole Numbers") {
    return (
        customizeContainer(props,'Subtracting Whole Numbers',
            conceptSpecify(props, "specify", "Include numbers", [
              "1 digit numbers", "2 digit numbers","3 digit numbers",
              "4 digit numbers", "5 digit numbers","6 digit numbers", 
              '7 digit numbers',]),
            conceptSpecify(props, "specify", "Problem Type", [
              "Algorithm","Application", ]),
            <div className='dynamic-customize-container'>
              {algorithm} {application}    
            </div>
        )
    );
  } else if (props.inputState.concept === "Multiplying Whole Numbers") {
    return (
          customizeContainer(props, 'Multiplying Whole Numbers',
            conceptSpecify(props, "specify", "Include", [
                "1 by 1 digit","2 by 1 digit","3 by 1 digit", "4 by 1 digit",
                "2 by 2 digit","3 by 2 digit",]),
            conceptSpecify(props, "specify", "Problem Type", [
              "Algorithm","Application", ]),
            <div className='dynamic-customize-container'>
              {algorithm} {application}    
            </div>

                )
    );
  } else if (props.inputState.concept === "Dividing Whole Numbers") {
    return (
        customizeContainer(props,"Dividing Whole Numbers", 
            conceptSpecify(props, "specify", "Include", [
                "2 by 1 digit","3 by 1 digit","4 by 1 digit","3 by 2 digit",
                "4 by 2 digit", ]),
            conceptSpecify(props, "specify", "Problem Type", [
              "Algorithm","Application", ]),
            <div className='dynamic-customize-container'>
              {algorithm} {application}    
            </div>    

                )
    );
  } else if (props.inputState.concept === "Dividing Decimals") {
    return (
        customizeContainer(props, "Dividing Decimals",
            conceptSpecify(props, "specify", "Dividend", [
                "2 digit dividend", "3 digit dividend","4 digit dividend",]),
            conceptSpecify(props, "specify", "Divisor", [
              "1 digit whole number divisor","2 digit whole number divisor",
              '1 digit decimal divisor', '2 digit decimal divisor']),
            conceptSpecify(props, "specify", "Problem Type", [
              "Algorithm","Application", ]),
            <div className='dynamic-customize-container'>
              {algorithm} {application}    
            </div>   

                )
    );
  } else if (props.inputState.concept === "Multiplying Decimals") {
    return (
        customizeContainer(props,"Multiplying Decimals",
            conceptSpecify(props, "specify", "Include", [
                "3 by 1 digit","4 by 1 digit",
                "2 by 2 digit","3 by 2 digit", ]),
            conceptSpecify(props, "specify", "Problem Type", [
              "Algorithm","Application", ]),
            <div className='dynamic-customize-container'>
              {algorithm} {application}    
            </div>    

            )

    );
  } else if (props.inputState.concept === "Subtracting Decimals") {
    return (
        customizeContainer(props,"Subtracting Decimals",
            conceptSpecify(props, "specify", "Include", [
                "1-3 digits to the hundredths","3-4 digits to the hundredths", 
                "4-5 digits to the hundredths", "4-5 digits to the thousandths"]),
            conceptSpecify(props, "specify", "Place Values", [
                "Same decimal place values","Different decimal place values",]),
            conceptSpecify(props, "specify", "Problem Type", [
              "Algorithm","Application", ]),
            <div className='dynamic-customize-container'>
              {algorithm} {application}    
            </div>    

                )
    );
  } else if (props.inputState.concept === "Adding Decimals") {
    return (
        customizeContainer(props,"Adding Decimals",
            conceptSpecify(props, "specify", "Include", [
              "1-3 digits to the hundredths","3-4 digits to the hundredths", 
              "4-5 digits to the hundredths", "4-5 digits to the thousandths"]),
            conceptSpecify(props, "specify", "Place Values", [
                "Same decimal place values","Different decimal place values",]),
            conceptSpecify(props, "specify", "Problem Type", [
              "Algorithm","Application", ]),
            <div className='dynamic-customize-container'>
              {algorithm} {application}    
            </div>     

                )
    );
  } else if (props.inputState.concept === "Order of Operations") {
    return (
        customizeContainer(props,"Order of Operations",
            conceptSpecify(props, "specify", "Include", [
            "Whole numbers", "Decimals","Integers",]),
            conceptSpecify(props, "specify", "Number of Steps", 
            ["3 steps", "4 steps", "5 steps"]),
            conceptLevel(props, "Problem Level", [
                "Small numbers","Medium numbers","Large numbers",]))
    );
  } else if (props.inputState.concept === "Input Output Tables") {
    // if (props.inputState['Decimals']){
    //   var decimal = conceptSpecify(props, "specify", "Custom Decimal", [
    //     "2-3 by 1 digit","4 by 1 digit","2 by 2 digit", "3 by 2 digit"])
    // } if (props.inputState['Whole numbers']){
    //   var whole = conceptSpecify(props, "specify", "Custom Whole", [
    //     "2-3 by 1 digit","4 by 1 digit","2 by 2 digit", "3 by 2 digit"])
      
    // }
   
    return(
      customizeContainer(props,"Input Output Tables",
        conceptSpecify(props, "specify", "Include", [
        "Whole numbers","Decimals",]),
        conceptSpecify(props, "specify", "Numbers", [
            "Small","Medium","Large",]),
        conceptSpecify(props, "specify", "Steps", [
          "One-step","Two-steps",]),
        // decimal, whole
        
        ) 
    ) 
    
   
  } else if (props.inputState.concept === "Adding Fractions") {
    return (
        customizeContainer(props,"Adding Fractions",
            conceptSpecify(props, "specify", "Include", [
                "Common Denominators","Uncommon Denominators",]),
            conceptProbStyle(props, "probStyle", "Algorithm Style", [
                "Vertical","Horizontal", ]) 
            // conceptLevel(props, "Problem Level", [
            //     "One step","Two step","Multi-step",]),
            // <div>{algorithm}</div>
            
                
                )

    );
  } else if (props.inputState.concept === "Subtracting Fractions") {
    return (
        customizeContainer(props,"Subtracting Fractions",
            conceptSpecify(props, "specify", "Include", [
              "Common Denominators","Uncommon Denominators",]),
            conceptProbStyle(props, "probStyle", "Algorithm Style", [
              "Vertical","Horizontal", ]) 
              // <div>{algorithm}</div>

            // conceptSpecify(props, "specify", "Include", [
            //     "Fractions Only","Mixed Numbers","Regrouping",]),
              
            // conceptLevel(props, "Problem Level", [
            //     "One step","Two step","Multi-step",])
                )
    );
  } else if (props.inputState.concept === "Multiplying Fractions") {
    return (
        customizeContainer(props,"Multiplying Fractions",
            conceptSpecify(props, "specify", "Include", [
                "Fractions Only","Fraction with Whole Numbers","Unit Fraction with Whole Numbers",]),
            // conceptLevel(props, "Problem Level", [
            //     "One step","Two step","Multi-step",])
                )
    );
  } else if (props.inputState.concept === "Dividing Fractions") {
    return (
        customizeContainer(props,"Dividing Fractions",
            conceptSpecify(props, "specify", "Include", [
                "Unit Fraction with Whole Numbers","Fraction with Whole Numbers",
                "Fractions Only",]),
 
                )
    );
  } else if (props.inputState.concept === "Area") {
      if (props.inputState['Whole Numbers']){
          var whole = conceptSpecify(props, "specify", "Whole Numbers", [
            "1 by 1 digit","2 by 1 digit" ])
    }
    return (
      customizeContainer(props,"Area",
          conceptSpecify(props, "specify", "Include", [
              "Whole Numbers","Decimals",]),
          conceptSpecify(props, "specify", "Include", [
                "3 by 1 digit","4 by 1 digit",
                "2 by 2 digit","3 by 2 digit", ]),
          <div>{whole}</div>
          // conceptSpecify(props, "specify", "Include", [
          //   "Rectangles","Parallelograms", "Triangles", "Trapezoids"]),
      )
  );
  } else if (props.inputState.concept === "Perimeter") {
      if (props.inputState['Decimals']){
        var decimal = conceptSpecify(props, "specify", "Decimals", [
          "1-3 digits to the hundredths","3-4 digits to the hundredths", 
          "4-5 digits to the hundredths", "4-5 digits to the thousandths"])
        var decimal2 = conceptSpecify(props, "specify", "Decimal Place Values", [
            "Same decimal place values","Different decimal place values",])
      } if (props.inputState['Whole Numbers']){
        var whole = conceptSpecify(props, "specify", "Whole Numbers", [
          "1 digit numbers", "2 digit numbers", "3 digit numbers",
          "4 digit numbers", "5 digit numbers", "6 digit numbers", 
          '7 digit numbers'])
      }
      return (
        customizeContainer(props,"Perimeter",
            conceptSpecify(props, "specify", "Include", [
                "Whole Numbers","Decimals",]),
              <div className='dynamic-customize-container'>
                {decimal}{decimal2}
              </div>,<div>{whole}</div>

        // conceptSpecify(props, "specify", "Include", [
        //   "Rectangles","Parallelograms", "Triangles", "Trapezoids"]),
    )
  );
  } else if (props.inputState.concept === "") {
    return null;
  } else {
    return (
      <p>
        Return to the homepage to begin creating your assessment!
      </p>
    );
  }
};

export default ConceptCustomization;
