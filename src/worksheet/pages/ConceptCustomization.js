import { React } from "react";
import { Link } from "react-router-dom";
import ConceptGeneral from "../components/ConceptGeneral";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import BackArrow from '../../app-files/images/previous-button.svg'
import './ConceptCustomization.css'
import './CustomizeGeneral.css'


const conceptSpecify = (props, name, specifyTitle, specifyArray) => {
  const specifyFor = (props, name, arr) => {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
      newArray.push(
        <div>
          <FormControlLabel  control= {<Checkbox name={name} value={arr[i]} checked={!!props.inputState[arr[i]]} onChange={props.handleInput}color='primary'/>} label={<span className="checkbox">{arr[i]}</span>} /> <br />
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
        />
        </div>
    )
}
const ConceptCustomization = (props) => {
  if (props.inputState['Algorithm']){
    var algorithm = conceptSpecify(props, "specify", "Algorithm Style", [
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
    if (props.inputState['Decimals']){
      var decimal = conceptSpecify(props, "specify", "Custom Decimal", [
        "2-3 by 1 digit","4 by 1 digit","2 by 2 digit", "3 by 2 digit"])
    } if (props.inputState['Whole numbers']){
      var whole = conceptSpecify(props, "specify", "Custom Whole", [
        "2-3 by 1 digit","4 by 1 digit","2 by 2 digit", "3 by 2 digit"])
      
    }
   
    return(
      customizeContainer(props,"Input Output Tables",
        conceptSpecify(props, "specify", "Include", [
        "Whole numbers","Decimals",]),
        conceptLevel(props, "Problem Level", [
            "One step","Two step","Multi-step",]),
        decimal, whole
        
        ) 
    ) 
    
   
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
  } else if (props.inputState.concept === "Area and Perimeter") {
    return (
      customizeContainer(props,"Area and Perimeter",
          conceptSpecify(props, "specify", "Include", [
              "Area","Perimeter"]),
          conceptSpecify(props, "specify", "Include", [
              "Whole Numbers","Decimals","Fractions",]))
  );
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
