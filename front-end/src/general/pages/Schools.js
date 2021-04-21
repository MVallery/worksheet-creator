import { React } from "react";
import { Link } from "react-router-dom";

import Teaching from "../../app-files/images/teaching.svg";
import Ex1 from '../../app-files/images/orderops1.png';
import Ex2 from '../../app-files/images/orderops2.png';
import Ex3 from '../../app-files/images/orderops2A.png';
import Ex4 from '../../app-files/images/orderops2B.png';
import TeachEx2 from '../../app-files/images/tables.png';
import TeachEx1 from '../../app-files/images/fractions.png';
import TeachEx3 from '../../app-files/images/adddec.png'
import "./general.css";
import './home.css'
const Schools = () => {
  return (
    <div className="main-general-container">
      <div className="header">
        <div className="header-center">
          <div>
            <h1>Get Infinite Math for your school</h1>
            <img src={Teaching} alt="teaching"></img>

            <p>Save your teachers hundreds of hours of planning time!</p>

            <div className="signup">
              <Link className="main-button" to="/signup">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="infinite-section-container">
      <div className="teacher-ex-container">
        <img className="teacher-ex schoolex1" src={TeachEx1} alt="order of operations small whole numbers 3 steps"/>
        <img className="teacher-ex schoolex2" src={TeachEx2} alt="order of operations large whole numbers 3 steps"/>
        <img className="teacher-ex schoolex3" src={TeachEx3} alt="order of operations small whole numbers 4 steps"/>

        </div>
        <div className="infinite-description-container">
            <p style={{paddingLeft: '3%'}}>No more searching for the perfect resource. We <span className="bold3">randomly</span> generate all assignments so your teachers will be able to make <span className="bold2">infinite</span> versions of fully customized assignments.<span className="bold3"></span> </p>
          </div>
        </div>
      <div className="differentiate-section-container">
        <div className="differentiate-description-container">
          <p>Problems are <span className="bold3">aligned</span> to standards and teachers can <span className="bold1">differentiate</span> assignments based on their student's needs</p>
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
          <p>We keep teachers, students, schools, and curriculum in mind when creating problems. Our problems are well aligned to the curriculum  <span className="bold1">customizations</span> and problem types with <span className="bold1">teachers</span> and <span className="bold2">students</span> in mind.</p>
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
          <h3>Made for teachers</h3>
          <img className="info-card-icons" src={Teacher} alt="teacher"></img>

          <p>
            With Infinite Math Teachers can easily make assessments,
            re-assessments, and differentiated assignments at the click of a
            button. This will save hundreds of hours of planning time, and help
            teachers drive their instruction by focusing on other areas.
          </p>
        </div>
        <div className="info-card">
          <h3>Customize & Differentiate</h3>
          <img className="info-card-icons" src={Students} alt="students"></img>

          <p>
            Help your teachers truly be able to differentiate their assignments
            to meet the needs of all their students. Normally creating 3
            different versions of an assignment would take time and effort, but
            with Infinite math it can be done instantly.
          </p>
        </div>
      </div>
      <div className="info-card-container">
        <div className="info-card">
          <h3>School-Wide Assessments</h3>
          <img className="info-card-icons" src={Clock} alt="clock"></img>

          <p>
            Quickly make school or district-wide assessments: <br />
          </p>
            <ul>
              <li>Tailored to your curriculum pacing</li>
              <li>Aligned to your content standards</li>
              <li>
                *Generated answer key for ease of grading or entering to digital
                platform
                <br />
              </li>
            </ul>
          
        </div>

        <div className="info-card">
          <h3>Infinite</h3>
          <img className="info-card-icons" src={Dice} alt="dice"></img>

          <p>
            Since our program randomly generates the problems your teachers
            create an endless amount of activities for their students. <br />
          </p>
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

export default Schools;
