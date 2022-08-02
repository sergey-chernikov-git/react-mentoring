import React from 'react';

export const MenuPanelHOC = (WrappedComponent : any) => {
    class HOC extends React.Component {
        render() {
            return (
            <>
            <div className="horisontal-line"></div>
              <WrappedComponent {...this.props}/>
            <div className="menu-horisontal-splitter"></div>
          </>
          )
        }
      }
    return HOC
};
