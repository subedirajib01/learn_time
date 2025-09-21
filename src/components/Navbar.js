import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'

// This is how we pass props write props inside Navbar(...)
export default function Navbar(props){
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
<div className="container-fluid" >
    {/* <Link className="navbar-brand"to="/">{props.title}</Link>  */}
    <a className="navbar-brand" href="#">{props.title}</a> 
    {/* also see here the title is passed here using props and this can be modify according to our need */}

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent text-light">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
        <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li> */}
        
    </ul>
    <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
    </form>
    <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'}`}>
    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
    <label className="form-check-label" htmlFor="switchCheckDefault">Enable DarkMode </label>
</div>
    </div>
</div>
</nav>
    );
}
Navbar.propTypes={
    title: PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
};

    Navbar.defaultProps={
        title:"Set title here ",
        aboutText:"set about text here"
    };

    // this default props is not workinh. I do not know why it says function components defaultProps does not work in react 17+