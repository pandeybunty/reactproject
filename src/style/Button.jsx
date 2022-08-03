import styled from "styled-components";

export const Button = styled.button`
 {
        text-decoration: none;
        max-width: auto;
        background-color: rgb(98 84 243);
        color: #fff;
        padding: .6rem 1rem;
        border: none;
        text-align: center;
        cursor: pointer;
        text-transform: uppercase;
        transition: all 0.3s ease 0s;
        border-radius:3px;
       }
       &:hover,
       &:active{
        box-shadow: 0 1.5rem 1.5rem 0 rgb(132 144 255/30%);
        transform: scale(0.96);
       }
       a{
        text-decoration:none;
        color:rgb(255 255 255);
        font-size:15px;
       }
`;