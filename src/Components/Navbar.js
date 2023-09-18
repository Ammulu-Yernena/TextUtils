import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
    {/* <nav classNameNameName="navbar navbar-expand-lg navbar-light bg-light">  */}   
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
  <div className="container-fluid"> 
    {/* <a className="navbar-brand" href="/">{props.title}</a>  */}

    {/* For react-router uncomment the below single line */}

    <Link className="navbar-brand" to="/">{props.title}</Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">   
      <span className="navbar-toggler-icon"></span> 
    </button> 
    <div className="collapse navbar-collapse" id="navbarScroll"> 
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"> 
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a> 

          {/* For react-router uncomment the below single line */}

          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
        </li>
        <li className="nav-item">
          <a className = "nav-link" href = "/about">{props.aboutText}</a>   

          {/* For react-router uncomment the below single line */}

          {/* <Link className = "nav-link" to = '/about'>{props.aboutText}</Link> */}
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul className="dropdown-menu"> 
            <li><a className="dropdown-item" href="/">Action</a></li> 
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Link</a>
  </li>  */}
      </ul> 
      {/* <form classNameName="d-flex" role="search">
        <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button classNameName="btn btn-outline-success" type="submit">Search</button>
      </form> */} 
      <div className={`form-check form-switch text-{props.mode === 'light'?'dark':'light'}`}> 
        <input className="form-check-input" onClick={props.toggleModeBlue} type="checkbox" role="switch" id="flexSwitchCheckDefault"/> 
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: props.mode==='dark'?'white':'black'}}>Enable Dark Mode</label> 
      </div> 
      <div className={`form-check form-switch text-{props.mode === 'light'?'dark':'light'}`}> 
        <input className="form-check-input" onClick={props.toggleModeGreen} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: props.mode==='dark'?'white':'black'}}>Enable Green Color</label> 
      </div>
      <div className={`form-check form-switch text-{props.mode === 'light'?'dark':'light'}`}> 
        <input className="form-check-input" onClick={props.toggleModePink} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: props.mode==='dark'?'white':'black'}}>Enable Pink Color</label> 
      </div>
      <div className={`form-check form-switch text-{props.mode === 'light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleModeYellow} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: props.mode==='dark'?'white':'black'}}>Enable Yellow Color</label> 
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

Navbar.propTypes = {title : propTypes.string,      
                    aboutText : propTypes.string,} 
     
Navbar.defaultProps = {title : "Set title here",
                      aboutText : "Set about heading here",}
 
