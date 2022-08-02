import React from 'react';

export const MenuPanel = (props: React.PropsWithChildren) => {
  return (
    <>
      <div className="horisontal-line"></div>
      <div className="menu-panel">
        <div className="gender-menu-panel">
          {props.children} 
        </div>
      </div>
      <div className="menu-horisontal-splitter"></div>
    </>
  );
};
