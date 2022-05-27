import React from 'react';
import { hideElementById } from './../logic/elementOperations.js';
import successImg from './../assets/img/notifications/success/success.png';
import errorImg from './../assets/img/notifications/error/error.png';

export const Notification = ({ type, message, description }) => {
  return (
    <div
      id={'notification' + type}
      className="notification"
      onClick={(e) => hideElementById(e.currentTarget.id)}
    >
      <div>
        <img src={type != 'success' ? errorImg : successImg}></img>
      </div>
      <h2>{message}</h2>
      <h4>{description}</h4>
    </div>
  );
};
