import { React } from "react";
import { Link } from "react-router-dom";
import Dice from "../../app-files/images/dice.png";
import Students from "../../app-files/images/students.png";
import Teacher from "../../app-files/images/teacher.png";
import Education from "../../app-files/images/education.svg";
import Clock from "../../app-files/images/clock.png";
import "./general.css";

const Teachers = () => {
  return (
    <div>
      <div className="header">
        <div className="header-center">
          <div>
            <h1>
              Instantly create custom assignments for your students!
            </h1>
            <p>
              Let infinite math do all the work so you can save hundreds of hours of planning time.
            </p>
            <div className="signup">
              <Link className="main-button" to="/auth">
                Sign up now!
              </Link>
            </div>
          </div>
          <div>
          <img  src={Education} alt="education"></img>
          </div>
        </div>
      </div>

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
      </div>
    </div>
  );
};

export default Teachers;
