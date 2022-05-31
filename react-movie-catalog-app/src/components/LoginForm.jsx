import React from 'react';
import { hideElementById } from './../logic/elementOperations.js';

export const LoginForm = () => {
  return (
    <>
      <div
        className="window-overlay"
        id="login-window-overlay"
        onClick={(e) => {
          hideElementById(e.currentTarget.id);
        }}
      ></div>
      <div className="login-form" id="login-form">
        <div>Log In</div>
        <div>
          <div>User ID</div>
          <input type="text" className="tight-input"></input>
        </div>
        <div>
          <div>Password</div>
          <input type="password" className="tight-input"></input>
        </div>
        <div>
          <input className="reset-button" type="submit" value="Reset"></input>
          <input
            className="submit-button"
            type="submit"
            value="Log In"
            onClick={() => hideElementById('movie-add')}
          ></input>
        </div>
      </div>
    </>
  );
};
