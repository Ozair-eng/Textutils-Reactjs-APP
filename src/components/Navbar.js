import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
    return (
  
     
            <nav className= {`navbar navbar-expand-lg sticky-top navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><b>{props.title}</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><b>{props.home}</b></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/about"><b>{props.About}</b> </Link>
        </li>

      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      {/* swith for dark/light mode */}
   <div className={`form-check mx-3 form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
  </div>

    </div>
  </div>
</nav>

    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    About: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title:'set title here',
  home:'home text here',
  About:'about text here',
};