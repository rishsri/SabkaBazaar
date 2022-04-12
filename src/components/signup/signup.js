import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./style.css";
import * as RegexPattern from "../../Regex/regex";

export default function Signup() {
  const [state, setState] = useState({});
  const [touchValidate, setTouchValidate] = useState(false);

  const handleChange = (e) => {
    setState((preState) => ({ ...preState, [e.target.name]: e.target.value }));
    setTouchValidate(false);
  };

  const hasError = (field) => {
    let error;
    switch (field) {
      case "validateFirstName":
        if (!state.firstName) {
          error = "Field cannot be empty";
        } else if(state.firstName.match(RegexPattern.namePattern)){
          error = "Invalid Name"
        }
        break;
      case "validateLastName":
        if (!state.lastName) {
          error = "Field cannot be empty";
        } else if(state.lastName.match(RegexPattern.namePattern)){
          error = "Invalid Name"
        }
        break;
      case "validateEmail":
        if (!state.email) {
          error = "Field cannot be empty";
        }
        break;
      case "validatePassword":
        if (!state.password) {
          error = "Field cannot be empty";
        }
        break;
      case "validateConformPassword":
        if (!state.conformPassword) {
          error = "Field cannot be empty";
        } 
       else  if (state.conformPassword !== state.password) {
          error = "Password does not match";
        }
        break;
      default:
        break;
    }
    return error;
  };

  const validateBookingId = () => {
    if (
      hasError("validateFirstName") ||
      hasError("validateLastName") ||
      hasError("validateEmail") ||
      hasError("validatePassword") ||
      hasError("validateConformPassword")
    ) {
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    setTouchValidate(true);
    if (!validateBookingId()) {
      return;
    }
    console.log("data Submit");
  };

  return (
    <div className="signup-form-container">
      <div className="h1-form">
          <h1>
              Sign Up
          </h1>
          <h5>We do not share your persnal detials with anyone</h5>
          </div>
      <div className="text-field">
        <TextField
          className="style-text"
          id="standard-password-input"
          label="First Name"
          type="text"
          variant="standard"
          name={"firstName"}
          value={state.firstName}
          onChange={handleChange}
          error={hasError("validateFirstName") && touchValidate}
          helperText={
            hasError("validateFirstName") && touchValidate
              ? hasError("validateFirstName")
              : null
          }
        />
        <TextField
          className="style-text"
          id="standard-password-input"
          label="Last Name"
          type="text"
          variant="standard"
          name={"lastName"}
          value={state.lastName}
          onChange={handleChange}
          error={hasError("validateLastName") && touchValidate}
          helperText={
            hasError("validateLastName") && touchValidate
              ? hasError("validateLastName")
              : null
          }
        />
        <TextField
          className="style-text"
          id="standard-password-input"
          label="Email"
          type="email"
          variant="standard"
          name={"email"}
          value={state.email}
          onChange={handleChange}
          error={hasError("validateEmail") && touchValidate}
          helperText={
            hasError("validateEmail") && touchValidate
              ? hasError("validateEmail")
              : null
          }
        />
        <TextField
          className="style-text"
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          name={"password"}
          value={state.password}
          onChange={handleChange}
          error={hasError("validatePassword") && touchValidate}
          helperText={
            hasError("validatePassword") && touchValidate
              ? hasError("validatePassword")
              : null
          }
        />
        <TextField
          className="style-text"
          id="standard-password-input"
          label="Conform Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          name={"conformPassword"}
          value={state.conformPassword}
          onChange={handleChange}
          error={hasError("validateConformPassword") && touchValidate}
          helperText={
            hasError("validateConformPassword") && touchValidate
              ? hasError("validateConformPassword")
              : null
          }
        />
        <div className="submit-btn">
          <Button variant="contained" onClick={onSubmit}>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}
