import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";




function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="createSpot__container">
      <div className="createSpot__banner">
        <h1>Sign Up Today!</h1>
      </div>
      <div className="createSpot__wrapper">
        <div className="signup__form">
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label>Email</label>
            <input
            className="signupPage__input-field"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          <label>Username</label>
            <input
            className="signupPage__input-field"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

          <label>Password</label>
            <input
            className="signupPage__input-field"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          <label>Confirm Password</label>
            <input
            className="signupPage__input-field"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          <div className="signup__button-container">
            <button className="signupPage__button" type="click" onClick={handleSubmit}>Sign Up</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SignupFormPage;
