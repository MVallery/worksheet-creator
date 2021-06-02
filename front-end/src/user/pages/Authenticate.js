import React, { useState, useContext, useEffect } from "react";
import {useLocation} from 'react-router-dom';
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import {useHttpClient} from '../../shared/hooks/http-hook'
import "./Authenticate.css";
import { AuthContext } from "../../shared/context/auth-context";

const Authenticate = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const {isLoading, error, sendRequest, clearError} = useHttpClient();  
  const [formState, inputHandler, setFormData] = useForm(
    //(initialInputs,initialInputValidity) returns [newState, inputHandler]
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
          // image: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
          // image: {
          //   value: null,
          //   isValid: false
          // }
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };
  const authSubmitHandler = async (event) => {
    event.preventDefault();
    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          `/api/users/login`, 
          "POST",
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
          }),
          {
            'Content-Type': 'application/json'
          }
        )
        auth.login(responseData.userId, responseData.token);
      } catch (err) {
      }

    } else {
      try {
        const responseData = await sendRequest(
          `/api/users/signup`, 
          'POST', 
          JSON.stringify({
            email: formState.inputs.email.value,
            name: formState.inputs.name.value,
            password: formState.inputs.password.value
          }),
          {
          'Content-Type': 'application/json',
          }


        );

        auth.login(responseData.userId, responseData.token);
      } catch (err) {
      }
    }
  };
  let location = useLocation()
  useEffect(() => {
    if (location.pathname==='/signup') {
      switchModeHandler()
    }
    if (location.pathname==='/login') {
      switchModeHandler()
    }
}, [location])
  // if (location.pathname==='/signup') {
  //   switchModeHandler()
  // }
  return (
    <React.Fragment>
      <div className="authenticate-container">
      <ErrorModal error= {error} onClear={clearError}/>
    <Card className="authentication">
      {isLoading && <LoadingSpinner asOverlay />}
      {!isLoginMode ? <h2>Sign up</h2> :<h2>Login Required</h2>}
      
      {/* <h2>Login Required</h2> */}
      <hr />

      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name"
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          element="input"
          type="text"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email."
          onInput={inputHandler}
        />
        {/* {!isLoginMode && <ImageUpload center id="image" onInput = {inputHandler} errorText="Please provide an image"/>} */}
        <Input
          id="password"
          element="input"
          type="text"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Please enter a valid password at least 6 characters."
          onInput={inputHandler}
        />

        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
      </Button>
    </Card>
    </div>
    </React.Fragment>
  );
};

export default Authenticate;

//include a useForm that renders email and password field, validation- util password at least 5 characters,
