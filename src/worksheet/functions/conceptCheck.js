import {randAddWhole, randSubWhole} from "../problems/add-sub";
import {randOrderOps} from "../problems/order-of-ops";
import {randAddDec, randSubDec} from '../problems/add-sub-dec';
import {randMultDec} from '../problems/multiply-dec';
import {randDivDec} from '../problems/divide-dec';
import {randTable}from '../problems/tables';
import {randAddFract, randSubFract} from '../problems/add-sub-fract';
import {randDivFract} from '../problems/divide-fract'
import {randMultFract} from '../problems/multiply-fract'
import {randMultWhole}from '../problems/multiply';
import {randDivWhole} from '../problems/divide';
import { randArea, randPerimeter } from '../problems/area-perimeter';

export const conceptCheck = (userSelection, ) => {
  if (userSelection.concept === "Adding Whole Numbers") {
    return(randAddWhole)
  }else if (userSelection.concept === "Subtracting Whole Numbers") {
    return(randSubWhole)
  }else if (userSelection.concept === "Multiplying Whole Numbers") {      
    return(randMultWhole)
  }else if (userSelection.concept === "Dividing Whole Numbers") {
    return(randDivWhole)
    
  }else if (userSelection.concept === "Adding Decimals") {
    return(randAddDec)
  }else if (userSelection.concept === "Subtracting Decimals") {
    return(randSubDec)
  }else if (userSelection.concept === "Multiplying Decimals") {
    return(randMultDec)
  }else if (userSelection.concept === "Dividing Decimals") {
    return(randDivDec)
    
  }else if (userSelection.concept === "Adding Fractions") {
    return(randAddFract)
  }else if (userSelection.concept === "Subtracting Fractions") {
    return(randSubFract)
  }else if (userSelection.concept === "Multiplying Fractions") {
    return(randMultFract)
  }else if (userSelection.concept === "Dividing Fractions") {
    return(randDivFract)

  }else if (userSelection.concept === "Input Output Tables") {
    return(randTable)
  }else if (userSelection.concept === "Area") {
    return(randArea)
  }else if (userSelection.concept === "Perimeter") {
    return(randPerimeter)
  }else if (userSelection.concept === "Order of Operations") {
    return(randOrderOps)

  }
}