import React from 'react';

export const Notification = ({ type, message, description }) => {
  return (
    <div className="notification">
      <div className={'notification-' + type}>
        <div></div>
      </div>
      <label>{message}</label>
      <label>{description}</label>
    </div>
  );
};
