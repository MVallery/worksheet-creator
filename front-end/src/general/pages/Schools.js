import { React } from "react";
import { Link } from "react-router-dom";

import Dice from "../../app-files/images/dice.png";
import Students from "../../app-files/images/students.png";
import Teacher from "../../app-files/images/teacher.png";
import Teaching from "../../app-files/images/teaching.svg";
import Clock from "../../app-files/images/clock.png";
import "./general.css";
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
      </div>
    </div>
  );
};

export default Schools;
