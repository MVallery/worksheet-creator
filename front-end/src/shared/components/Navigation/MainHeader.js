import React from 'react';

import './MainHeader.css';
 //children always refers to things you pass between open and closing tags of component.
const MainHeader = props => {
  return <header className="main-header">
    {props.children}
  </header>
}

export default MainHeader