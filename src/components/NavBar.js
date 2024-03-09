import React from "react";
import { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from "axios";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const [toggleNavBar, setToggleNavBar] = useState();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } 
    catch (err) {
    //   console.log(err);
    }
  };

  const addPostIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      to="/posts/create"
    >
      <i className="far fa-plus-square"></i>Add Post
    </NavLink>
  );
  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/trips"
      >
        <i className="fas fa-mountain"></i>Trips List
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/adventures"
      >
        <i className="fas fa-mountain"></i>My Adventures
      </NavLink>
      <NavDropdown
        id={styles.dropdownMenu}
        title=<span 
        className={`${styles.dropdownText} d-sm-inline-column`}>
          <i className="fas fa-list"></i>
          Items
        </span>
        >
      <NavDropdown.Item
          id={styles.dropdownItem}
          as={Link}
          className={styles.NavLink}
          to="/following"
          onClick={() => {
            setToggleNavBar(!toggleNavBar);
          }}
        >
          <i className="fas fa-stream"></i>Following
        </NavDropdown.Item>
        <NavDropdown.Item
          id={styles.dropdownItem}
          as={Link}
          className={styles.NavLink}
          to="/liked"
          onClick={() => {
            setToggleNavBar(!toggleNavBar);
          }}
        >
          <i className="fas fa-heart"></i>Liked
        </NavDropdown.Item>
        <NavDropdown.Item
          id={styles.dropdownItem}
          className={styles.NavLink}
          as={Link}
          to="/contact"
          onClick={() => {
            setToggleNavBar(!toggleNavBar);
          }}
        >
          <i className="fas fa-envelope"></i>Contact Us
        </NavDropdown.Item>
      </NavDropdown>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
      </NavLink>
    </>
  );
  const loggedOutIcons = (
    <>    
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/signin"
      >
        <i className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        to="/signup"
        className={styles.NavLink}
        activeClassName={styles.Active}
      >
        <i className="fas fa-user-plus"></i>Sign up
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        to="/contact"
      >
        <i className="fas fa-envelope"></i>Contact Us
      </NavLink>
    </>
  );

  return (
    <Navbar
      expanded={toggleNavBar}
      className={styles.NavBar}
      expand="md"
      fixed="top"
      collapseOnSelect
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle
        
          onClick={() => {
            setToggleNavBar(!toggleNavBar);
          }}
          
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fas fa-home"></i>Home
            </NavLink>
            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;