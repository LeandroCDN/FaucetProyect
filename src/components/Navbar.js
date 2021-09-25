import React, { Component } from 'react'
import logo from '../images/logo.png'
import './App.css'
import './App.js'

class Navbar extends Component {

  render() {
    return (
      <nav id="bar" className="navbar navbar-dark fixed-top bg-black flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://localhost:3000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} width="31" height="31" className="d-inline-block align-top" alt="" />
          &nbsp; <h1 class="tittle">Project Manager</h1>
        </a>
        <header class="header">
          <button class="menu">Home</button>
          <button class="menu">Faucet</button>
          <button class="menu">Stake</button>
          <button class="menu">Projects</button>
          <button class="menu">Courses</button>
        </header>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <button class="connectButton"> Connect Wallet <small id="account">{this.props.account}</small></button>
              </small>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
