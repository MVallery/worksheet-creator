import { Link } from "react-router-dom";
import { React } from "react";
import Dice from "../../app-files/images/dice.png";
import Students from "../../app-files/images/students.png";
import Teacher from "../../app-files/images/teacher.png";
import Clock from "../../app-files/images/clock.png";
import "./home.css";
const Home = (props) => {
  return (
    <div className="main-container">
      <div className="picture-background">
        <div className="title-banner">
          <div className="title">
            <div>
              <h1>
                <span className="in">IN</span>
                <span className="finite">finite</span> Math
              </h1>
            </div>
          </div>
          <div>
            <h2>Worksheet Creator</h2>
            <p>
              Create fully customized math worksheets with the click of a
              button.
            </p>
          </div>
          {/* <img className= "infinity" src={InfinitySymbol}></img> */}
        </div>

        <div className="create-assign-container">
          <Link className="create-assign-button" to="/concept-selection">
            Create now!
          </Link>
        </div>
      </div>
      <div className="info-card-container">
        <div className="info-card">
          <h3>Made for teachers</h3>
          <img className="info-card-icons" src={Teacher} alt="teacher"></img>

          <p>
            Quickly create assignments for your students aligned with your
            standards and your students needs
          </p>
        </div>
        <div className="info-card">
          <h3>Customize & Differentiate</h3>
          <img className="info-card-icons" src={Students} alt="students"></img>

          <p>
            Truly customize and differentiate your assignments to meet the needs
            of all of your students.
          </p>
        </div>
      </div>
      <div className="info-card-container">
        <div className="info-card">
          <h3>Instant</h3>
          <img className="info-card-icons" src={Clock} alt="clock"></img>

          <p>
            After making your selections you will almost instantly have have a
            unique assignment to use with your students that is perfectly
            formatted and ready to download!
          </p>
        </div>
        <div className="info-card">
          <h3>Infinite</h3>
          <img className="info-card-icons" src={Dice} alt="dice"></img>

          <p>
            Since our program uses randomly generated problems you can create an
            almost infinite amount of worksheets that are uniquely made based on
            your selections.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
