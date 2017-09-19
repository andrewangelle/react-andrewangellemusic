import React, { Component } from 'react';
import NavLink from './NavLink.js';
import NavContainer from './NavContainer.js';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <NavContainer>
        <Link to={`/`}>
          <NavLink>Home</NavLink>
        </Link>

        <Link to={`/about`}>
          <NavLink>About</NavLink>
        </Link>

        <Link to={`/contact`}>
          <NavLink>Contact</NavLink>
        </Link>

        <Link to={`/music`}>
          <NavLink>Music</NavLink>
        </Link>

        <Link to={`/performances`}>
          <NavLink>Performances</NavLink>
        </Link>

        <Link to={`/teaching`}>
          <NavLink>Teaching</NavLink>
        </Link>
      </NavContainer>
    );
  }
}
