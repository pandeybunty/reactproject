import React from "react";
import styled from "styled-components";
import { Button } from "../style/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Mainfooter>
      <div className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started</h3>
            <h3>Your first react project</h3>
          </div>
          <div>
            <NavLink to="/">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Ritesh Pandey</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
              alias officia.
            </p>
          </div>

          {/* 2nd column */}
          <div className="footer-advance">
            <h3>Check out this project</h3>
            <form
              action="https://formspree.io/f/xrgdzllw"
              method="POST"
              className="contact-inputs"
            >
              <input
                type="email"
                name="email"
                placeholder="email"
                autoComplete="off"
                required
                className="footer-email"
              />

              <input
                type="submit"
                value="Plz check It"
                className="footer-submit"
              />
            </form>
          </div>

          {/* 3rd column */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-icon">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a href="#" target="_blank">
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h4>+919598866853</h4>
          </div>
        </div>

        {/* bottom section */}
        <div className="footer-bottom">
          <hr />
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()} Ritesh Pandey DEVELOPED This.</p>
            <div>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </Mainfooter>
  );
};

const Mainfooter = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 3rem 5rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 0.7rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 0rem 0 3rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      margin-top: 7rem;
      margin-bottom: 1.8rem;
      color: ${({ theme }) => theme.colors.hr};
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-submit {
      background-color: rgb(98 84 243);
      font-size: 0.8rem;
      padding: 0.5rem .4rem;
      max-width: 6.4rem;
      border-radius:3px;
    }
    .footer-email{
      border-radius:3px;
      outline:none;
    }
    h4{
      color:#fff;
    }
    .footer-icon {
      display: flex;
      gap: 1.5rem;

      div {
        padding: 0.4rem;
        border-radius: 50%;
        border: 2px solid #fff;

        .icons {
          color: #fff;
          font-size: 1rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom {
      padding-top: 6rem;

      hr {
        margin-bottom: 2rem;
        color: #fff;
        height: 0.1px;
      }
    }
  }
`;

export default Footer;
