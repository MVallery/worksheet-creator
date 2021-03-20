import React, {useState} from 'react';
import { Link } from "react-router-dom";

import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import Backdrop from '../UIElements/Backdrop'
import './MainNavigation.css';

const MainNavigation = props => { //all passed between MainHeader = "props.chidlren" on MainHeader
  const [drawerIsOpen, setDrawerIsOpen]  = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  }
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  }
  return (
      <React.Fragment> 
        {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>} 
          <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
            <nav className='main-navigation__drawer-nav'>
              <NavLinks handleClearSelections={props.handleClearSelections}/>
            </nav>
          </SideDrawer>
        <MainHeader>
          <button className="main-navigation__menu-btn" onClick= {openDrawerHandler}>
            <span/>
            <span/>
            <span/>
          </button>
          <nav className='main-navigation__header-nav'> 
            <NavLinks handleClearSelections={props.handleClearSelections}/>
          </nav>
        </MainHeader>
      </React.Fragment>
    )
}

export default MainNavigation