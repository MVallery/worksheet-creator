import React, { useContext, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Avatar from "../UIElements/Avatar";
import { AuthContext } from "../../context/auth-context";
import "./NavLinks.css";
import { useHttpClient } from "../../hooks/http-hook";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);
  return (
    <ul className="nav-links">
      <Link to="/" className="logo">
        <h1 className="infinite-math-small">
          <span className="in-small">IN</span>
          <span className="finite-small">finite</span> Math
        </h1>
      </Link>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/concept-selection">
            <button className="new-worksheet" onClick={props.handleClearSelections}>New Worksheet</button>
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/myworksheets">My Collection</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>
            Log out
          </button>
        </li>
      )}

      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/parents">Parents</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/teachers">Teachers</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/schools">Schools</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/concept-selection">
          <button className="new-worksheet" onClick={props.handleClearSelections}>Try for Free</button>

          </NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">Sign in</NavLink>
        </li>
      )}

    </ul>
  );
};

export default NavLinks;
