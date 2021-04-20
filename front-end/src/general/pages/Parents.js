import { React } from "react";
import { Link } from "react-router-dom";

import Dice from "../../app-files/images/dice.png";
import Students from "../../app-files/images/students.png";
import Teacher from "../../app-files/images/teacher.png";
import Child from "../../app-files/images/child.svg";
import Clock from "../../app-files/images/clock.png";
import Ex1 from '../../app-files/images/orderops1.png';
import Ex2 from '../../app-files/images/orderops2.png';
import Ex3 from '../../app-files/images/orderops2A.png';
import Ex4 from '../../app-files/images/orderops2B.png';
import TeachEx2 from '../../app-files/images/tables.png';
import TeachEx1 from '../../app-files/images/fractions.png';
import TeachEx3 from '../../app-files/images/adddec.png'
import RemakePDF from '../../app-files/images/remakepdf2.png'
import ConceptCustomizeEx from '../../app-files/images/customize.png';
import "./general.css";
import './home.css'

const Parents = () => {
  return (
    <div className="main-general-container">
      <div className="header">
        <div className="header-center">
          <div>
            <h1>Create custom assignments at home </h1>
            <img src={Child} alt="child"></img>

            <p>
              Infinite math can help your child succeed whether they need more support, or more of a challenge. 
            </p>

            <div className="signup">
              <Link className="main-button" to="/signup">
                Sign up now!
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="infinite-section-container">
        {/* <div> */}
        <img className="infinite-remakepdf" src={RemakePDF}></img>

        {/* </div> */}
        <div className="infinite-description-container">
            <p>We <span className="bold3">randomly</span> generate all assignments so that you can make <span className="bold2">infinite</span> versions. With infinite math you will <span className="bold3">never</span> run out of problems. </p>
          </div>
        </div>

      <div className="differentiate-section-container">
        <div className="differentiate-description-container">
          <p>Create <span className="bold2">custom</span> assignments at exactly your child's <span className="bold1">level</span> and build up the difficulty over time as they <span className="bold2">master</span> the content</p>
          <img className="differentiate-conceptCustomize" src={ConceptCustomizeEx}></img>
        </div>
        <div className="differentiate-ex-container">
        <img className="differentiate-ex ex1" src={Ex1} alt="order of operations small whole numbers 3 steps"/>
        <img className="differentiate-ex ex2" src={Ex2} alt="order of operations large whole numbers 3 steps"/>
        <img className="differentiate-ex ex3" src={Ex3} alt="order of operations small whole numbers 4 steps"/>
        <img className="differentiate-ex ex4" src={Ex4} alt="order of operations small wholenumbers 5 steps"/>

        </div>
      </div>

      {/* <div className="teacher-section-container">
        <div className="teacher-description-container">
          <p>We create <span className="bold1">customizations</span> and problem types with <span className="bold1">teachers</span> and <span className="bold2">students</span> in mind.</p>
        </div>
        <div className="teacher-ex-container">
        <img className="teacher-ex Tex1" src={TeachEx1} alt="order of operations small whole numbers 3 steps"/>
        <img className="teacher-ex Tex2" src={TeachEx2} alt="order of operations large whole numbers 3 steps"/>
        <img className="teacher-ex Tex3" src={TeachEx3} alt="order of operations small whole numbers 4 steps"/>

        </div>
      </div> */}


{/* 

      <div className="info-card-container">
        <div className="info-card">
          <h3>Support</h3>
          <img className="info-card-icons" src={Teacher} alt="teacher"></img>

          <p>
            Many times students need a bit of extra practice in order to succeed
            in math. They also need to be working at their optimal learning
            zone.
            <br /> With Infinite math you can easily adjust assignments to your
            child's level so they can feel success as they slowly move to more
            difficult work over time.
          </p>
        </div>
        <div className="info-card">
          <h3>Challenge</h3>
          <img className="info-card-icons" src={Students} alt="students"></img>

          <p>
            Sometimes students get bored because they need to be challenged.
            With Infinite math their assignments can be aligned to their level.
          </p>
        </div>
      </div>
      <div className="info-card-container">
        <div className="info-card">
          <h3>School Breaks</h3>
          <img className="info-card-icons" src={Clock} alt="clock"></img>

          <p>
            Help your child retain or even enhance their learning during long
            school breaks by continuing to practice their math skills at home.
          </p>
        </div>

        <div className="info-card">
          <h3>Homeschooling</h3>
          <img className="info-card-icons" src={Dice} alt="dice"></img>

          <p>
            Since our program randomly generates the problems you can create an
            endless amount of activities for your child. <br /></p>
            <ul>
              <li>Homework</li>
              <li>Warm-ups</li>
              <li>Assessments</li>
              <li>Re-Assessments</li>
              <li>Differentiated Classwork</li>
              <li>Small group work</li>
            </ul>
          
        </div>
      </div> */}
    </div>
  );
};

export default Parents;
