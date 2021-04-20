import { React } from "react";
import { Link } from "react-router-dom";
import Dice from "../../app-files/images/dice.png";
import Students from "../../app-files/images/students.png";
import Teacher from "../../app-files/images/teacher.png";
import Education from "../../app-files/images/education.svg";
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

const Teachers = () => {
  return (
    <div className="main-general-container">
      <div className="header">
        <div className="header-center">
          <div>
            <h1>
              Instantly create custom assignments for your students!
            </h1>
          <img  src={Education} alt="education"></img>

            <p>
              Let infinite math do all the work so you can save hundreds of hours of planning time.
            </p>
            <div className="signup">
              <Link className="main-button" to="/signup">
                Sign up now!
              </Link>
            </div>
          </div>

        </div>
      </div>


      <div className="differentiate-section-container" style={{backgroundColor:'var(--main-color)'}}>
        <div className="differentiate-description-container">
          <p>Assignments can be <span className="bold1">differentiated</span> and <span className="bold3">customized</span> to meet the needs of your students</p>
          <img className="differentiate-conceptCustomize" src={ConceptCustomizeEx}></img>
        </div>
        <div className="differentiate-ex-container">
        <img className="differentiate-ex ex1" src={Ex1} alt="order of operations small whole numbers 3 steps"/>
        <img className="differentiate-ex ex2" src={Ex2} alt="order of operations large whole numbers 3 steps"/>
        <img className="differentiate-ex ex3" src={Ex3} alt="order of operations small whole numbers 4 steps"/>
        <img className="differentiate-ex ex4" src={Ex4} alt="order of operations small wholenumbers 5 steps"/>

        </div>
      </div>
      <div className="infinite-section-container">
        {/* <div> */}
        <img className="infinite-remakepdf" src={RemakePDF}></img>

        {/* </div> */}
        <div className="infinite-description-container">
            <p>We <span className="bold3">randomly</span> generate all assignments so that you can make <span className="bold2">infinite</span> versions to reduce copying, do partner work, or <span className="bold3">re-assessments</span> </p>
          </div>
        </div>
      <div className="teacher-section-container">
        <div className="teacher-description-container">
          <p>Problems are thoughtfully created with <span className="bold1">teachers</span> and <span className="bold2">students</span> in mind.</p>
          {/* <img className="differentiate-conceptCustomize" src={ConceptCustomizeEx}></img> */}
        </div>
        <div className="teacher-ex-container">
        <img className="teacher-ex Tex1" src={TeachEx1} alt="order of operations small whole numbers 3 steps"/>
        <img className="teacher-ex Tex2" src={TeachEx2} alt="order of operations large whole numbers 3 steps"/>
        <img className="teacher-ex Tex3" src={TeachEx3} alt="order of operations small whole numbers 4 steps"/>

        </div>
      </div>


{/* 


      <div className="info-card-container">
        <div className="info-card">
          <h3>Differentiate</h3>
          <img className="info-card-icons" src={Students} alt="students"></img>

          <p>
            Customize your assignments to meet the needs of every student in
            your room. You can quickly create many versions of your assignments
            tailored to your students individual needs.
          </p>
        </div>

        <div className="info-card">
          <h3>Multiple Versions</h3>
          <img className="info-card-icons" src={Clock} alt="clock"></img>

          <p>
            Make multiple versions of assignments to: <br />
            <ul>
              <li>Prevent copying during assessments</li>
              <li>Create a review prior to an assessment</li>
              <li>Create re-teach material for struggling students</li>
              <li>Create multiple re-tests for students who failed</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="info-card-container">
        <div className="info-card">
          <h3>Spiral</h3>
          <img className="info-card-icons" src={Dice} alt="dice"></img>

          <p>
            Easily create assignments that spiral back to older concepts so that
            students do not forget. With Infinite Math you can mix and match any
            concepts to create a truly unique assignment.
          </p>
        </div>
        <div className="info-card">
          <h3>Infinite</h3>
          <img className="info-card-icons" src={Dice} alt="dice"></img>

          <p>
            Since our program randomly generates the problems you can create an
            endless amount of activities for your students. <br />
            <ul>
              <li>Homework</li>
              <li>Warm-ups</li>
              <li>Assessments</li>
              <li>Re-Assessments</li>
              <li>Differentiated Classwork</li>
              <li>Small group work</li>
            </ul>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Teachers;
