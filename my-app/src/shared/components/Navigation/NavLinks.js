import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
  const auth=useContext(AuthContext);
  
  return <ul className="nav-links">
    <li className='dropdown'>
      <NavLink to="/S1/publications" className="dropbtn" >SOET</NavLink>
      <div className='dropdown-content'>
        <NavLink to="/">Computer Science & Engineering</NavLink>
        <NavLink to="/">Civil Engineering</NavLink>
        <NavLink to="/">Electrical and Electronic Engineering</NavLink>
        <NavLink to="/">Mechanical Engineering</NavLink>
      </div>
    </li>
    <li className='dropdown'>
      <NavLink to="/S2/publications" className="dropbtn">SOMC</NavLink>
      <div className='dropdown-content'>
        <NavLink to="/">Journalism</NavLink>
        <NavLink to="/">Entertainment Media</NavLink>
      </div>
    </li>
    <li className='dropdown'>
      <NavLink to="/S3/publications" className="dropbtn">SOBAS</NavLink>
      <div className='dropdown-content'>
        <NavLink to="/">Environmental Science</NavLink>
        <NavLink to="/">Chemistry & Physics</NavLink>
        <NavLink to="/">Forensic Science</NavLink>
        <NavLink to="/">Geography</NavLink>
        <NavLink to="/">Mathematics</NavLink>
      </div>
    </li>
    <li className='dropdown'>
      <NavLink to="/S4/publications" className="dropbtn">SOBE</NavLink>
      <div className='dropdown-content'>
        <NavLink to="/">Management</NavLink>
        <NavLink to="/">Economics and Commerce</NavLink>
      </div>
    </li>
    <li className='dropdown'>
      <NavLink to="/S5/publications" className="dropbtn">SOLACS</NavLink>
      <div className='dropdown-content'>
        <NavLink to="/">Bengali language and Literature</NavLink>
        <NavLink to="/">Sociology</NavLink>
        <NavLink to="/">Psychology</NavLink>
        <NavLink to="/">English language and Literature</NavLink>
        <NavLink to="/">Political Science</NavLink>
        <NavLink to="/">History</NavLink>
      </div>
    </li>
    <li className='dropdown'>
      <NavLink to="/S6/publications" className="dropbtn">SOLB</NavLink>
      <div className='dropdown-content'>
        <NavLink to="/">Biochemistry</NavLink>
        <NavLink to="/">Biotechnology</NavLink>
        <NavLink to="/">Microbiology</NavLink>
      </div>
    </li>
    <li className='dropdown'>
      <NavLink to="/S7/publications" className="dropbtn">SOSA</NavLink>
      <div className='dropdown-content'>
        <NavLink to="/">Agriculture</NavLink>
      </div>
    </li>
    <li className='dropdown'>
      <NavLink to="/S8/publications" className="dropbtn">SOMS</NavLink>
      <div className='dropdown-content'>
        <NavLink to="/">Pharmaceutical Technology</NavLink>
        <NavLink to="/">Allied Health Sciences</NavLink>
      </div>
    </li>
    <li className='dropdown'>
      <NavLink to="/S9/publications" className="dropbtn">SOLJ</NavLink>
      <div className='dropdown-content'>
        <NavLink to="/">Law</NavLink>
      </div>
    </li>
    <li className='dropdown'>
      <NavLink to="/S10/publications" className="dropbtn">SOE</NavLink>
      <div className='dropdown-content'>
        <NavLink to="/">Department of Education</NavLink>
      </div>
    </li>
    {auth.isLoggedIn && (
    <li className="dropdown">
      <NavLink to="/publications/new" className="dropbtn">NEW</NavLink>
    </li>
    )}
    {!auth.isLoggedIn && (
    <li className="dropdown">
      <NavLink to="/auth" className="dropbtn">LOGIN</NavLink>
    </li>
    )}
    {auth.isLoggedIn && (
      <li>
        <button onClick={auth.logout}>LOGOUT</button>
      </li>
    )}
  </ul>
};

export default NavLinks;