import { defaultProps, PropTypes, React } from "react";
import { Router, Route, Link, Switch } from "react-router-dom";
import Input from "./input.js";
import ConceptGeneral from "./ConceptGeneral";
import BackArrow from '../app-files/images/back-arrow.jpg';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';


const conceptSpecify = (props, name, specifyTitle, specifyArray) => {
  const specifyFor = (props, name, arr) => {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
      newArray.push(
        <div>
          <FormControlLabel  control= {<Checkbox name={name} value={arr[i]} checked={!!props.inputState[arr[i]]} onChange={props.handleInput}color='primary'/>} label={arr[i]} /> <br />
          {/* value={arr[i]} */}
        </div>
      );
    }
    return newArray;
  };
  return (
    <div className='radio-title-button-container'>
      <span className='radio-title'>{specifyTitle}:</span><br />
        <div className="radio-button">
        <FormControl component="fieldset">
          <FormGroup >
           {/* aria-label={name} name={name} valueSelected={props.value} onChange={props.handleInput} */}
          {/* <FormLabel component="legend" className='radio-title'>{specifyTitle}</FormLabel> */}
            {specifyFor(props, name, specifyArray)}
          </FormGroup>
      </FormControl>
        </div>
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
            <FormControlLabel color= 'secondary' value='1'  control= {<Radio color='primary'/>} label={'1: '+levelArray[0]} />
            <FormControlLabel  value='2' control= {<Radio color='primary'/>} label={'2: '+levelArray[1]}  />
            <FormControlLabel  value='3' control= {<Radio color='primary'/>} label={'3: '+levelArray[2]}  />
          </RadioGroup>
      </FormControl> 
    </div>
  );
};

const customizeContainer = (props, title, func1, func2, func3) =>{
    return (
        <div>
            <Link to ='/' className= "infinite-math-small">
                <h1 className= "infinite-math-small"><span className="in-small">IN</span><span className='finite-small'>finite</span> Math</h1>    
            </Link>  
        <div className='concept-back-arrow'>
            <Link to='/concept-selection'>
                <ArrowBackIcon fontSize='large'/>
            </Link>
            <p className='concept-title'>{title}</p>
        </div>
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
            conceptSpecify(props, "specify", "Include", [
                "1 digit numbers", "2 digit numbers","3 digit numbers","4 digit numbers","5 digit numbers","6 digit numbers", '7 digit numbers']),
             conceptLevel(props, "Problem Level", ["One step","Two step","Multi-step",]),
        )
    );
  } else if (props.inputState.concept === "Subtracting Whole Numbers") {
    return (
        customizeContainer(props,'Subtracting Whole Numbers',
            conceptSpecify(props, "specify", "Include numbers", [
              "1 digit numbers", "2 digit numbers","3 digit numbers","4 digit numbers","5 digit numbers","6 digit numbers", '7 digit numbers',]),
            conceptLevel(props, "Problem Level", ["One step","Two step","Multi-step",])
        )
    );
  } else if (props.inputState.concept === "Multiplying Whole Numbers") {
    return (
          customizeContainer(props, 'Multiplying Whole Numbers',
            conceptSpecify(props, "specify", "Include", [
                "1 by 1 digit","2 by 1 digit","3 by 1 digit", "4 by 1 digit","2 by 2 digit","3 by 2 digit",]),
            conceptLevel(props, "Problem Level", [
                "One step", "Two step","Multi-step",]))
    );
  } else if (props.inputState.concept === "Dividing Whole Numbers") {
    return (
        customizeContainer(props,"Dividing Whole Numbers", 
            conceptSpecify(props, "specify", "Include", [
                "2 by 1 digit","3 by 1 digit","4 by 1 digit","3 by 2 digit","4 by 2 digit", ]),
                conceptSpecify(props, "probType", "Problem Type", [
                  "Algorithm","Application","Mixed", ]),
            conceptLevel(props, "Problem Level", [
                "One step","Two step","Multi-step",]))
    );
  } else if (props.inputState.concept === "Dividing Decimals Algorithm") {
    return (
        customizeContainer(props, "Dividing Decimals Algorithm",
            conceptSpecify(props, "specify", "Include", [
                "4 by 1 digit (Whole Number Divisor)","4 by 2 digit(Whole Number Divisor)",]),
            /* add in: '1 digit Decimal Divisior','2 Digit Decimal Divisor' */
            conceptLevel(props, "Problem Level", [
                "One step", "Two step","Multi-step",]))
    );
  } else if (props.inputState.concept === "Multiplying Decimals Algorithm") {
    return (
        customizeContainer(props,"Multiplying Decimals Algorithm",
            conceptSpecify(props, "specify", "Include", [
                "Decimal x Whole Number","3 by 1 digit","4 by 1 digit","2 by 2 digit","3 by 2 digit", ]),
            conceptSpecify(props, 'probLayout',"Problem Layout", ["Vertical", "Horizontal"]))

    );
  } else if (props.inputState.concept === "Subtracting Decimals Algorithm") {
    return (
        customizeContainer(props,"Subtracting Decimals Algorithm",
            conceptSpecify(props, "specify", "Include", [
                "Decimal - Decimal","Whole - decimal",]),
            conceptSpecify(props, "probStyle", "Problem Style", [
                "Vertical", "Horizontal",]),
            conceptLevel(props, "Problem Level", [
                "Tenths-Hundredths","Tenths-Thousandths","Mixed", ]))
    );
  } else if (props.inputState.concept === "Adding Decimals Algorithm") {
    return (
        customizeContainer(props,"Adding Decimals Algorithm",
            conceptSpecify(props, "specify", "Include", [
                "Decimal + Decimal","Whole + decimal",]),
            conceptSpecify(props, "probstyle", "Problem Style", [
                "Vertical","Horizontal",]),
            conceptLevel(props, "Problem Level", [
                "Tenths-Hundredths","Tenths-Thousandths","Mixed",]))
    );
  } else if (props.inputState.concept === "Order of Operations") {
    return (
        customizeContainer(props,"Order of Operations",
            conceptSpecify(props, "specify", "Include", [
            "Whole numbers", "Decimals","Integers",]),
            conceptSpecify(props, "steps", "Number of Steps", ["3", "4", "5"]),
            conceptLevel(props, "Problem Level", [
                "Small numbers","Medium numbers","Large numbers",]))
    );
  } else if (props.inputState.concept === "Input Output Tables") {
    return (
        customizeContainer(props,"Input Output Tables",
            conceptSpecify(props, "specify", "Include", [
            "Whole numbers","Decimals",]),
            conceptLevel(props, "Problem Level", [
                "One step","Two step","Multi-step",]))

    );
  } else if (props.inputState.concept === "Adding Fractions") {
    return (
        customizeContainer(props,"Adding Fractions",
            conceptSpecify(props, "specify", "Include", [
                "Fractions Only","Mixed Numbers",]),
            conceptLevel(props, "Problem Level", [
                "One step","Two step","Multi-step",]))

    );
  } else if (props.inputState.concept === "Subtracting Fractions") {
    return (
        customizeContainer(props,"Subtracting Fractions",
            conceptSpecify(props, "specify", "Include", [
                "Fractions Only","Mixed Numbers","Regrouping",]),
            conceptLevel(props, "Problem Level", [
                "One step","Two step","Multi-step",]))
    );
  } else if (props.inputState.concept === "Multiplying Fractions") {
    return (
        customizeContainer(props,"Multiplying Fractions",
            conceptSpecify(props, "specify", "Include", [
                "Fractions Only","Fraction x Whole Numbers","Mixed Numbers",]),
            conceptLevel(props, "Problem Level", [
                "One step","Two step","Multi-step",]))
    );
  } else if (props.inputState.concept === "Dividing Fractions") {
    return (
        customizeContainer(props,"Dividing Fractions",
            conceptSpecify(props, "specify", "Include", [
                "Unit Fraction with Whole Number","Fraction with Whole Numbers",
                "Fractions Only","Mixed Numbers",]),
            conceptSpecify(props, "specify", "Include", [
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
        Return to the homepage to begin creating your assessment!
      </p>
    );
  }
};

export default ConceptCustomization;
