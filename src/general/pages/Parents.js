import { React } from "react";
import { Link } from "react-router-dom";

import Dice from "../../app-files/images/dice.png";
import Students from "../../app-files/images/students.png";
import Teacher from "../../app-files/images/teacher.png";
import Child from "../../app-files/images/child.svg";
import Clock from "../../app-files/images/clock.png";
import "./general.css";

const Parents = () => {
  return (
    <div>
      <div className="header">
        <div className="header-center">
          <div>
            <h1>Create custom assignments at home </h1>
            <p>
              Infinite math can help your child succeed whether they need more support, or more of a challenge. 
            </p>
            <div className="signup">
              <Link className="main-button" to="/auth">
                Sign up now!
              </Link>
            </div>
          </div>
          <div>
            <img src={Child} alt="child"></img>
          </div>
        </div>
      </div>

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
            endless amount of activities for your child. <br />
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

export default Parents;
