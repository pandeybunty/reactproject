import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <Navbar>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/service">Services</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </Navbar>
  );
};

const Navbar = styled.nav`
.navbar-list{
 display: flex;
    gap: 5.5rem;
   li{
    list-style:none;
    text-decoration:none;
    .navbar-link{
      text-decoration:none;
      &:active{
        color:${({theme}) => theme.colors.helper};
      }
    }
   }
   }
   li::before{
         content:"";
         position:absolute;
         top:68px;
         background-color:rgb(98 84 243);
         height: 1.5px;
         width:0px;
         transition: 0.6s;
       }
     li:hover::before{
           width: 55px;
       } 
`;
export default Nav;
