import React from 'react';
import { MenuPanelHOC } from './MenuPanelHOC';

const MenuPanelWrapped = ({ children }: any) => {
  return (
    <>
      <div className="menu-panel">
        <div className="gender-menu-panel">
          {children} 
        </div>
      </div>
    </>
  );
};

export const MenuPanel = MenuPanelHOC(MenuPanelWrapped)
