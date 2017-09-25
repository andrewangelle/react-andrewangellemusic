import React, { Component } from 'react';
import NavLink from './NavLink.js';
import NavContainer from './NavContainer.js';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }
  }
  handleClick(event) {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }
  render() {
    const { isVisible } = this.state;

    if(isVisible === false){
      return (
        <NavContainer>
          <NavLink onClick={this.handleClick.bind(this)}>
            Navigation
          </NavLink>
        </NavContainer>
      );
    }

    if(isVisible === true) {
      return (
        <NavContainer>
          <NavLink onClick={this.handleClick.bind(this)}>
            Hide Nav
          </NavLink>
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
}
