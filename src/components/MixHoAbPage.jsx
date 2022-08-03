import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { useGlobalContext } from "../context";
import { Button } from "../style/Button";

const MixHoAbPage = ({ name, image }) => {
  // const fname = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hoab-top-para">This is me</p>
          <h2 className="hoab-heading">{name}</h2>
          <p className="hoab-para">
            My self <i><b>{name}</b></i> I have just completed my engineering degree, now I’m looking for a
            chance to prove myself. I would like to give full dedication to the
            company if given an opportunity; will make sure that the company
            gets full return on its investment by putting in 100% effort during
            work hours
          </p>
          <Button className="btn-hireme">
            <NavLink to="/contact">hire me</NavLink>
          </Button>
        </div>
        <div className="section-hero-image">
          <img src={image} alt="" className="hoab-img" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn-hireme {
    max-width: 7rem;
  }
  .hoab-top-para {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hoab-heading {
    text-transform: uppercase;
    font-size: 3.4rem;
  }
  .hoab-para {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hoab-img {
    max-width: 100%;
    ${
      "" /* clip-path: polygon(20% 0%, 65% 0, 54% 51%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%); */
    }
    ${"" /* border-radius:72% 28% 67% 33% / 39% 66% 34% 61%; */}
    clip-path:circle(350px at left 10px);
    ${"" /* clip-path: circle(800px at left 900px); */}
  }
`;

export default MixHoAbPage;
