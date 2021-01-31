import {defaultProps, PropTypes, React} from 'react'

const ConceptCustomization = (props) => {
    
    if (props.inputState.concept === 'Adding Whole Numbers') {
        return (
            <div>
            <p className ="concept-title" >Adding Whole Numbers</p>
            <div className='radio-button-container'>
            <div className= 'radio-button'>
                Include numbers:<br/>
                <input type="radio" id="Less than 100" name="specify" onChange= {props.handleInput} value='Less than 100'/>
                <label for="male">Less than 100</label><br/>
                <input type="radio" id="Less than 200" name="specify" onChange= {props.handleInput} value='Less than 200'/>
                <label for="female">Less than 200</label><br/>
                <input type="radio" id="Less than 1000" name="specify" onChange= {props.handleInput} value='Less than 1000'/>
                <label for="other">Less than 1000</label><br/>
                <input type="radio" id="Less than 10000" name="specify" onChange= {props.handleInput} value='Less than 10000'/>
                <label for="other">Less than 10000</label><br/>
                <input type="radio" id="Less than 100000" name="specify" onChange= {props.handleInput} value='Less than 100000'/>
                <label for="other">Less than 100000</label><br/>
                </div>
                <div className= 'radio-button'>
                Problem Level:<br/>
                <input type="radio" id="1" name="level" onChange= {props.handleInput} value={1}/>
                <label for="1">1</label><br/>
                <input type="radio" id="2" name="level" onChange= {props.handleInput} value={2}/>
                <label for="2">2</label><br/>
                <input type="radio" id="3" name="level" onChange= {props.handleInput} value={3}/>
                <label for="3">3</label>
            </div>
            </div>
            </div>
            )
    } else if (props.inputState.concept === 'Subtracting Whole Numbers'){
        return(
            <div>
            <p className ="concept-title" >Subtracting Whole Numbers</p>
        <div className='radio-button-container'>
        <div className= 'radio-button'>
            Include numbers: <br/>
            <input type="radio" id="Less than 100" name="specify" onChange= {props.handleInput} value='Less than 100'/>
            <label for="male">Less than 100</label><br/>
            <input type="radio" id="Less than 200" name="specify" onChange= {props.handleInput} value='Less than 200'/>
            <label for="female">Less than 200</label><br/>
            <input type="radio" id="Less than 1000" name="specify" onChange= {props.handleInput} value='Less than 1000'/>
            <label for="other">Less than 1000</label><br/>
            <input type="radio" id="Less than 10000" name="specify" onChange= {props.handleInput} value='Less than 10000'/>
            <label for="other">Less than 10000</label><br/>
            <input type="radio" id="Less than 100000" name="specify" onChange= {props.handleInput} value='Less than 100000'/>
            <label for="other">Less than 100000</label><br/>
            </div>
            <div className= 'radio-button'>
            Problem Level:<br/>
            <input type="radio" id="1" name="level" onChange= {props.handleInput} value={1}/>
            <label for="1">1</label><br/>
            <input type="radio" id="2" name="level" onChange= {props.handleInput} value={2}/>
            <label for="2">2</label><br/>
            <input type="radio" id="3" name="level" onChange= {props.handleInput} value={3}/>
            <label for="3">3</label>
        </div>
        </div>
        </div>
        )
    } else if (props.inputState.concept === 'Multiplying Whole Numbers'){
        return(
            <div>
            <p className ="concept-title" >Multiplying Whole Numbers</p>
        <div className='radio-button-container'>
        <div className= 'radio-button'>
            Include:<br/>
            <input type="radio" id="1 by 1 digit" name="specify" onChange= {props.handleInput} value='1 by 1 digit'/>
            <label for="male">1 by 1 digit</label><br/>
            <input type="radio" id="2 by 1 digit" name="specify" onChange= {props.handleInput} value='2 by 1 digit'/>
            <label for="female">2 by 1 digit</label><br/>
            <input type="radio" id="3 by 1 digit" name="specify" onChange= {props.handleInput} value='3 by 1 digit'/>
            <label for="other">3 by 1 digit</label><br/>
            <input type="radio" id="4 by 1 digit" name="specify" onChange= {props.handleInput} value='4 by 1 digit'/>
            <label for="other">4 by 1 digit</label><br/>
            <input type="radio" id="2 by 2 digit" name="specify" onChange= {props.handleInput} value='2 by 2 digit'/>
            <label for="other">2 by 2 digit</label><br/>
            <input type="radio" id="3 by 2 digit" name="specify" onChange= {props.handleInput} value='3 by 2 digit'/>
            <label for="other">3 by 2 digit</label><br/>
            </div>
            <div className= 'radio-button'>
            Problem Level:<br/>
            <input type="radio" id="1" name="level" onChange= {props.handleInput} value={1}/>
            <label for="1">1</label><br/>
            <input type="radio" id="2" name="level" onChange= {props.handleInput} value={2}/>
            <label for="2">2</label><br/>
            <input type="radio" id="3" name="level" onChange= {props.handleInput} value={3}/>
            <label for="3">3</label>
        </div>
        </div>
        </div>
        )
    } else if (props.inputState.concept === 'Dividing Whole Numbers'){
        return(
            <div>
            <p className ="concept-title" >Dividing Whole Numbers</p>
            <div className='radio-button-container'>
            <div className= 'radio-button'>
            Include:<br/>
                <input type="radio" id="2 by 1 digit" name="specify" onChange= {props.handleInput} value='2 by 1 digit'/>
                <label for="male">2 by 1 digit</label><br/>
                <input type="radio" id="3 by 1 digit" name="specify" onChange= {props.handleInput} value='3 by 1 digit'/>
                <label for="female">3 by 1 digit</label><br/>
                <input type="radio" id="4 by 1 digit" name="specify" onChange= {props.handleInput} value='4 by 1 digit'/>
                <label for="other">4 by 1 digit</label><br/>
                <input type="radio" id="3 by 2 digit" name="specify" onChange= {props.handleInput} value='3 by 2 digit'/>
                <label for="other">3 by 2 digit</label><br/>
                <input type="radio" id="4 by 2 digit" name="specify" onChange= {props.handleInput} value='4 by 2 digit'/>
                <label for="other">4 by 2 digit</label><br/>
                </div>
                <div className= 'radio-button'>
                Problem Level:<br/>
                <input type="radio" id="1" name="level" onChange= {props.handleInput} value={1}/>
                <label for="1">1</label><br/>
                <input type="radio" id="2" name="level" onChange= {props.handleInput} value={2}/>
                <label for="2">2</label><br/>
                <input type="radio" id="3" name="level" onChange= {props.handleInput} value={3}/>
                <label for="3">3</label>
            </div>
            </div>
            </div>
            )



    } else if (props.inputState.concept === 'Dividing Decimals Algorithm'){
        return (
            <div>
            <p className ="concept-title" >Dividing Decimals Algorithm</p>
            <div className='radio-button-container'>
            <div className= 'radio-button'>
        4 digit dividend with:<br/>
        <input type="radio" id="2 Digit Whole Number Divisor" name="specify" onChange= {props.handleInput} value='2 Digit Whole Number Divisor'/>
        <label for="2 Digit Whole Number Divisor">2 Digit Whole Number Divisor.</label><br/>
        <input type="radio" id="1 Digit Whole Number Divisor" name="specify" onChange= {props.handleInput} value='1 Digit Whole Number Divisor'/>
        <label for="1 Digit Whole Number Divisor">1 Digit Whole Number Divisor</label><br/>
        <input type="radio" id="2 Digit Decimal Divisor" name="specify" onChange= {props.handleInput} value='2 Digit Decimal Divisor'/>
        <label for="other">2 Digit Decimal Divisor</label><br/>
        <input type="radio" id="1 digit Decimal Divisior" name="specify" onChange= {props.handleInput} value='d1 digit Decimal Divisior'/>
        <label for="other">1 digit Decimal Divisior</label><br />
        </div>
        <div className= 'radio-button'>
        Problem Level:<br/>
        <input type="radio" id="1" name="level" onChange= {props.handleInput} value={1}/>
        <label for="1">1</label><br/>
        <input type="radio" id="2" name="level" onChange= {props.handleInput} value={2}/>
        <label for="2">2</label><br/>
        <input type="radio" id="3" name="level" onChange= {props.handleInput} value={3}/>
        <label for="3">3</label>
        </div>
        </div>
        </div>
            )
    }else if (props.inputState.concept === 'Multiplying Decimals Algorithm'){
        return(
            <div>
            <p className ="concept-title" >Multiplying Decimals Algorithm</p>
            <div className='radio-button-container'>
            <div className= 'radio-button'>
            Include: <br/>
                <input type="radio" id="Decimal x Whole Number" name="specify" onChange= {props.handleInput} value='Decimal x Whole Number'/>
                <label for="Decimal x Whole Number">Decimal by 1 digit whole number</label><br/>
                <input type="radio" id="3 by 1 digit" name="specify" onChange= {props.handleInput} value='3 by 1 digit'/>
                <label for="3 by 1 digit">3 by 1 digit</label><br/>
                <input type="radio" id="4 by 1 digit" name="specify" onChange= {props.handleInput} value='4 by 1 digit'/>
                <label for="other">4 by 1 digit</label><br/>
                <input type="radio" id="2 by 2 digit" name="specify" onChange= {props.handleInput} value='2 by 2 digit'/>
                <label for="2 by 2 digit">2 by 2 digit</label><br/>
                <input type="radio" id="3 by 2 digit" name="specify" onChange= {props.handleInput} value='3 by 2 digit'/>
                <label for="3 by 2 digit">3 by 2 digit</label><br/>
                </div>
                <div className= 'radio-button'>
                Problem Style:<br/>
                <input type="radio" id="Vertical" name="probStyle" onChange= {props.handleInput} value='Vertical'/>
                <label for="Vertical">Vertical</label><br/>
                <input type="radio" id="Horizontal" name="probStyle" onChange= {props.handleInput} value='Horizontal'/>
                <label for="Horizontal">Horizontal</label><br/>

            </div>
            </div>
            </div>
            )
    }else if (props.inputState.concept === 'Subtracting Decimals Algorithm'){
        return(
            <div>
            <p className ="concept-title" >Subtracting Decimals Algorithm</p>
            <div className='radio-button-container'>
            <div className= 'radio-button'>
            <br/>

                <input type="radio" id="" name="specify" onChange= {props.handleInput} value=''/>
                <label for="male"></label><br/>
                <input type="radio" id="" name="specify" onChange= {props.handleInput} value=''/>
                <label for="female"></label><br/>
                <input type="radio" id="" name="specify" onChange= {props.handleInput} value=''/>
                <label for="other"></label><br/>

                </div>
                <div className= 'radio-button'>
                Problem Level:<br/>
                <input type="radio" id="1" name="level" onChange= {props.handleInput} value={1}/>
                <label for="1">1</label><br/>
                <input type="radio" id="2" name="level" onChange= {props.handleInput} value={2}/>
                <label for="2">2</label><br/>
                <input type="radio" id="3" name="level" onChange= {props.handleInput} value={3}/>
                <label for="3">3</label>
            </div>
            </div>
            </div>
            )
    }else if (props.inputState.concept === 'Adding Decimals Algorithm'){
        return(
            <div>
            <p className ="concept-title" >Adding Decimals Algorithm</p>
            <div className='radio-button-container'>
            <div className= 'radio-button'>
            <br/>
                <input type="radio" id="" name="specify" onChange= {props.handleInput} value=''/>
                <label for="male"></label><br/>
                <input type="radio" id="" name="specify" onChange= {props.handleInput} value=''/>
                <label for="female"></label><br/>
                <input type="radio" id="" name="specify" onChange= {props.handleInput} value=''/>
                </div>
                <div className= 'radio-button'>
                Problem Level:<br/>
                <input type="radio" id="1" name="level" onChange= {props.handleInput} value={1}/>
                <label for="1">1</label><br/>
                <input type="radio" id="2" name="level" onChange= {props.handleInput} value={2}/>
                <label for="2">2</label><br/>
                <input type="radio" id="3" name="level" onChange= {props.handleInput} value={3}/>
                <label for="3">3</label>
            </div>
            </div>
            </div>
            )


    }else if (props.inputState.concept === 'Order of Operations'){
        return(
            <div>
            <p className ="concept-title" >Order of Operations</p>
            <div className='radio-button-container'>
            <div className= 'radio-button'>
                Include: <br/>
                <input type="radio" id="Whole numbers" name="specify" onChange= {props.handleInput} value='Whole numbers'/>
                <label for="other">Whole Numbers</label><br/>
                <input type="radio" id="Decimals" name="specify" onChange= {props.handleInput} value='Decimals'/>
                <label for="other">Decimals</label><br/>
                <input type="radio" id="Integers" name="specify" onChange= {props.handleInput} value='Integers'/>
                <label for="other">Integers</label><br/>
                </div>
            <div className= 'radio-button'>
            Number of Steps:<br/>
                <input type="radio" id="3" name="steps" onChange= {props.handleInput} value={'3'}/>
                <label for="1">3</label><br/>
                <input type="radio" id="4" name="steps" onChange= {props.handleInput} value={'4'}/>
                <label for="2">4</label><br/>
                <input type="radio" id="5" name="steps" onChange= {props.handleInput} value={'5'}/>
                <label for="3">5</label>
            </div>



            <div className= 'radio-button'>
                Problem Level:<br/>
                <input type="radio" id="1" name="level" onChange= {props.handleInput} value={'1'}/>
                <label for="1">1 Small numbers</label><br/>
                <input type="radio" id="2" name="level" onChange= {props.handleInput} value={'2'}/>
                <label for="2">2 Medium numbers</label><br/>
                <input type="radio" id="3" name="level" onChange= {props.handleInput} value={'3'}/>
                <label for="3">3 Large numbers</label>
            </div>
            </div>
            </div>
            )
    }else if (props.inputState.concept === 'Input Output Tables'){
        return(
            <div>
            <p className ="concept-title" >Input Output Tables</p>
        <div className='radio-button-container'>
        <div className= 'radio-button'>
            Include: <br/>
            <input type="radio" id="Whole numbers" name="specify" onChange= {props.handleInput} value='Whole numbers'/>
            <label for="male">Whole numbers</label><br/>
            <input type="radio" id="Decimals" name="specify" onChange= {props.handleInput} value='Decimals'/>
            <label for="female">Decimals</label><br/>
            <input type="radio" id="Fractions" name="specify" onChange= {props.handleInput} value='Fractions'/>
            <label for="other">Fractions</label><br/>

            </div>
            <div className= 'radio-button'>
            Problem Level:<br/>
            <input type="radio" id="1" name="level" onChange= {props.handleInput} value={'1'}/>
            <label for="1">1</label><br/>
            <input type="radio" id="2" name="level" onChange= {props.handleInput} value={'2'}/>
            <label for="2">2</label><br/>
            <input type="radio" id="3" name="level" onChange= {props.handleInput} value={'3'}/>
            <label for="3">3</label>
        </div>
        </div>
        </div>
        )
    }else if (props.inputState.concept === 'Adding Fractions'){
        return(
            <div>
            <p className ="concept-title" >Adding Fractions</p>
        <div className='radio-button-container'>
        <div className= 'radio-button'>
            Incude: <br/>
            <input type="radio" id="Fractions Only" name="specify" onChange= {props.handleInput} value='Fractions Only'/>
            <label for="Fractions Only">Fractions Only</label><br/>
            <input type="radio" id="Mixed Numbers" name="specify" onChange= {props.handleInput} value='Mixed Numbers'/>
            <label for="Mixed Numbers">Mixed Numbers</label><br/>


            </div>
            <div className= 'radio-button'>
            Problem Level:<br/>
            <input type="radio" id="1" name="level" onChange= {props.handleInput} value={'1'}/>
            <label for="1">1</label><br/>
            <input type="radio" id="2" name="level" onChange= {props.handleInput} value={'2'}/>
            <label for="2">2</label><br/>
            <input type="radio" id="3" name="level" onChange= {props.handleInput} value={'3'}/>
            <label for="3">3</label>
        </div>
        </div>
        </div>
        )
    }else if (props.inputState.concept === 'Subtracting Fractions'){
        return(
            <div>
            <p className ="concept-title" >Subtracting Fractions</p>
        <div className='radio-button-container'>
        <div className= 'radio-button'>
        Incude: <br/>
            <input type="radio" id="Fractions Only" name="specify" onChange= {props.handleInput} value='Fractions Only'/>
            <label for="Fractions Only">Fractions Only</label><br/>
            <input type="radio" id="Mixed Numbers" name="specify" onChange= {props.handleInput} value='Mixed Numbers'/>
            <label for="Mixed Numbers">Mixed Numbers</label><br/>
            <input type="radio" id="Regrouping" name="specify" onChange= {props.handleInput} value='Regrouping'/>
            <label for="other">Regrouping</label><br/>

            </div>
            <div className= 'radio-button'>
            Problem Level:<br/>
            <input type="radio" id="1" name="level" onChange= {props.handleInput} value={'1'}/>
            <label for="1">1</label><br/>
            <input type="radio" id="2" name="level" onChange= {props.handleInput} value={'2'}/>
            <label for="2">2</label><br/>
            <input type="radio" id="3" name="level" onChange= {props.handleInput} value={'3'}/>
            <label for="3">3</label>
        </div>
        </div>
        </div>
        )
    }else if (props.inputState.concept === 'Multiplying Fractions'){
        return(
            <div>
            <p className ="concept-title" >Multiplying Fractions</p>

        <div className='radio-button-container'>
        <div className= 'radio-button'>
            Incude: <br/>
            <input type="radio" id="Fractions Only" name="specify" onChange= {props.handleInput} value='Fractions Only'/>
            <label for="Fractions Only">Fractions Only</label><br/>
            <input type="radio" id="Fractions x Whole Numbers" name="specify" onChange= {props.handleInput} value='Fractions x Whole Numbers'/>
            <label for="Fraction by Whole Number">Fraction by Whole Number</label><br/>
            <input type="radio" id="Mixed Numbers" name="specify" onChange= {props.handleInput} value='Mixed Numbers'/>
            <label for="Mixed Numbers">Mixed Numbers</label><br/>

            </div>
            <div className= 'radio-button'>
            Problem Level:<br/>
            <input type="radio" id="1" name="level" onChange= {props.handleInput} value={1}/>
            <label for="1">1</label><br/>
            <input type="radio" id="2" name="level" onChange= {props.handleInput} value={2}/>
            <label for="2">2</label><br/>
            <input type="radio" id="3" name="level" onChange= {props.handleInput} value={3}/>
            <label for="3">3</label>
        </div>
        </div>
        </div>
        )
    }else if (props.inputState.concept === 'Dividing Fractions'){
        return(
        <div>
            <p className ="concept-title" >Dividing Fractions</p>

            <div className='radio-button-container'>

            <div className= 'radio-button'>
            Incude: <br/>
                <input type="radio" id="Unit Fraction with Whole Number" name="specify" onChange= {props.handleInput} value='Unit Fraction with Whole Number'/>
                <label for="male">Unit Fraction with Whole Number</label><br/>
                <input type="radio" id="Fraction with Whole Number" name="specify" onChange= {props.handleInput} value='Fraction with Whole Number'/>
                <label for="female">Fraction with Whole Number</label><br/>
                <input type="radio" id="Fractions Only" name="specify" onChange= {props.handleInput} value='Fractions Only'/>
                <label for="Fractions Only">Fractions Only</label><br/>
                <input type="radio" id="Mixed Numbers" name="specify" onChange= {props.handleInput} value='Mixed Numbers'/>
                <label for="Mixed Numbers">Mixed Number</label><br/>

                </div>
                <div className= 'radio-button'>
                Problem Level:<br/>
                <input type="radio" id="1" name="level" onChange= {props.handleInput} value={1}/>
                <label for="1">1</label><br/>
                <input type="radio" id="2" name="level" onChange= {props.handleInput} value={2}/>
                <label for="2">2</label><br/>
                <input type="radio" id="3" name="level" onChange= {props.handleInput} value={3}/>
                <label for="3">3</label>
            </div>
            </div>
        </div>
        )
    }else if (props.inputState.concept === ''){
        return(
        <div className='radio-button-container'>
            <p></p>
        <div className= 'radio-button'>
        <br/>
            <input type="radio" id="" name="specify" onChange= {props.handleInput} value=''/>
            <label for="male"></label><br/>
            <input type="radio" id="" name="specify" onChange= {props.handleInput} value=''/>
            <label for="female"></label><br/>
            <input type="radio" id="" name="specify" onChange= {props.handleInput} value=''/>
            <label for="other"></label><br/>

            </div>
            <div className= 'radio-button'>
            Problem Level:<br/>
            <input type="radio" id="1" name="level" onChange= {props.handleInput} value={1}/>
            <label for="1">1</label><br/>
            <input type="radio" id="2" name="level" onChange= {props.handleInput} value={2}/>
            <label for="2">2</label><br/>
            <input type="radio" id="3" name="level" onChange= {props.handleInput} value={3}/>
            <label for="3">3</label>
        </div>
        </div>
        )
    }else if (props.inputState.concept === ''){
        return null
    }else if (props.inputState.concept === ''){
        return null
    } else {
        return <p>Select a concept to the left and then you will be able to customize it to fit the needs of your students. Once you are done adding questions select create worksheet to have your custom worksheet made!</p>

    }

}

export default ConceptCustomization