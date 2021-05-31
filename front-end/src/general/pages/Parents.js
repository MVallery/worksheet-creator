import { React, useEffect } from "react";
import { Link } from "react-router-dom";

import Child from "../../app-files/images/child.svg";
import Ex1 from '../../app-files/images/orderops1.png';
import Ex2 from '../../app-files/images/orderops2.png';
import Ex3 from '../../app-files/images/orderops2A.png';
import Ex4 from '../../app-files/images/orderops2B.png';
import RemakePDF from '../../app-files/images/remakepdf2.png'
import ConceptCustomizeEx from '../../app-files/images/customize.png';
import "./general.css";
import './home.css'
import AOS from 'aos';
import "aos/dist/aos.css"

const Parents = () => {
  useEffect(() => {
    AOS.init({
      duration:2000
    });

  }, []);
  return (
    <div className="main-general-container">
      <div className="header">
        <div className="header-center">
          <div>
            <h1>Create custom assignments at home </h1>
            <img src={Child} alt="child"></img>
            <p>Infinite math can help your child succeed whether they need more support, or more of a challenge. </p>

            <div className="signup">
              <Link className="main-button" to="/signup">
                Sign up now!
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="infinite-section-container">
        <img className="infinite-remakepdf" src={RemakePDF}></img>

        <div className="infinite-description-container">
            <p>We <span className="bold3">randomly</span> generate all assignments so that you can make <span className="bold2">infinite</span> versions. With infinite math you will <span className="bold3">never</span> run out of problems</p>
        </div>
      </div>

      <div className="differentiate-section-container">
        <div className="differentiate-description-container">
          <p>Create <span className="bold3">custom</span> assignments at exactly your child's <span className="bold1">level</span> and build up the difficulty over time as they <span className="bold3">master</span> the content</p>
          <img className="differentiate-conceptCustomize" src={ConceptCustomizeEx}></img>
        </div>
        <div className="differentiate-ex-container">
        <img data-aos="fade-up-left" className="differentiate-ex ex1" src={Ex1} alt="order of operations small whole numbers 3 steps"/>
        <img data-aos="fade-up-left" className="differentiate-ex ex2" src={Ex2} alt="order of operations large whole numbers 3 steps"/>
        <img data-aos="fade-up-left" className="differentiate-ex ex3" src={Ex3} alt="order of operations small whole numbers 4 steps"/>
        <img data-aos="fade-up-left" className="differentiate-ex ex4" src={Ex4} alt="order of operations small wholenumbers 5 steps"/>

        </div>
      </div>

    </div>
  );
};

export default Parents;
