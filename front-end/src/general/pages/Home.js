import { Link } from "react-router-dom";
import { React } from "react";

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
import './home.css';
const Home = (props) => {
  return (
    <div className="general-main-container home-container">
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
              Instantly create fully customized math worksheets
            </p>
          </div>
        </div>

        <div className="main-button-container">
          <Link className="main-button" to="/concept-selection">
            Create now!
          </Link>
        </div>
      </div>
      <div className="differentiate-section-container">
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
        <img className="infinite-remakepdf" src={RemakePDF}></img>
        <div className="infinite-description-container">
            <p>We <span className="bold3">randomly</span> generate all assignments so that you can make <span className="bold2">infinite</span> versions to reduce copying, do partner work, or <span className="bold3">re-assess</span> </p>
        </div>
      </div>
      <div className="teacher-section-container">
        <div className="teacher-description-container">
        <p>Problems are thoughtfully created with <span className="bold1">teachers</span> and <span className="bold2">students</span> in mind</p>
        </div>
        <div className="teacher-ex-container">
        <img className="teacher-ex Tex1" src={TeachEx1} alt="order of operations small whole numbers 3 steps"/>
        <img className="teacher-ex Tex2" src={TeachEx2} alt="order of operations large whole numbers 3 steps"/>
        <img className="teacher-ex Tex3" src={TeachEx3} alt="order of operations small whole numbers 4 steps"/>

        </div>
      </div>

    </div>
  );
};

export default Home;
