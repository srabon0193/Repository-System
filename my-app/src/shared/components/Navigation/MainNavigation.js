import React, { useState} from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';

const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };

  return (
    <React.Fragment>
        {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
            <nav className="main-navigation__drawer-nav">
                <NavLinks/>
            </nav>
        </SideDrawer>)
    <MainHeader>
      <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
        <span />
        <span />
        <span />
      </button>
      <Link to="/" className="main-navigation__logo">
      <img src={"https://upload.wikimedia.org/wikipedia/en/0/05/Adamas_University_Logo.png"} alt= "Adamas-logo"/>
      </Link>
      <h1 className="main-navigation__title">
        <Link to="/">AUDRS</Link>
      </h1>
      <nav className="main-navigation__header-nav">
        <NavLinks/>
      </nav>
    </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
