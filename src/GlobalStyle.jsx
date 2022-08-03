import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html{
 overflow-xs:hidden;
}
h1{
    color:${({ theme }) => theme.colors.heading};
    font-size:6rem;
    opacity:.7;
    margin-top:1rem;
}
a{
  text-decoration:none;
}
li{
  list-style:none;

}
.container{
    max-width:120rem;
    margin-left:13rem;
}
.grid{
  display:grid;
  gap:5rem;
}
.grid-two-column{
  grid-template-columns:repeat(2, 1fr);
}
.grid-three-column{
  grid-template-columns:repeat(3, 1fr);
}
.grid-four-column{
  grid-template-columns:1fr 1.2fr .5fr 2fr;
}
.common-heading{
  font-size:30px;
  font-weight:600;
  margin-bottom:1.2rem;
  text-transform:capitalize;
  text-align:center;
  margin-top:.8rem;
  color:rgba(0, 0, 0, 0.9)
}

input, textarea {
  outline:none;
  max-width:25rem;
  color:${({ theme }) => theme.colors.black};
  padding:.6rem 2rem;
  ${"" /* border: 1px solid ${({ theme }) => theme.colors.border}; */}
  border:1px solid rgb(98 84 243);
  text-transform:uppercase;
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
input[type="submit"] {
  max-width:7rem;
  margin-top:1rem;
  ${"" /* background-color: 1px solid ${({ theme }) => theme.colors.button}; */}
  background-color:rgb(98 84 243);
  color: ${({ theme }) => theme.colors.white};
  padding:.5rem 0rem;
  border-style:solid;
  border-width:.1rem;
  text-transform:uppercase;
  font-size:1rem;
  cursor:pointer;
}

`;
