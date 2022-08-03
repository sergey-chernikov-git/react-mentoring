import React from 'react';
import successImg from './../assets/img/notifications/success/success.png';
import errorImg from './../assets/img/notifications/error/error.png';
import { TNotificationProps } from '../ts-types/props';

const NotificationMemo = ({ type, message, description, onClose }: TNotificationProps) => {
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

export  const Notification = React.memo(NotificationMemo)
