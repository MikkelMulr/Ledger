import React from 'react';
import logo from '../assets/img/logo.png';

export default function Header() {
  return (
    <div className="Header">
      <div className="Header--logo">
        <img src={logo} alt="Ledger logo"/>
      </div>
      <nav className="Header--nav">
        <a href="#">About</a>
        <a href="#">Log in</a>
      </nav>
    </div>
  )
}
