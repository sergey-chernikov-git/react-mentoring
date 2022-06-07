import React from 'react';
import successImg from './../assets/img/notifications/success/success.png';
import errorImg from './../assets/img/notifications/error/error.png';

export const Notification = ({ type, message, description, onClose }) => {
  return (
    <div id={'notification' + type} className="notification" onClick={() => onClose()}>
      <div>
        <img src={type !== 'success' ? errorImg : successImg}></img>
      </div>
      <h2>{message}</h2>
      <h4>{description}</h4>
    </div>
  );
};
