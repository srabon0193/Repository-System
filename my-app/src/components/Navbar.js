import React from 'react';
import './Nav.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand " href="/">AU RESEARCH DATA REPOSITORY</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link " href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/">Developers <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item dropdown active">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" >SOET</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/">Computer Science & Engineering</a>
          <a className="dropdown-item" href="/">Civil Engineering</a>
          <a className="dropdown-item" href="/">Electrical and Electronic Engineering</a>
          <a className="dropdown-item" href="/">Mechanical Engineering</a>
      </div>
    </li>
    <li className="nav-item dropdown active">
        <a className="nav-link dropdown-toggle" data-toggle="SOMC" href="/" role="button" aria-haspopup="true" aria-expanded="false">SOMC</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/">Journalism</a>
          <a className="dropdown-item" href="/">Entertainment Media</a>
      </div>
    </li>  
    <li className="nav-item dropdown active">
        <a className="nav-link dropdown-toggle" data-toggle="SOBAS" href="/" role="button" aria-haspopup="true" aria-expanded="false">SOBAS</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/">Environmental Science</a>
          <a className="dropdown-item" href="/">Chemistry & Physics</a>
          <a className="dropdown-item" href="/">Forensic Science</a>
          <a className="dropdown-item" href="/">Geography</a>
          <a className="dropdown-item" href="/">Mathematics</a>
      </div>
    </li>  
    <li className="nav-item dropdown active">
        <a className="nav-link dropdown-toggle" data-toggle="SOBE" href="/" role="button" aria-haspopup="true" aria-expanded="false">SOBE</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/">Management</a>
          <a className="dropdown-item" href="/">Economics and Commerce</a>
      </div>
    </li>
    <li className="nav-item dropdown active">
        <a className="nav-link dropdown-toggle" data-toggle="SOLACS" href="/" role="button" aria-haspopup="true" aria-expanded="false">SOLACS</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/">Bengali language and Literature</a>
          <a className="dropdown-item" href="/">Sociology</a>
          <a className="dropdown-item" href="/">Psychology</a>
          <a className="dropdown-item" href="/">English language and Literature</a>
          <a className="dropdown-item" href="/">Political Science</a>
          <a className="dropdown-item" href="/">History</a>
      </div>
    </li>  
    <li className="nav-item dropdown active">
        <a className="nav-link dropdown-toggle" data-toggle="SOLB" href="/" role="button" aria-haspopup="true" aria-expanded="false">SOLB</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/">Biochemistry</a>
          <a className="dropdown-item" href="/">Biotechnology</a>
          <a className="dropdown-item" href="/">Microbiology</a>
      </div>
    </li> 
    <li className="nav-item dropdown active">
        <a className="nav-link dropdown-toggle" data-toggle="SOSA" href="/" role="button" aria-haspopup="true" aria-expanded="false">SOSA</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/">Agriculture</a>
      </div>
    </li>
    <li className="nav-item dropdown active">
        <a className="nav-link dropdown-toggle" data-toggle="SOMS" href="/" role="button" aria-haspopup="true" aria-expanded="false">SOMS</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/">Pharmaceutical Technology</a>
          <a className="dropdown-item" href="/">Allied Health Sciences</a>
      </div>
    </li>
    <li className="nav-item dropdown active">
        <a className="nav-link dropdown-toggle" data-toggle="SOLJ" href="/" role="button" aria-haspopup="true" aria-expanded="false">SOLJ</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/">Law</a>
      </div>
    </li>
    <li className="nav-item dropdown active">
        <a className="nav-link dropdown-toggle" data-toggle="SOE" href="/" role="button" aria-haspopup="true" aria-expanded="false">SOE</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/">Department of Education</a>
      </div>
    </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <button className="btn btn-outline-success my-1 my-sm-0" type="submit">
      <i class="fa-solid fa-magnifying-glass"></i>Search
      </button>
    </form>
  </div>
</nav>
  )
}
