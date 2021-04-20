import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConceptGeneral from "../components/ConceptGeneral";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import Checkbox from '@material-ui/core/Checkbox';
import BackArrow from '../../app-files/images/previous-button.svg'
import uuid from 'react-uuid'
import DisplayUserSelection from '../components/DisplayUserSelection'
import './ConceptCustomization.css'
import './CustomizeGeneral.css'

const ConceptCustomization = (props) => {
  const [errorList, setErrorList] = useState([])
  const [errorState, setErrorState] = useState(false)
  const [specifyArray, setSpecifyArray] = useState([])
  let tempSpecifyArray = []

  const handleError = (bool) => {
    setErrorState(bool)
  }

  useEffect(()=> {
    setSpecifyArray(tempSpecifyArray)
    console.log(tempSpecifyArray)
  },[props.inputState])

  const conceptSpecify = (props, name, specifyTitle, specifyArray) => {
    let error= false
    tempSpecifyArray.push(name)
    console.log(tempSpecifyArray)
    const specifyFor = (props, name, arr) => {

      var newArray = [];
      let arrayList = []
      for (var i = 0; i < arr.length; i++) {
        newArray.push(
          <div>
            <FormControlLabel  key={uuid()} control= {
            <Checkbox name={name} value={arr[i]} checked={props.inputState.specify[name]?!!props.inputState.specify[name][arr[i]]:false} onChange={props.handleSpecifyInput}  color='primary'/>
            } label={<span className="checkbox">{arr[i]}</span>} /> <br />
          </div>
        );
      }

      return newArray;
    };
    if (props.inputState.specify[name]){
      if (!Object.values(props.inputState.specify[name]).includes(true)) {
        error = true
      } else {
        error = false
      }
    }

    return (
      <div className='radio-title-button-container'>
        <span className='radio-title'>{specifyTitle}:</span><br />
          <div className="radio-button">
          <FormControl required error={error} component="fieldset">
            <FormGroup >
              {specifyFor(props, name, specifyArray)}
            </FormGroup>
            {error ? <FormHelperText>Please select at least one</FormHelperText>:<div style={{height:'21.89px'}}></div>}
        </FormControl>
          </div>
      </div>
    );
  };
  
  const conceptProbStyle = (props, name, probTitle, probStyleArray) => {
    let error = false;
    tempSpecifyArray.push(name)

    return (
      <div className='radio-title-button-container'>
        <span className='radio-title'>{probTitle}:</span><br />
        <FormControl component="fieldset">
          <RadioGroup  aria-label={name} name= {name} value={props.value} onChange={props.handleSpecifyInput}>
              <FormControlLabel key={uuid()} color= 'secondary' value='Vertical'  control= {<Radio color='primary'/>} label={probStyleArray[0]} />
              <FormControlLabel key={uuid()} value='Horizontal' control= {<Radio color='primary'/>} label= {probStyleArray[1]}  />
            </RadioGroup>

        </FormControl> 
      </div>
    );
  };
  const conceptLevel = (props, levelTitle, levelArray) => {
    tempSpecifyArray.push('level')
    return (
      <div className='radio-title-button-container'>
        <span className='radio-title'>{levelTitle}:</span><br />
        <FormControl component="fieldset">
          <RadioGroup  aria-label="level" name="level" valueSelected={props.value} onChange={props.handleSpecifyInput}>
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
            handleSpecifyInput={props.handleSpecifyInput}
            handleAddConcept={props.handleAddConcept}
            errorState = {errorState}
            specifyArray = {specifyArray}
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

  console.log(props.inputState)
  if (!!props.inputState.specify && !!props.inputState.specify.probType){
    if (props.inputState.specify.probType['Algorithm']){
      var algorithm = conceptProbStyle(props, "probStyle", "Algorithm Style", [
        "Vertical","Horizontal", ])        
    } if (props.inputState.specify.probType['Application']){
      var application = conceptProbStyle(props, "level", "Application Level", [
        "1: One step", "2: Multi-step", ])   
    }
  }
  let dynamicProbType = (algorithm||application)?
      (<div className='dynamic-customize-container'>
        {algorithm} {application}    
      </div>) :<div style={{minWidth:'200px'}}></div>
      console.log(dynamicProbType)
  if (props.inputState.concept === "Adding Whole Numbers") {    
    return (
        customizeContainer(props,'Adding Whole Numbers', 
            conceptSpecify(props, "numbers", "Include", [
                "1 digit numbers", "2 digit numbers", "3 digit numbers",
                "4 digit numbers", "5 digit numbers", "6 digit numbers", 
                '7 digit numbers']),
            conceptSpecify(props, "probType", "Problem Type", [
              "Algorithm","Application", ]),   
            dynamicProbType
                  )
    );
  } else if (props.inputState.concept === "Subtracting Whole Numbers") {
    return (
        customizeContainer(props,'Subtracting Whole Numbers',
            conceptSpecify(props, "numbers", "Include numbers", [
              "1 digit numbers", "2 digit numbers","3 digit numbers",
              "4 digit numbers", "5 digit numbers","6 digit numbers", 
              '7 digit numbers',]),
            conceptSpecify(props, "probType", "Problem Type", [
              "Algorithm","Application", ]),
              dynamicProbType

        )
    );
  } else if (props.inputState.concept === "Multiplying Whole Numbers") {
    return (
          customizeContainer(props, 'Multiplying Whole Numbers',
            conceptSpecify(props, "numbers", "Include", [
                "1 by 1 digit","2 by 1 digit","3 by 1 digit", "4 by 1 digit",
                "2 by 2 digit","3 by 2 digit",]),
            conceptSpecify(props, "probType", "Problem Type", [
              "Algorithm","Application", ]),
            dynamicProbType


                )
    );
  } else if (props.inputState.concept === "Dividing Whole Numbers") {
    return (
        customizeContainer(props,"Dividing Whole Numbers", 
            conceptSpecify(props, "numbers", "Include", [
                "2 by 1 digit","3 by 1 digit","4 by 1 digit","3 by 2 digit",
                "4 by 2 digit", ]),
            conceptSpecify(props, "probType", "Problem Type", [
              "Algorithm","Application", ]),
              dynamicProbType
  
                )
    );
  } else if (props.inputState.concept === "Dividing Decimals") {
    return (
        customizeContainer(props, "Dividing Decimals",
            conceptSpecify(props, "dividend", "Dividend", [
                "2 digit dividend", "3 digit dividend","4 digit dividend",]),
            conceptSpecify(props, "divisor", "Divisor", [
              "1 digit whole number divisor","2 digit whole number divisor",
              '1 digit decimal divisor', '2 digit decimal divisor']),
            conceptSpecify(props, "probType", "Problem Type", [
              "Algorithm","Application", ]),
              dynamicProbType

                )
    );
  } else if (props.inputState.concept === "Multiplying Decimals") {
    return (
        customizeContainer(props,"Multiplying Decimals",
            conceptSpecify(props, "numbers", "Include", [
                "3 by 1 digit","4 by 1 digit",
                "2 by 2 digit","3 by 2 digit", ]),
            conceptSpecify(props, "probType", "Problem Type", [
              "Algorithm","Application", ]),
              dynamicProbType
            )

    );
  } else if (props.inputState.concept === "Subtracting Decimals") {
    return (
        customizeContainer(props,"Subtracting Decimals",
            conceptSpecify(props, "numbers", "Include", [
                "1-3 digits to the hundredths","3-4 digits to the hundredths", 
                "4-5 digits to the hundredths", "4-5 digits to the thousandths"]),
            conceptSpecify(props, "placeValues", "Place Values", [
                "Same decimal place values","Different decimal place values",]),
            conceptSpecify(props, "probType", "Problem Type", [
              "Algorithm","Application", ]),
              dynamicProbType  
                )
    );
  } else if (props.inputState.concept === "Adding Decimals") {
    return (
        customizeContainer(props,"Adding Decimals",
            conceptSpecify(props, "numbers", "Include", [
              "1-3 digits to the hundredths","3-4 digits to the hundredths", 
              "4-5 digits to the hundredths", "4-5 digits to the thousandths"]),
            conceptSpecify(props, "placeValues", "Place Values", [
                "Same decimal place values","Different decimal place values",]),
            conceptSpecify(props, "probType", "Problem Type", [
              "Algorithm","Application", ]),
              dynamicProbType
                  )
    );
  } else if (props.inputState.concept === "Order of Operations") {
    return (
        customizeContainer(props,"Order of Operations",
            conceptSpecify(props, "numberType", "Include", [
            "Whole numbers", "Decimals","Integers",]),
            conceptSpecify(props, "steps", "Steps", 
            ["3 steps", "4 steps", "5 steps"]),
            conceptLevel(props, "Problem Level", [
                "Small numbers","Medium numbers","Large numbers",]))
    );
  } else if (props.inputState.concept === "Input Output Tables") {
    return(
      customizeContainer(props,"Input Output Tables",
        conceptSpecify(props, "numberType", "Include", [
        "Whole numbers","Decimals",]),
        conceptSpecify(props, "numberSize", "Numbers", [
            "Small","Medium","Large",]),
        conceptSpecify(props, "steps", "Steps", [
          "One-step","Two-steps",]),
        
        ) 
    ) 
  } else if (props.inputState.concept === "Adding Fractions") {
    return (
        customizeContainer(props,"Adding Fractions",
            conceptSpecify(props, "numbers", "Include", [
                "Common Denominators","Uncommon Denominators",]),
            conceptProbStyle(props, "probStyle", "Algorithm Style", [
                "Vertical","Horizontal", ])

                )
    );
  } else if (props.inputState.concept === "Subtracting Fractions") {
    return (
        customizeContainer(props,"Subtracting Fractions",
            conceptSpecify(props, "numbers", "Include", [
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
            conceptSpecify(props, "numbers", "Include", [
                "Fractions Only","Fraction with Whole Numbers","Unit Fraction with Whole Numbers",]),
        )
    );
  } else if (props.inputState.concept === "Dividing Fractions") {
    return (
        customizeContainer(props,"Dividing Fractions",
            conceptSpecify(props, "numbers", "Include", [
                "Unit Fraction with Whole Numbers","Fraction with Whole Numbers",
                "Fractions Only",]),
 
                )
    );
  } else if (props.inputState.concept === "Area") {
      if(props.inputState.specify.numberType){
        if (props.inputState.specify.numberType['Whole Numbers']){
          var whole = conceptSpecify(props, "numbers", "Whole Numbers", [
            "1 by 1 digit","2 by 1 digit" ]);
    }
      }

    return (
      customizeContainer(props,"Area",
          conceptSpecify(props, "numberType", "Include", [
              "Whole Numbers","Decimals",]),
          conceptSpecify(props, "numbers", "Include", [
                "3 by 1 digit","4 by 1 digit",
                "2 by 2 digit","3 by 2 digit", ]),
          <div>{whole}</div>
          // conceptSpecify(props, "specify", "Include", [
          //   "Rectangles","Parallelograms", "Triangles", "Trapezoids"]),
      )
  );
  } else if (props.inputState.concept === "Perimeter") {
    if (props.inputState.specify.numberType){
      if (props.inputState.specify.numberType['Decimals']){
        var decimal = conceptSpecify(props, "decimals", "Decimals", [
          "1-3 digits to the hundredths","3-4 digits to the hundredths", 
          "4-5 digits to the hundredths", "4-5 digits to the thousandths"])
        var decimal2 = conceptSpecify(props, "placeValues", "Decimal Place Values", [
            "Same decimal place values","Different decimal place values",]);
      } if (props.inputState.specify.numberType['Whole Numbers']){
        var whole = conceptSpecify(props, "wholeNumbers", "Whole Numbers", [
          "1 digit numbers", "2 digit numbers", "3 digit numbers",
          "4 digit numbers", "5 digit numbers", "6 digit numbers", 
          '7 digit numbers']);
      }
    }
      return (
        customizeContainer(props,"Perimeter",
            conceptSpecify(props, "numberType", "Include", [
                "Whole Numbers","Decimals",]),
              <div className='dynamic-customize-container'>
                {decimal}{decimal2}
              </div>,<div>{whole}</div>

        // conceptSpecify(props, "specify", "Include", [
        //   "Rectangles","Parallelograms", "Triangles", "Trapezoids"]),
    )
  );
  } else if (props.inputState.concept === "") {
    return <div><p>No concept selected</p></div>;
  } else {
    return (
      <p>
        Return to the homepage to begin creating your assessment!
      </p>
    );
  }
};

export default ConceptCustomization;
