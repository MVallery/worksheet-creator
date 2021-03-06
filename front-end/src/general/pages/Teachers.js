import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import Education from "../../app-files/images/education.svg";
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
import "aos/dist/aos.css";

import './home.css';
import AOS from 'aos';

const Teachers = () => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
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
        <img data-aos="fade-up-left" className="differentiate-ex ex1" src={Ex1} alt="order of operations small whole numbers 3 steps"/>
        <img data-aos="fade-up-left" className="differentiate-ex ex2" src={Ex2} alt="order of operations large whole numbers 3 steps"/>
        <img data-aos="fade-up-left" className="differentiate-ex ex3" src={Ex3} alt="order of operations small whole numbers 4 steps"/>
        <img data-aos="fade-up-left" className="differentiate-ex ex4" src={Ex4} alt="order of operations small wholenumbers 5 steps"/>

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
        <img data-aos="fade-up" data-aos-anchor-placement="top-center" className="teacher-ex Tex1" src={TeachEx1} alt="order of operations small whole numbers 3 steps"/>
        <img data-aos="fade-up" data-aos-anchor-placement="top-center" className="teacher-ex Tex2" src={TeachEx2} alt="order of operations large whole numbers 3 steps"/>
        <img data-aos="fade-up" data-aos-anchor-placement="top-center" className="teacher-ex Tex3" src={TeachEx3} alt="order of operations small whole numbers 4 steps"/>

        </div>
      </div>

    </div>
  );
};

export default Teachers;
