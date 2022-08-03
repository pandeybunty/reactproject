import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Error from "./Error";
import Services from "./Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  const theme = {
    colors: {
      white: "#fff",
      helper:"rgb(152 58 240)",
      heading:"blue",
      bg: "rgb(209 203 203)",
      footer_bg:"rgb(76 62 77)",
      gradient:
        "Linear-gradient(0deg,rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      fotter: "#0a1435",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
