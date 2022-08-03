import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../style/Button";

const ServicesComponent = () => {
  const API = "https://thapareactapi.up.railway.app";

  const [users, setUsers] = useState([]);
  console.log(users);

  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      setUsers(await res.json());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Services</h2>
      <div className="container grid grid-three-column">
        {users.map((currElement) => {
          const { id, title, image, description } = currElement;
          return (
            <div className="card" key={id}>
              <figure>
                <img src={image} />
              </figure>
              <div className="card-data">
                <h3>{title}</h3>
                <p>{description}</p>
                <NavLink to="/service">
                  <Button className="button">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    max-width: 120rem;
  }
  .card {
    border: 1px solid rgba(0, 0, 0, 0.2);
    .card-data {
      padding: 0 0.8rem;
    }
    h3{
      margin: 1.2rem 0;
      font-weight: 300;
      font-size: 20px;
      text-align:center;
    }
    .button {
      border: 1px solid rgb(98 84 243);
      margin: 1.2rem auto;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgb(98 84 243);
      font-size: 12px;
      box-shadow: none;

      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
        font-size: 13px;
      }
    }
  }
  figure {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.3s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.5);
    }
    img {
      max-width: 90%;
      margin-top: 1.3rem;
      height: 10rem;
      transition: all 0.3s linear;
    }
  }
`;

export default ServicesComponent;
