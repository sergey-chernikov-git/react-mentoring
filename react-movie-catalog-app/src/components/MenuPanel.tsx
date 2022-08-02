import React from 'react';

export const MenuPanel = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <div className="horisontal-line"></div>
      <div className="menu-panel">
        <div className="gender-menu-panel">
          {children} 
        </div>
      </div>
      <div className="menu-horisontal-splitter"></div>
    </>
  );
};
