import { defaultProps, PropTypes, React } from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
import Input from "./input.js";
import ConceptGeneral from "./concept-general.js";

const specifyFor = (props, name, arr) => {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    newArray.push(
      <div>
        <input
          type="radio"
          id={arr[i]}
          name={name}
          onChange={props.handleInput}
          value={arr[i]}
        />
        <label for={arr[i]}>{arr[i]}</label>
        <br />
      </div>
    );
  }
  return newArray;
};
const specifyConcept = (props, name, specifyTitle, specifyArray) => {
  return (
    <div>
      {" "}
      {specifyTitle}:<br />
      <div className="radio-button-container">
        <div className="radio-button">
          {specifyFor(props, name, specifyArray)}
        </div>
      </div>
    </div>
  );
};
const conceptLevel = (props, levelTitle, levelArray) => {
  return (
    <div>
      {levelTitle}:<br />
      <div className="radio-button">
        <input
          type="radio"
          id="1"
          name="level"
          onChange={props.handleInput}
          value={1}
        />
        <label for="1">1: {levelArray[0]}</label>
        <br />
        <input
          type="radio"
          id="2"
          name="level"
          onChange={props.handleInput}
          value={2}
        />
        <label for="2">2: {levelArray[1]}</label>
        <br />
        <input
          type="radio"
          id="3"
          name="level"
          onChange={props.handleInput}
          value={3}
        />
        <label for="3">3: {levelArray[2]}</label>
      </div>
    </div>
  );
};

const customizeContainer = (props, title, func1, func2, func3) =>{
    return (
        <div>
    <Link to ='/' className= "infinite-math">
      <h1><span className="in">IN</span><span className='finite'>finite</span> Math</h1>    
     </Link>  
        <p className='concept-title'>{title}</p>
        <div className='radio-button-container'>
            {func1}
            {func2}
            {func3}
        </div>
        <ConceptGeneral
          inputState={props.inputState}
          handleInput={props.handleInput}
          handleAddConcept={props.handleAddConcept}
        />
        </div>
    )
}
const ConceptCustomization = (props) => {
  if (props.inputState.concept === "Adding Whole Numbers") {
    return (
        customizeContainer(props,'Adding Whole Numbers', 
            specifyConcept(props, "specify", "Include numbers", [
                "Less than 100", "Less than 200","Less than 1000","Less than 10000","Less than 100000",]),
             conceptLevel(props, "Problem Level", ["One step","Two step","Multi-step",]),
        )
    );
  } else if (props.inputState.concept === "Subtracting Whole Numbers") {
    return (
        customizeContainer(props,'Subtracting Whole Numbers',
            specifyConcept(props, "specify", "Include numbers", [
                "Less than 100", "Less than 200","Less than 1000","Less than 10000","Less than 100000",]),
            conceptLevel(props, "Problem Level", ["One step","Two step","Multi-step",])
        )
    );
  } else if (props.inputState.concept === "Multiplying Whole Numbers") {
    return (
          customizeContainer(props, 'Multiplying Whole Numbers',
            specifyConcept(props, "specify", "Include", [
                "1 by 1 digit","2 by 1 digit","3 by 1 digit", "4 by 1 digit","2 by 2 digit","3 by 2 digit",]),
            conceptLevel(props, "Problem Level", [
                "One step", "Two step","Multi-step",]))
    );
  } else if (props.inputState.concept === "Dividing Whole Numbers") {
    return (
        customizeContainer(props,"Dividing Whole Numbers", 
            specifyConcept(props, "specify", "Include", [
                "2 by 1 digit","3 by 1 digit","4 by 1 digit","3 by 2 digit","4 by 2 digit", ]),
            conceptLevel(props, "Problem Level", [
                "One step","Two step","Multi-step",]))
    );
  } else if (props.inputState.concept === "Dividing Decimals Algorithm") {
    return (
        customizeContainer(props, "Dividing Decimals Algorithm",
            specifyConcept(props, "specify", "Include", [
                "4 by 1 digit (Whole Number Divisor)","4 by 2 digit(Whole Number Divisor)",]),
            /* add in: '1 digit Decimal Divisior','2 Digit Decimal Divisor' */
            conceptLevel(props, "Problem Level", [
                "One step", "Two step","Multi-step",]))
    );
  } else if (props.inputState.concept === "Multiplying Decimals Algorithm") {
    return (
        customizeContainer(props,"Multiplying Decimals Algorithm",
            specifyConcept(props, "specify", "Include", [
                "Decimal x Whole number","3 by 1 digit","4 by 1 digit","2 by 2 digit","3 by 2 digit", ]),
            specifyConcept(props, 'specify',"Problem Style", ["Vertical", "Horizontal"]))

    );
  } else if (props.inputState.concept === "Subtracting Decimals Algorithm") {
    return (
        customizeContainer(props,"Subtracting Decimals Algorithm",
            specifyConcept(props, "specify", "Include", [
                "Decimal - Decimal","Whole - decimal",]),
            specifyConcept(props, "probStyle", "Problem Style", [
                "Vertical", "Horizontal",]),
            conceptLevel(props, "Problem Level", [
                "Tenths-Hundredths","Tenths-Thousandths","Mixed", ]))
    );
  } else if (props.inputState.concept === "Adding Decimals Algorithm") {
    return (
        customizeContainer(props,"Adding Decimals Algorithm",
            specifyConcept(props, "specify", "Include", [
                "Decimal + Decimal","Whole + decimal",]),
            specifyConcept(props, "probstyle", "Problem Style", [
                "Vertical","Horizontal",]),
            conceptLevel(props, "Problem Level", [
                "Tenths-Hundredths","Tenths-Thousandths","Mixed",]))
    );
  } else if (props.inputState.concept === "Order of Operations") {
    return (
        customizeContainer(props,"Order of Operations",
            specifyConcept(props, "specify", "Include", [
            "Whole numbers", "Decimals","Integers",]),
            specifyConcept(props, "steps", "Number of Steps", ["3", "4", "5"]),
            conceptLevel(props, "Problem Level", [
                "Small numbers","Medium numbers","Large numbers",]))
    );
  } else if (props.inputState.concept === "Input Output Tables") {
    return (
        customizeContainer(props,"Input Output Tables",
            specifyConcept(props, "specify", "Include", [
            "Whole numbers","Decimals",]),
            conceptLevel(props, "Problem Level", [
                "One step","Two step","Multi-step",]))

    );
  } else if (props.inputState.concept === "Adding Fractions") {
    return (
        customizeContainer(props,"Adding Fractions",
            specifyConcept(props, "specify", "Include", [
                "Fractions Only","Mixed Numbers",]),
            conceptLevel(props, "Problem Level", [
                "One step","Two step","Multi-step",]))

    );
  } else if (props.inputState.concept === "Subtracting Fractions") {
    return (
        customizeContainer(props,"Subtracting Fractions",
            specifyConcept(props, "specify", "Include", [
                "Fractions Only","Mixed Numbers","Regrouping",]),
            conceptLevel(props, "Problem Level", [
                "One step","Two step","Multi-step",]))
    );
  } else if (props.inputState.concept === "Multiplying Fractions") {
    return (
        customizeContainer(props,"Multiplying Fractions",
            specifyConcept(props, "specify", "Include", [
                "Fractions Only","Fraction x Whole Numbers","Mixed Numbers",]),
            conceptLevel(props, "Problem Level", [
                "One step","Two step","Multi-step",]))
    );
  } else if (props.inputState.concept === "Dividing Fractions") {
    return (
        customizeContainer(props,"Dividing Fractions",
            specifyConcept(props, "specify", "Include", [
                "Unit Fraction with Whole Number","Fraction with Whole Numbers",
                "Fractions Only","Mixed Numbers",]),
            specifyConcept(props, "specify", "Include", [
                "Fractions Only","Mixed Numbers","Regrouping",]))
    );
  } else if (props.inputState.concept === "") {
    return null;
  } else if (props.inputState.concept === "") {
    return null;
  } else if (props.inputState.concept === "") {
    return null;
  } else {
    return (
      <p>
        Select a concept to the left and then you will be able to customize it
        to fit the needs of your students. Once you are done adding questions
        select create worksheet to have your custom worksheet made!
      </p>
    );
  }
};

export default ConceptCustomization;
