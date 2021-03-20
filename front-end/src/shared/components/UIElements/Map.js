import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import "./Map.css";
//useEffect allows you to input function that can execute when certain inputs change
//useRef can create referenes which can be used to get a reference/pointer to a real dom node. with REST, create variables which survive re-render
const Map = (props) => {
  const mapRef = useRef();

  const {center, zoom} = props; //pulls elements out of props so you dont have to do props. Allows you to use the props inside hte useEffect without it changing anytime any props change.

  useEffect(()=>{
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });
    new window.google.maps.Marker({ position: center, map: map });

  }, [center, zoom]);




  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
