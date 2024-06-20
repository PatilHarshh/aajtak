import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NavBar extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">GetSetGoNews</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-center" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center" href="/">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center" href="/">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center" href="/">General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center" href="/">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center" href="/">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center" href="/">Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center" href="/">Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center" href="/">Know More About Us</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar